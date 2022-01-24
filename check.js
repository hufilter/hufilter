const puppeteer = require("puppeteer");
const { convert: ConvertHTMLToText } = require("html-to-text");
const sleep = require('sleep-promise');
const { default: fetch } = require("node-fetch");
// GitHub Actions
const core = require("@actions/core");

const convertReport = (html) => {
  const text = ConvertHTMLToText(html, { wordwrap: false });
  return text
    .split(/\r?\n/)
    .filter(
      (entry) =>
        entry.trim().length > 0 &&
        !entry.startsWith("Finished") &&
        !entry.startsWith("The following") &&
        !entry.startsWith("No errors")
    );
};

;(async () => {
  await sleep(2500);
  
  // Fetch latest hufilter release
  const hufilter = await (
    await fetch("https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-abp.txt")
  ).text();

  // Initialize Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // First rule checker site
  core.startGroup("Service: https://abpvn.com/ruleChecker/redundantRuleChecker.html");
  try {
    await page.goto("https://abpvn.com/ruleChecker/redundantRuleChecker.html", {
      waitUntil: "networkidle2",
    });
    await page.waitForSelector("textarea#filters");
    await page.$eval(
      "textarea#filters",
      (el, data) => (el.innerHTML = data),
      hufilter
    ); // Fill textarea
    await page.click("input#btnstart"); // Submit form
    await page.waitForSelector("#tab_Redundancies");
    await page.waitForSelector("#tab_Warnings");
    // Get reports
    const errors = [
      ...convertReport(
        await page.$eval("#tab_Redundancies", (el) => el.innerHTML)
      ),
      ...convertReport(
        await page.$eval(
          "#tab_Warnings > span.majorwarning",
          (el) => el.innerHTML
        )
      ),
    ];
    const warnings = convertReport(
      await page.$eval("#tab_Warnings", (el) => el.innerHTML)
    );
    // Pass results to GitHub Actions
    for (const error of errors) core.setFailed(error);
    for (const warning of warnings) core.warning(warning);
  } catch (error) {
    if (error instanceof puppeteer.errors.TimeoutError) {
      core.setFailed("Check service timed out");
    } else {
      throw error;
    }
  }
  core.endGroup();

  // Second rule checker site
  core.startGroup("Service: https://adblockplus.org/redundancy_check");
  try {
    await page.goto("https://adblockplus.org/redundancy_check", {
      waitUntil: "networkidle2",
    });
    await page.waitForSelector("textarea#filters");
    await page.$eval(
      "textarea#filters",
      (el, data) => (el.innerHTML = data),
      hufilter
    ); // Fill textarea
    await page.click('button[onclick="doCheck()"]'); // Submit form
    // Get reports
    await page.waitForSelector("ul#report > li");
    const errors = await page.$$eval("ul#report > li", (elements) =>
      elements.map((el) => el.innerText)
    );
    // Pass results to GitHub Actions
    for (const error of errors) core.setFailed(error);
  } catch (error) {
    if (error instanceof puppeteer.errors.TimeoutError) {
      core.setFailed("Check service timed out");
    } else {
      throw error;
    }
  }
  core.endGroup();

  // Close headless browser
  await browser.close();
})();
