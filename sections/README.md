# Sections

**🇭🇺 [Kattints ide a magyar nyelvű változatért][hu-version].**

This directory contains the section files that are actually contains the filtering rules. We use these files to generate
the filter lists based on the [`filters.json`][filters-json] file.

Hufilter supports the following adblockers:

<!--markdownlint-disable MD013-->
- <img src="https://cdn.adguard.com/website/github.com/AGLint/adg_logo.svg" width="14px" alt="Adblock Plus logo">[AdGuard][adg-url]
- <img src="https://cdn.adguard.com/website/github.com/AGLint/abp_logo.svg" width="14px" alt="AdGuard logo"> [Adblock Plus][abp-url]
- <img src="https://cdn.adguard.com/website/github.com/AGLint/ubo_logo.svg" width="14px" alt="uBlock Origin logo"> [uBlock Origin][ubo-url]
<!--markdownlint-enable MD013-->

## Common and adblocker-specific rules

If a filtering rule works with all supported adblockers, it will be placed into one of the common section file, which
are located in the root of the `sections` directory. For example, `sections/ads.txt`.

If a filtering rule only works with a specific adblocker, it will be placed in the corresponding "specific"
section directory based on the adblocker it works with:

- [`adguard-specific` folder][adg-section]
- [`adblock-plus-specific` folder][abp-section]
- [`ublock-origin-specific` folder][ubo-section]

> **Note:** If a filtering rule is common, but doesn't work without a specific rule, it will also be placed in the
> corresponding "specific" section directory. For example, if you hide a cookie notice with a common rule, but the
> website disables scrolling until you accept the cookies, you will need to add a specific rule to enable scrolling.
> If you put the hiding rule into the common section in this case, the website will be broken for users who use
> adblockers that don't supports your specific rule, since the scrolling will be disabled for them.

## Section files

We use the same file structure in each section directory:

- `ads.txt` - Contains rules for blocking advertisements.
- `annoyances.txt` - Contains rules for blocking annoying elements on websites, such as cookie notices, newsletter
  subscription prompts, floating elements and so on.
- `antiadblock.txt` - Contains rules for bypassing anti-adblock protections.
- `selfpromo.txt` - Contains rules for blocking self-promotion and donation requests.
- `trackers.txt` - Contains rules for blocking trackers and other privacy-invasive technologies.
- `unbreak.txt` - Contains rules for resolving issues caused by incorrect blocking.
- `security.txt` - Contains rules for blocking scams, phishing sites, malware distribution, and other security threats.

[abp-section]: https://github.com/hufilter/hufilter/tree/master/sections/adblock-plus-specific
[abp-url]: https://adblockplus.org
[adg-section]: https://github.com/hufilter/hufilter/tree/master/sections/adguard-specific
[adg-url]: https://adguard.com
[filters-json]: https://github.com/hufilter/hufilter/blob/master/filters.json
[hu-version]: https://github.com/hufilter/hufilter/blob/master/sections/README.hu.md
[ubo-section]: https://github.com/hufilter/hufilter/tree/master/sections/ublock-origin-specific
[ubo-url]: https://github.com/gorhill/uBlock
