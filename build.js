const dateFormat = require("dateformat");
const crypto = require("crypto");
const fs = require("fs").promises;
// Filters structure
const filters = require('./filters.json');

// For header example, see https://easylist-downloads.adblockplus.org/easylist.txt
const currentDate = new Date();
const version = dateFormat(currentDate, "yyyymmddHHMM", true);
const lastModified = dateFormat(currentDate, "dd mmm yyyy HH:MM Z", true);

calculateChecksum = (content) => {
  const rest = content.replace(/! Checksum: #CHECKSUM#\n/, "");
  return (crypto.createHash("md5").update(rest).digest("base64").replace("==", ""));
};

buildFilters = async () => {
  console.log('Build filters...');
  for (const filter of filters) {
    if (!filter.hasOwnProperty('sections')) continue;
    console.log(` * Building list: ${filter.output}`);
    try {
      // Collect header
      let headerContent = '';
      if (filter.hasOwnProperty('header')) {
        headerContent += await fs.readFile(`./headers/${filter.header}`);
        console.log(`   - Header: ${filter.header} added`);
      }
      // Collect sections
      console.log(`   - Sections:`);
      let content = '';
      for (const section of filter.sections) {
        content += await fs.readFile(`./sections/${section}`);
        console.log(`      - ${section} added`);
      }
      // Handle DNS filters
      if (filter.dns === true) {
        let dnsFilteredContent = '';
        const regex = /^\|\|([a-z0-9]+([-.][a-z0-9]+)*\.[a-z]{2,})($|\^$)/gm;
        const matches = content.matchAll(regex);
        for (let match of matches) {
          dnsFilteredContent += match[1] + '\n';
        }
        content = dnsFilteredContent;
      }
      // Header attributes
      if (headerContent.length) {
        // Versions
        headerContent = headerContent.replace(/#VERSION#/, version);
        headerContent = headerContent.replace(/#LAST_MODIFIED#/, lastModified);
        // Checksum
        const checksum = calculateChecksum(headerContent + content);
        headerContent = headerContent.replace(/#CHECKSUM#/, checksum);
      }
      // Write output
      await fs.writeFile(`./release/${filter.output}`, headerContent + content);
    } catch (err) {
      console.log(`   - FAILED: ${err.message}`);
    }
  }
}

;(async () => {
  await buildFilters();
})();
