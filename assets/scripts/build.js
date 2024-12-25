import dateFormat from "dateformat";
import crypto from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Filters structure
import filters from "../../filters.json" with { type: "json" };

const NULL_IP = "0.0.0.0";

// For header example, see https://easylist-downloads.adblockplus.org/easylist.txt
const currentDate = new Date();
const version = dateFormat(currentDate, "yyyymmddHHMM", true);
const lastModified = dateFormat(currentDate, "dd mmm yyyy HH:MM Z", true);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateChecksum = (content) => {
  const rest = content.replace(/! Checksum: #CHECKSUM#\n/, "");
  return crypto
    .createHash("md5")
    .update(rest)
    .digest("base64")
    .replace("==", "");
};

const withFinalNL = (content) => content.toString().trim() + "\n";

const buildFilters = async () => {
  console.log("Build filters...");
  for (const filter of filters) {
    if (!filter.hasOwnProperty("sections")) continue;
    console.log(` * Building list: ${filter.output}`);
    try {
      // Collect header
      let headerContent = "";
      if (filter.hasOwnProperty("header")) {
        headerContent += withFinalNL(
          await fs.readFile(
            path.join(__dirname, `../../sections/headers/${filter.header}`)
          )
        );
        console.log(`   - Header: ${filter.header} added`);
      }
      // Collect sections
      console.log(`   - Sections:`);
      let content = "";
      for (const section of filter.sections) {
        content += withFinalNL(
          await fs.readFile(path.join(__dirname, `../../sections/${section}`))
        );
        console.log(`      - ${section} added`);
      }
      // Handle DNS / hosts filters
      if (filter.dns || filter.hosts) {
        // TODO: Switch to AGTree and extract domain from pattern with tldts
        const regex = /^\|\|([a-z0-9]+([-.][a-z0-9]+)*\.[a-z]{2,})($|\^$)/gm;
        const matches = content.matchAll(regex);
        const domains = Array.from(matches, ([_, domain]) => domain);
        content = (
          filter.hosts
            ? domains.map((domain) => `${NULL_IP} ${domain}`)
            : domains
        ).join("\n");
      }
      // Remove empty lines
      const strippedFilters =
        content
          .split(/\r?\n/)
          .filter((line) => line.replace("!", "").trim().length > 0)
          .join("\n") +
        "\n";
      // Header attributes
      if (headerContent.length) {
        // Versions
        headerContent = headerContent.replace(/#VERSION#/, version);
        headerContent = headerContent.replace(/#LAST_MODIFIED#/, lastModified);
        headerContent = headerContent.replace(/#TITLE#/, filter.title || "hufilter");
        // Checksum
        const checksum = await calculateChecksum(headerContent + strippedFilters);
        headerContent = headerContent.replace(/#CHECKSUM#/, checksum);
      }
      const fileContent = headerContent + strippedFilters;
      // Write output
      await fs.writeFile(
        path.join(__dirname, `../../dist/${filter.output}`),
        fileContent
      );
    } catch (err) {
      console.log(`   - FAILED: ${err.message}`);
    }
  }
};

(async () => {
  // Create dist folder if not exists
  try {
    await fs.mkdir(path.join(__dirname, "../../dist"));
  } catch (err) {}

  await buildFilters();
})();
