# Sections

This directory contains the section files that are actually contains the filtering rules. We use these files to generate
the filter lists based on the [`filters.json`][filters-json] file.

Hufilter supports the following adblockers:

- <img src="https://cdn.adguard.com/website/github.com/AGLint/adg_logo.svg" width="14px"> [AdGuard][adg-url]
- <img src="https://cdn.adguard.com/website/github.com/AGLint/abp_logo.svg" width="14px"> [Adblock Plus][abp-url]
- <img src="https://cdn.adguard.com/website/github.com/AGLint/ubo_logo.svg" width="14px"> [uBlock Origin][ubo-url]

If a rule works with all supported adblockers, it will be placed into one of the common section file, which are located
in the root of the `sections` directory. For example, `sections/ads.txt`.

If a filtering rule only works with a specific adblocker only, it will be placed in the corresponding "specific"
section directory based on the adblocker it works with:

- [`adguard-specific` folder][adg-section]
- [`adblock-plus-specific` folder][abp-section]
- [`ublock-origin-specific` folder][ubo-section]

## Section files

We use the same file structure in each directory:

- `ads.txt` - contains rules for blocking ads
- `annoyances.txt` - contains rules for blocking annoyances, such as cookie notices, newsletter popups, etc.
- `antiadblock.txt` - contains rules for blocking anti-adblock mechanisms
- `selfpromo.txt` - contains rules for blocking self-promotion
- `trackers.txt` - contains rules for blocking trackers, analytics, etc.
- `unbreak.txt` - contains rules for resolving issues caused by incorrect blocking

[abp-section]: https://github.com/hufilter/hufilter-dev/tree/master/sections/adblock-plus-specific
[abp-url]: https://adblockplus.org
[adg-section]: https://github.com/hufilter/hufilter-dev/tree/master/sections/adguard-specific
[adg-url]: https://adguard.com
[filters-json]: https://github.com/hufilter/hufilter-dev/blob/master/filters.json
[ubo-section]: https://github.com/hufilter/hufilter-dev/tree/master/sections/ublock-origin-specific
[ubo-url]: https://github.com/gorhill/uBlock
