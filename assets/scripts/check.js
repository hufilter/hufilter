import { FilterListParser } from "@adguard/agtree/parser";
import fs from "fs/promises";
import path from "path";
import { chromium } from "playwright";

const filterPath = path.join(process.cwd(), "dist", "hufilter.txt");

const parseFilterList = async (filePath) => {
  try {
    console.log(`Parsing filter list from ${filePath}...`);
    const content = await fs.readFile(filePath, "utf-8");
    const ast = FilterListParser.parse(content);

    const rules = ast.children.filter((rule) => rule.category === "Cosmetic");

    console.log("Filter list parsed successfully.");
    console.log(`Total rules: ${ast.children.length}`);
    console.log(`Cosmetic rules: ${rules.length}`);

    return rules;
  } catch (error) {
    console.error("Error parsing filter list:", error);
    throw error;
  }
};

const rules = await parseFilterList(filterPath);
const groupedRules = {};

for (const rule of rules) {
  const domains = rule.domains.children
    .filter((domain) => domain.value !== "hu")
    .map((domain) => domain.value);
  for (const domain of domains) {
    groupedRules[domain] ??= [];
    groupedRules[domain].push({
      rule: rule.raws.text,
      selector: rule.body.selectorList.value,
    });
  }
}

console.log(`Total unique domains: ${Object.keys(groupedRules).length}`);

// Sort groupedRules alphabetically.
const sortedGroupedRules = Object.keys(groupedRules)
  .sort()
  .reduce((acc, key) => {
    acc[key] = groupedRules[key];
    return acc;
  }, {});

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const possiblyOutdatedRules = [];
const failedToLoad = [];

try {
  for (const [domain, filters] of Object.entries(sortedGroupedRules)) {
    const url = `http://${domain}`;
    console.log(`\nChecking domain: ${url}`);
    const page = await context.newPage();
    try {
      await page.goto(url, { timeout: 30000, waitUntil: "load" });
    } catch (error) {
      console.error(`  - 🛑 Failed to load domain: ${domain}.`, error);
      failedToLoad.push(url);
      continue;
    }

    for (const filter of filters) {
      const modifiedSelector = filter.selector.replaceAll(":-abp-has", ":has");

      // TODO: Handle these rules. Playwright supports find by text: https://playwright.dev/docs/locators#filter-by-text
      if (/-abp-contains|-abp-properties/.test(modifiedSelector)) {
        console.warn(
          `  - ⚠️ Skipping rule ${filter.rule} as it has unsupported ABP selector(s).`
        );
        continue;
      }

      try {
        console.log(`  - Checking rule: ${filter.rule}`);
        const elementCount = await page.locator(modifiedSelector).count();
        if (elementCount === 0) {
          console.warn(
            `    ⚠️ No elements found for selector ${modifiedSelector} on domain: ${url}`
          );
          possiblyOutdatedRules.push(filter.rule);
        } else {
          console.log(
            `    ✅ Found ${elementCount} elements for selector ${modifiedSelector} on domain: ${url}`
          );
        }
      } catch (error) {
        console.error(
          `    🛑 Error checking rule ${filter.rule} on domain: ${url}`,
          error
        );
        failedToLoad.push(url);
      }
    }

    await page.close();
  }
} catch (error) {
  console.error(error);
} finally {
  await browser.close();
}

if (possiblyOutdatedRules.length > 0) {
  console.warn(
    `\nPossibly outdated rules:\n\n${possiblyOutdatedRules.join("\n")}`
  );
}

if (failedToLoad.length > 0) {
  console.error(`\nFailed to load domains:\n\n${failedToLoad.join("\n")}`);
}

console.log(`\nALL DONE!`);
