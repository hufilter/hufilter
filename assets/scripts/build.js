import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

import dateFormat from 'dateformat';
import tldts from 'tldts';
import punycode from 'punycode/punycode.js';
import { FilterListParser, RuleCategory } from '@adguard/agtree';

// Filters structure
import filters from '../../filters.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EMPTY_STRING = '';
const NULL_IP = '0.0.0.0';
const WILDCARD = '*';
const ADBLOCK_URL_SEPARATOR = '^';
const ADBLOCK_PROTOCOL_MASK = '||';
const ADBLOCK_COMMENT_MARKER = '!';
const HTTP_PROTOCOL = 'http://';
const HTTPS_PROTOCOL = 'https://';
const WILDCARD_PREFIX = '*.';
const DOT = '.';
const BASE64_PADDING = '==';
const LF = '\n';

// For header example, see https://easylist-downloads.adblockplus.org/easylist.txt
const currentDate = new Date();
const version = dateFormat(currentDate, 'yyyymmddHHMM', true);
const lastModified = dateFormat(currentDate, 'dd mmm yyyy HH:MM Z', true);

// https://github.com/AdguardTeam/HostlistCompiler?tab=readme-ov-file#-removemodifiers
const dnsCompatibleModifiers = new Set([
  // TODO: consider enabling these modifiers later
  // 'third-party',
  // '3p',
  'document',
  'doc',
  'all',
  'popup',
  'network',
]);

const calculateChecksum = (content) => {
  const rest = content.replace(/! Checksum: #CHECKSUM#\n/, EMPTY_STRING);
  return crypto.createHash('md5').update(rest).digest('base64').replace(BASE64_PADDING, EMPTY_STRING);
};

const withFinalNL = (content) => content.toString().trim() + LF;

const getDnsCompatibleDomains = (content) => {
  const domains = new Set();
  const wildcardDomains = new Set();
  const adblockWildcardDomains = new Set();

  const filterListNode = FilterListParser.parse(content);

  for (const ruleNode of filterListNode.children) {
    // ignore non-network or exceptional network rules
    if (ruleNode.category !== RuleCategory.Network || ruleNode.exception) {
      continue;
    }

    // rule may have modifiers, in this case we should allow only dns compatible modifiers
    // e.g. domain from `||example.com^$document` could be included in dns filters as well
    if (
      ruleNode.modifiers?.children.length > 0 &&
      ruleNode.modifiers.children.some((modifier) => !dnsCompatibleModifiers.has(modifier.name.value))
    ) {
      continue;
    }

    const pattern = ruleNode.pattern.value;

    let cleanedPattern = pattern;

    let isWildcard = false;
    let isAdblockWildcard = false;

    // trim protocols
    if (cleanedPattern.startsWith(ADBLOCK_PROTOCOL_MASK)) {
      // remove leading `||`, if present
      cleanedPattern = cleanedPattern.slice(ADBLOCK_PROTOCOL_MASK.length);
    } else if (cleanedPattern.startsWith(HTTP_PROTOCOL)) {
      // remove leading `http://`, if present
      cleanedPattern = cleanedPattern.slice(HTTP_PROTOCOL.length);
    } else if (cleanedPattern.startsWith(HTTPS_PROTOCOL)) {
      // remove leading `https://`, if present
      cleanedPattern = cleanedPattern.slice(HTTPS_PROTOCOL.length);
    }

    // trim trailing URL separator
    if (cleanedPattern.endsWith(WILDCARD + ADBLOCK_URL_SEPARATOR)) {
      // remove trailing `*^`, if present
      cleanedPattern = cleanedPattern.slice(0, -(WILDCARD + ADBLOCK_URL_SEPARATOR).length);
    } else if (cleanedPattern.endsWith(ADBLOCK_URL_SEPARATOR)) {
      // remove trailing `^`, if present
      cleanedPattern = cleanedPattern.slice(0, -ADBLOCK_URL_SEPARATOR.length);
    }

    let patternToCheckWithTldts = cleanedPattern;

    // remove leading `*.`, if present, because tldts cannot handle it
    if (patternToCheckWithTldts.startsWith(WILDCARD_PREFIX + DOT)) {
      patternToCheckWithTldts = patternToCheckWithTldts.slice((WILDCARD_PREFIX + DOT).length);
      isWildcard = true;
    }

    // pattern may still include `*`
    // in this case its likely an adblock style rule
    // and we should remove such wildcards before parsing with tldts,
    // because tldts cannot handle them
    if (patternToCheckWithTldts.includes(WILDCARD)) {
      // maybe this case should be improved later
      patternToCheckWithTldts = patternToCheckWithTldts
        // e.g. `example.*.com`
        .replaceAll(`${DOT}${WILDCARD}${DOT}`, EMPTY_STRING)
        // e.g. `example.*`
        .replaceAll(`${DOT}${WILDCARD}`, EMPTY_STRING)
        // e.g. `ad*.example.com`
        .replaceAll(WILDCARD, EMPTY_STRING);
      isAdblockWildcard = true;
    }

    const tldtsResult = tldts.parse(patternToCheckWithTldts);

    // not a valid hostname
    if (tldtsResult.hostname !== patternToCheckWithTldts) {
      continue;
    }

    if (isWildcard && !isAdblockWildcard) {
      wildcardDomains.add(cleanedPattern);
    } else if (isAdblockWildcard) {
      adblockWildcardDomains.add(cleanedPattern);
    } else {
      domains.add(punycode.toASCII(cleanedPattern));
    }
  }

  return {
    domains: Array.from(domains),
    wildcardDomains: Array.from(wildcardDomains),
    adblockWildcardDomains: Array.from(adblockWildcardDomains),
  };
};

const buildFilters = async () => {
  console.log('Build filters...');
  for (const filter of filters) {
    if (!filter.hasOwnProperty('sections')) continue;
    console.log(` * Building list: ${filter.output}`);
    try {
      // Collect header
      let headerContent = EMPTY_STRING;
      if (filter.hasOwnProperty('header')) {
        headerContent += withFinalNL(
          await fs.readFile(path.join(__dirname, `../../sections/headers/${filter.header}`)),
        );
        console.log(`   - Header: ${filter.header} added`);
      }
      // Collect sections
      console.log(`   - Sections:`);
      let content = EMPTY_STRING;
      for (const section of filter.sections) {
        content += withFinalNL(await fs.readFile(path.join(__dirname, `../../sections/${section}`)));
        console.log(`      - ${section} added`);
      }
      // Handle DNS / hosts filters
      if (filter.dns || filter.dnsMasq || filter.dnsAdblockStyle || filter.hosts) {
        const { domains, wildcardDomains, adblockWildcardDomains } = getDnsCompatibleDomains(content);

        if (filter.dns) {
          content = domains.join(LF);
        } else if (filter.dnsMasq) {
          content = domains.map((domain) => `local=/${domain}/`).join(LF);
        } else if (filter.dnsAdblockStyle) {
          content = [...domains, ...wildcardDomains, ...adblockWildcardDomains]
            .map((domain) => `${ADBLOCK_PROTOCOL_MASK}${domain}${ADBLOCK_URL_SEPARATOR}`)
            .join(LF);
        } else if (filter.hosts) {
          content = domains.map((domain) => `${NULL_IP} ${domain}`).join(LF);
        }
      }
      // Remove empty lines
      const strippedFilters =
        content
          .split(/\r?\n/)
          .filter((line) => line.replace(ADBLOCK_COMMENT_MARKER, EMPTY_STRING).trim().length > 0)
          .join(LF) + LF;
      // Header attributes
      if (headerContent.length) {
        // Versions
        headerContent = headerContent.replace(/#VERSION#/, version);
        headerContent = headerContent.replace(/#LAST_MODIFIED#/, lastModified);
        headerContent = headerContent.replace(/#TITLE#/, filter.title || 'hufilter');
        // Checksum
        const checksum = await calculateChecksum(headerContent + strippedFilters);
        headerContent = headerContent.replace(/#CHECKSUM#/, checksum);
      }
      const fileContent = headerContent + strippedFilters;
      // Write output
      await fs.writeFile(path.join(__dirname, `../../dist/${filter.output}`), fileContent);
    } catch (err) {
      console.log(`   - FAILED: ${err.message}`);
    }
  }
};

try {
  await fs.mkdir(path.join(__dirname, '../../dist'));
} catch (err) {}

await buildFilters();
