<!-- markdownlint-disable -->
&nbsp;
<p align="center">
    <img
        src="https://raw.githubusercontent.com/hufilter/hufilter-dev/master/assets/images/hufilter.svg"
        width="128rem"
        alt="hufilter"
    />
</p>
<h3 align="center">The Hungarian Adblock Filter List</h3>
<p align="center">Supported Adblockers:</p>
<p align="center">
    <a href="https://adguard.com/"
        ><img
            src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg"
            width="14px"
        />
        AdGuard</a
    >
    |
    <a href="https://github.com/gorhill/uBlock"
        ><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px" /> uBlock
        Origin</a
    >
    |
    <a href="https://adblockplus.org/"
        ><img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px" />
        Adblock Plus</a
    >
    |
    <a href="https://adblockultimate.net/"
        ><img
            src="https://gist.githubusercontent.com/scripthunter7/418eb959a67d230f1f0975a222078565/raw/85854779bc661bce93b6abccea6ed56fca5c2844/adblocker_ultimate_logo.svg"
            width="14px"
        />
        AdBlocker Ultimate</a
    >
    |
    <a href="https://getadblock.com/"
        ><img
            src="https://gist.githubusercontent.com/scripthunter7/45f46156b3e4efdd13817ffc57389feb/raw/6024bd84726be876839925f328faa3afb45e0534/adblock_logo.svg"
            width="14px"
        />
        AdBlock</a
    >
</p>
<p align="center">
    <a href="https://github.com/hufilter/hufilter-dev/actions/workflows/aglint.yml" target="_blank"
        ><img
            src="https://github.com/hufilter/hufilter-dev/actions/workflows/aglint.yml/badge.svg?branch=master"
            alt="AGLint status"
    /></a>
    <a href="https://github.com/hufilter/hufilter-dev/graphs/contributors" target="_blank"
        ><img src="https://img.shields.io/github/contributors/hufilter/hufilter-dev" alt="GitHub contributors"
    /></a>
    <a href="https://github.com/hufilter/hufilter-dev/blob/master/LICENSE" target="_blank"
        ><img src="https://img.shields.io/github/license/hufilter/hufilter-dev" alt="License"
    /></a>
</p>
<!-- markdownlint-restore -->

# Hufilter developer documentation

> Please read this short documentation if you would like to contribute to the hufilter project! Thank you!

**First of all, the project is being developed in this repository.**
[The another repository, called hufilter](https://github.com/hufilter/hufilter), is **only the result of the
[build process](https://github.com/hufilter/hufilter-dev/blob/master/.github/workflows/automatic-deploy.yml) and its
content are overwritten after each build.**

## Sections

Filter rule categories can be found in [`sections`](https://github.com/hufilter/hufilter-dev/tree/master/sections)
directory. Currently available filter categories:

| Filename | Description | Syntax |
|--- |------------------------------------ |--- |
| [ads.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/ads.txt) | Filtering rules that blocks **ads only**. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** |
| [trackers.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/trackers.txt) | Filtering rules that blocks trackers and analytics systems. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** |
| [annoyances.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/annoyances.txt) | Filtering rules that blocks annoying elements, such as cookie popups, intrusive notifications, recommendations, floating elements, etc. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** |
| [antiadblock.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/antiadblock.txt) | Filtering rules that bypasses anti-adblock scripts, only if this can be solved with ABP capabilities. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** |
| [selfpromo.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/selfpromo.txt) | Filtering rules that blocks self-promitions. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** |
| [other.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/other.txt) | Anything that does not fall into the categories listed above. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** |
| [abp-specific.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/abp-specific.txt) | ABP scriptlet rules. | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> **Adblock Plus syntax** \*  |
| [ublock-specific.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/ublock-specific.txt) | Mixed rules that requires uBlock Origin capabilities. | <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> **uBlock Origin syntax** \*  |
| [adguard-specific.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/adguard-specific.txt) | Mixed rules that requires AdGuard capabilities. | <img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> **AdGuard syntax** \* |

\* Both of Adguard and uBlock Origin are able to interpret the syntax of Adblock Plus.

## References

Useful links to documentations.

<!--markdownlint-disable MD013-->
- <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> Adblock Plus:
    - [ABP filter cheatsheet](https://adblockplus.org/filter-cheatsheet)
    - [ABP filter how-to](https://help.eyeo.com/adblockplus/how-to-write-filters)
    - [ABP scriptlets](https://help.eyeo.com/adblockplus/snippet-filters-tutorial#snippets-ref)
- <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> uBlock Origin:
    - [uBO filter syntax](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax)
    - [uBO scriptlets](https://github.com/gorhill/uBlock/wiki/Resources-Library)
- <img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> AdGuard:
    - [AG filter syntax](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters)
    - [AG scriptlets](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#scriptlets)
- [Scriptlets compatibility table (by AdGuard)](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/compatibility-table.md#scriptlets)
- [Redirects compatibility table](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/compatibility-table.md#-redirects-compatibility-table)
- [CSS selectors (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)  
<!--markdownlint-enable MD013-->

## Build process

The build process is executed automatically if a push event is triggered in this repository.

## Recommended environment

We recommend using [Visual Studio Code](https://code.visualstudio.com/download) for development. Please install
[recommended extensions](https://github.com/hufilter/hufilter-dev/blob/master/.vscode/extensions.json) in order to work
with syntax highlight.

## Contact

- E-mail: [hufilter@protonmail.com](mailto:hufilter@protonmail.com)
- Forum: [Discussions](https://github.com/hufilter/hufilter/discussions)
- Issue management: [Please use this form](https://github.com/hufilter/hufilter-dev/issues/new/choose) (GitHub account
  required).

## Licensing

The hufilter project is a community project, and it is maintained by volunteers. It is licensed under the "Creative
Commons Attribution 4.0" license. This means that you can use the project for free, and you can also modify it. However,
you must give credit to the original authors of the project. You can read the full license text
[here](https://creativecommons.org/licenses/by/4.0/legalcode).

The project hufilter is distributed under the "Creative Commons Attribution 4.0" license. Contributors are licensing
their work under the very same terms and conditions.

<!--markdownlint-disable MD013-->
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
<!--markdownlint-enable MD013-->
