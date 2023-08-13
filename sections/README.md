# Sections

This directory contains the sections that are used to build the filter lists. The sections are divided into categories,
and each category has its own file. The sections are merged into one file during the build process based on the
`filters.json` file.

## Supported syntaxes

Hufilter supports the following syntaxes:

- [Adblock Plus](https://help.adblockplus.org/hc/en-us/articles/360062733293)
- [uBlock Origin](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax)
- [AdGuard](https://adguard.com/kb/general/ad-filtering/create-own-filters/)

Each syntax has its own directory in the `sections` folder.

## Common sections

We also have a `common` directory that contains rules that are compatible with every syntax.
