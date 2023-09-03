# Contributing to Hufilter

## Table of contents

- [Hufilter - The Hungarian Adblock Filter List](#hufilter---the-hungarian-adblock-filter-list)
- [How to contribute](#how-to-contribute)
  - [Filtering guidelines](#filtering-guidelines)
  - [Reporting issues](#reporting-issues)
  - [Adding or modifying filter rules](#adding-or-modifying-filter-rules)
    - [Filter categories](#filter-categories)
    - [Filter syntax](#filter-syntax)
    - [Filter examples](#filter-examples)
  - [Testing and debugging filter rules](#testing-and-debugging-filter-rules)
  - [Code style and formatting](#code-style-and-formatting)
- [References](#references)
- [Licensing](#licensing)

## Hufilter - The Hungarian Adblock Filter List

Hufilter is a community project that aims to create and maintain an adblock filter list, which is designed to remove ads, annoyances, and various tracking methods from hungarian websites. Technically hufilter is just a list of filter rules that can be used by an adblocker to block the appearance or functionality of certain elements (e.g. ads, trackers, etc.) on viewed pages.

Hufilter supports most adblockers, for example: AdGuard Browser Extension, uBlock Origin, Adblock Plus, AdGuard Home and Pi-hole.

For more information about the hufilter project, please visit the [README.md](https://github.com/hufilter/hufilter-dev/blob/master/README.md) file.

## How to contribute

If you would like to contribute to the hufilter project, please read this short documentation carefully. Thank you for your interest and support!

### Filtering guidelines

Filtering is not limited to advertising only, you can also modify other elements of content.

The rules of hufilter are essentially subjective, based on personal intuition. The hufilter maintenance team reserves the right to accept or reject any submission or request, even without giving reasons. The filtering guidelines are not set in stone, but rather a general guide to the main underlying principles - in extreme cases, a filtering rule may be included that is not justified by or contradicts the guidelines. This may sound a bit harsh, but it is important that everyone is clear on the position of the hufilter maintenance team on this issue and to prevent any misunderstandings later on.

Those submitting filter rules agree and accept what is written here. 

It is not the intention of hufilter to destroy or make impossible the operation of any site, although sometimes a filtering rule for undesirable content may unfortunately be so complex that it conflicts with functions unrelated to advertising.

Hufilter is not concerned with filtering invitation-only sites. The reason is simple: there is no quick and easy way to check submitted rules. And please don't send invitations either.

You take responsibility for the submission, with contact information (GitHub account is enough) in case there are problems or inquiries about your work. Anonymous submissions will be rejected without response.

### Reporting issues

If you encounter any issues with the hufilter project, such as broken websites, missed ads, false positives, etc., please use the following methods to report them:

- Use this [form](https://github.com/hufilter/hufilter-dev/issues/new/choose) (GitHub account required) to create a new issue in the hufilter-dev repository. Please fill out the template with as much detail as possible, and attach screenshots if necessary.
- Use the [Discussions](https://github.com/hufilter/hufilter-dev/discussions) section of the hufilter-dev repository to ask questions, share feedback, or suggest new features.
- Send an email to [hufilter@protonmail.com](mailto:hufilter@protonmail.com) with a clear description of the problem and the URL of the affected website.

Please **do not** report issues in [the other hufilter repository](https://github.com/hufilter/hufilter), as it is only used for releases and its content is overwritten after each build.

### Adding or modifying filter rules

If you would like to add or modify filter rules for the hufilter project, please follow these steps:

- Fork the [hufilter-dev](https://github.com/hufilter/hufilter-dev) repository and clone it to your local machine (or use the web interface).
- Create a new branch for your changes and switch to it.
- Edit the relevant files in the `sections` directory.
- Make a Pull Request with a clear description of the problem.

#### Filter categories

Currently available filter categories are:

| Filename | Description | Syntax |
| --- | --- | --- |
| [ads.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/ads.txt) | Filtering rules that block ads only. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** \* |
| [trackers.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/trackers.txt) | Filtering rules that block trackers and analytics systems. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** \* |
| [annoyances.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/annoyances.txt) | Filtering rules that block annoying elements, such as cookie popups, intrusive notifications, recommendations, floating elements, etc. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** \* |
| [antiadblock.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/antiadblock.txt) | Filtering rules that bypass anti-adblock scripts, only if this can be solved with ABP capabilities. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** \* |
| [selfpromo.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/selfpromo.txt) | Filtering rules that block self-promotions. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** \* |
| [other.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/other.txt) | Anything that does not fall into the categories listed above. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** \* |
| [abp-specific.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/abp-specific.txt) | ABP scriptlet rules. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** \* |
| [ublock-specific.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/ublock-specific.txt) | Mixed rules that require uBlock Origin capabilities. | <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> **uBlock Origin syntax** \* |
| [adguard-specific.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/adguard-specific.txt) | Mixed rules that require AdGuard capabilities. | <img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> **AdGuard syntax** \* |

\* Note: Some adblockers may not support scriptlets or redirects, or may have different syntax for them. Please refer to the [References](#references) section for more information.

#### Filter syntax

Each filter category uses a specific syntax to define the filter rules. The syntax consists of a pattern that matches a URL or an element on a web page, and optionally some options that modify the behavior of the rule.

The most common syntax is the Adblock Plus syntax, which is used by most filter categories. The Adblock Plus syntax has two types of rules: network rules and cosmetic rules.

Network rules are used to block or allow requests to certain URLs based on their patterns. A network rule can start with either `||` or `|` to indicate the beginning of the URL, and end with either `^` or `|` to indicate the end of the URL. A network rule can also contain wildcards (`*`) to match any character sequence, or separators (`^`) to match anything except a letter, a digit, or one of the following characters: `_ - . %`. A network rule can also have options that start with a dollar sign (`$`) and are separated by commas (`,`). Options can specify the type of request to match (e.g. `image`, `script`, `popup`, etc.), the domain name of the website where the rule applies (e.g. `domain=example.com`), or other modifiers (e.g. `important`, `match-case`, `third-party`, etc.).

Cosmetic rules are used to hide or modify elements on a web page based on their CSS selectors. A cosmetic rule can start with either `##` or `#?#` to indicate a hiding rule, or `#$#` or `#@$#` to indicate a modifying rule. A hiding rule can contain a CSS selector that matches the element to be hidden. A modifying rule can contain a CSS selector and a CSS property that modifies the element. A cosmetic rule can also have options that start with a colon (`:`) and are separated by commas (`,`). Options can specify the domain name of the website where the rule applies (e.g. `example.com`), or other modifiers (e.g. `generichide`, `style`, `scriptlet`, etc.).

The other syntaxes are the uBlock Origin syntax and the AdGuard syntax, which are used by the ublock-specific.txt and adguard-specific.txt filter categories, respectively. These syntaxes are extensions of the Adblock Plus syntax, and they introduce some additional features, such as extended CSS selectors, scriptlets, redirects, HTML filters, etc.

For more information about the filter syntaxes, please refer to the [References](#references) section below.

#### Filter examples

Here are some examples of filter rules for each filter category:

- ads.txt: Blocking ads on example.com

  - Network rule: `||example.com/ads/*`
  - Cosmetic rule: `example.com##.ad-banner`

- trackers.txt: Blocking Google Analytics on all websites

  - Network rule: `||google-analytics.com^`
  - Cosmetic rule: N/A

- annoyances.txt: Blocking cookie consent popups on example.com

  - Network rule: N/A
  - Cosmetic rule: `example.com##.cookie-consent`

- antiadblock.txt: Bypassing anti-adblock script on example.com

  - Network rule: `||example.com/adblock-detector.js`
  - Cosmetic rule: N/A

- selfpromo.txt: Blocking self-promotion banner on example.com

  - Network rule: `||example.com/promo-banner.jpg`
  - Cosmetic rule: N/A

- other.txt: Blocking social media buttons on example.com

  - Network rule: `||example.com/social/*`
  - Cosmetic rule: `example.com##.social-buttons`

- abp-specific.txt: Injecting a scriptlet to disable a timer on example.com

  - Network rule: N/A
  - Cosmetic rule: `example.com#$#abort-on-property-read setTimeout`

- ublock-specific.txt: Redirecting a tracking request to a neutered version on example.com

  - Network rule: `||example.com/tracker.js$script,redirect=tracker.js`
  - Cosmetic rule: N/A

- adguard-specific.txt: Removing an HTML element with an attribute on example.com

  - Network rule: N/A
  - Cosmetic rule: `example.com#$#remove() [data-ad="true"]`

### Testing and debugging filter rules

Before submitting your changes, you should test your filter rules using your preferred adblocker. You can load your local files as custom filter lists in most adblockers.

To test and debug your filter rules, you can use the developer tools of your browser or the tools provided by your adblocker. For example:

- In Chrome, you can press F12 to open the developer tools, and use the Network tab to inspect the requests made by the web page, and the Elements tab to inspect the HTML elements on the web page.
- In uBlock Origin, you can click on the logger icon to open the logger, which shows you all the requests made by the web page and how they are filtered by your rules. You can also click on the element picker icon to select an element on the web page and create a cosmetic rule for it.
- In AdGuard, you can click on the filtering log icon to open the filtering log, which shows you all the requests made by the web page and how they are filtered by your rules.

For more information about testing and debugging filter rules, please refer to the documentations of your browser or adblocker.

### Code style and formatting

When adding or modifying filter rules, please follow these guidelines for code style and formatting:

- Wherever possible, the `*=` and `^=` attribute selectors should be reduced/replaced by a more optimal solution
- The CSS selectors should be as "optimal" as possible, e.g. if it's possible to specify `#id` selector, avoid the `id="id"` attribute selector, try to avoid `nth-child`, etc.
- We prefer single selectors, so instead of `##.selector1, .selector2` please always use `##.selector1` and `##.selector2`
- The rule should be prepared in such a way that if the structure of the website changes in the future, it will cause breakage on the page with the smallest possible chance
- Use Extended CSS only in justified cases
- Use lowercase letters for domain names and URL patterns, unless case sensitivity is required.
- Put your rules in alphabetical order.

Here is an example of a well-formatted filter rule:

```txt
! this line is where the issue's link should be put
||example.com/ads/*
example.com##.ad-banner
```

## References

Useful links to documentations:

- Adblock Plus:
  - [ABP filter cheatsheet](https://adblockplus.org/filter-cheatsheet)
  - [ABP filter how-to](https://help.eyeo.com/en/adblockplus/how-to-write-filters)
  - [ABP scriptlets](https://help.eyeo.com/en/adblockplus/snippet-filters)
- uBlock Origin:
  - [uBO filter syntax](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax)
  - [uBO scriptlets](https://github.com/gorhill/uBlock/wiki/Resources-Library)
- AdGuard:
  - [AG filter syntax](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters)
  - [AG scriptlets](https://github.com/AdguardTeam/Scriptlets)
  - [Scriptlets compatibility table](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/compatibility-table.md)
  - [Redirects compatibility table](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/redirects-compatibility-table.md)
- CSS selectors (MDN):
  - [CSS selectors reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

## Licensing

The hufilter project is a community project, and it is maintained by volunteers. It is licensed under the "Creative Commons Attribution 4.0" license. This means that you can use the project for free, and you can also modify it. However, you must give credit to the original authors of the project. You can read the full license text [here](https://creativecommons.org/licenses/by/4.0/).

Contributors are licensing their work under the very same terms and conditions.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
