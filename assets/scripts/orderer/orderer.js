// Basic filter orderer
// By scripthunter7

const fs = require("fs");
const FilterOrderer = require("./orderer.lib");

const main = () => {
  // Get file contents
  const filename = process.argv[2];
  const lines = fs.readFileSync(filename, "utf-8").split(/\r?\n/);

  // Handle orderer
  const filterOrderer = new FilterOrderer();
  const output = filterOrderer.parse(lines).order().generateOutput();

  // For debugging purposes
  //console.log(output);
  //console.log(JSON.stringify(filterOrderer.getSections(), null, 4));

  // Write generated output to file
  fs.writeFileSync(filename, output);
};

main();
