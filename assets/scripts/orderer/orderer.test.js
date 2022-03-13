// Basic test for filter orderer

const FilterOrderer = require("./orderer.lib");
const fs = require("fs");
const path = require("path");
const { expect } = require("chai");
const chalk = require("chalk");

// Basic file functions
const getFileContents = (path) => fs.readFileSync(path, "utf-8");
const getFileLines = (path) => getFileContents(path).split(/\r?\n/);

// Compare output with expect file
const checkTestCase = (testCase) => {
  const filterOrderer = new FilterOrderer();
  const ordererOutput = filterOrderer
    .parse(
      getFileLines(path.join(__dirname, `./tests/test${testCase}-input.txt`))
    )
    .order()
    .generateOutput();
  const expectedOutput = getFileContents(
    path.join(__dirname, `./tests/test${testCase}-expected.txt`)
  );
  expect(ordererOutput).to.be.equal(expectedOutput);
};

// Test cases
describe(chalk.cyanBright.bold("Filter Orderer Tests"), () => {
  it("Empty file", () => checkTestCase(1));
  it("Single comment", () => checkTestCase(2));
  it("Multiple comments", () => checkTestCase(3));
  it("Multiple comments, empty lines removed", () => checkTestCase(4));
  it("Lines trimmed", () => checkTestCase(5));
  it("Sort rules in signle unnamed section", () => checkTestCase(6));
  it("Sort rules in signle unnamed section, and keep rule comments", () =>
    checkTestCase(7));
  it("Sort rules in signle unnamed section, and keep rule & header & footer comments", () =>
    checkTestCase(8));
  it("Sort one named section", () => checkTestCase(9));
  it("Sort one named section, and keep rule & header & footer comments", () =>
    checkTestCase(10));
  it("Sort multiple named sections", () => checkTestCase(11));
  it("Sort multiple named sections, and keep rule & header & footer comments", () =>
    checkTestCase(12));
  it("Sort one unnamed and multiple named sections, and keep rule & header & footer comments", () =>
    checkTestCase(13));
  it("Sort one unnamed and multiple named sections, and keep rule & header & footer & description comments", () =>
    checkTestCase(14));
});
