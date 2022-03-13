&nbsp;
<div>
  <p align="center">
    <img src="https://raw.githubusercontent.com/hufilter/hufilter-dev/master/assets/images/hufilter_light.png#gh-light-mode-only" width="450px" alt="hufilter logo light mode" />
    <img src="https://raw.githubusercontent.com/hufilter/hufilter-dev/master/assets/images/hufilter_dark.png#gh-dark-mode-only" width="450px" alt="hufilter logo dark mode" />
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" alt="License: CC BY 4.0" />
    <img src="https://github.com/hufilter/hufilter-dev/actions/workflows/automatic-deploy.yml/badge.svg" alt="Automatic deploy status" />
    <img src="https://github.com/hufilter/hufilter-dev/actions/workflows/redundancy-check.yml/badge.svg" alt="Redundancy check status" />
  </p>
</div>

# Hufilter developer documentation

> Please read this short documentation if you would like to contribute to the hufilter project! Thank you!

**First of all, the project is being developed in this repository.** [The another repository, called hufilter](https://github.com/hufilter/hufilter), is **only the result of the [build process](https://github.com/hufilter/hufilter-dev/blob/master/.github/workflows/automatic-deploy.yml) and its content are overwritten after each build.**

We primarily support following adblockers:

- ![](https://i.ibb.co/rch274D/adguard.png) [AdGuard](https://adguard.com/)
- ![](https://i.ibb.co/MskKKGZ/ublock.png) [uBlock Origin](https://github.com/gorhill/uBlock)
- ![](https://i.ibb.co/VWkXHfW/abp.png) [Adblock Plus](https://adblockplus.org/)
- ![](https://i.ibb.co/P57DX8R/ad-ultimate.png) [AdBlocker Ultimate](https://adblockultimate.net/) (uses AdGuard rule syntax)
- ![](https://i.ibb.co/wy0Xqjm/ab.png) [AdBlock](https://getadblock.com/) (uses Adblock Plus rule syntax)

## Sections

Filter rule categories can be found in [`sections`](https://github.com/hufilter/hufilter-dev/tree/master/sections) directory. Currently available filter categories: 

| Filename | Description | Syntax |
|--- |------------------------------------ |--- |
| [ads.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/ads.txt) | Filtering rules that blocks **ads only**. | ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus syntax** |
| [trackers.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/trackers.txt) | Filtering rules that blocks trackers and analytics systems. | ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus syntax** |
| [annoyances.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/annoyances.txt) | Filtering rules that blocks annoying elements, such as cookie popups, intrusive notifications, recommendations, floating elements, etc. | ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus syntax** |
| [antiadblock.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/antiadblock.txt) | Filtering rules that bypasses anti-adblock scripts, only if this can be solved with ABP capabilities. | ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus syntax** |
| [other.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/other.txt) | Anything that does not fall into the categories listed above. | ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus syntax** |
| [ublock-specific.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/ublock-specific.txt) | Mixed rules that requires uBlock Origin capabilities. | ![](https://i.ibb.co/MskKKGZ/ublock.png) **uBlock Origin syntax** \*  |
| [adguard-specific.txt](https://github.com/hufilter/hufilter-dev/blob/master/sections/adguard-specific.txt) | Mixed rules that requires AdGuard capabilities. | ![](https://i.ibb.co/rch274D/adguard.png) **AdGuard syntax** \* | 

\* Both of Adguard and uBlock Origin are able to interpret the syntax of Adblock Plus. 
 
## References

Useful links to documentations.

- ![](https://i.ibb.co/VWkXHfW/abp.png) Adblock Plus:
  - [ABP filter cheatsheet](https://adblockplus.org/filter-cheatsheet)
  - [ABP filter how-to](https://help.eyeo.com/adblockplus/how-to-write-filters)
  - [ABP scriptlets](https://help.eyeo.com/adblockplus/snippet-filters-tutorial#snippets-ref)
- ![](https://i.ibb.co/MskKKGZ/ublock.png) uBlock Origin:
  - [uBO filter syntax](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax)
  - [uBO scriptlets](https://github.com/gorhill/uBlock/wiki/Resources-Library)
- ![](https://i.ibb.co/rch274D/adguard.png) AdGuard:
  - [AG filter syntax](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters)
  - [AG scriptlets](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#scriptlets)
- [Scriptlets compatibility table (by AdGuard)](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/compatibility-table.md#scriptlets)
- [Redirects compatibility table](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/compatibility-table.md#-redirects-compatibility-table)
- [CSS selectors (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)  

## Build process

The build process is executed automatically if a push event is triggered in this repository.
 
## Recommended environment

We recommend using [Visual Studio Code](https://code.visualstudio.com/download) for development. Please install [recommended extensions](https://github.com/hufilter/hufilter-dev/blob/master/.vscode/extensions.json) in order to work with syntax highlight and automatic rule ordering. [Node.js](https://nodejs.org/en/download/) is also required for automatic ordering!

## Contact

- E-mail: [hufilter@protonmail.com](mailto:hufilter@protonmail.com)
- Forum: [Discussions](https://github.com/hufilter/hufilter/discussions)
- Issue management: [Please use this form](https://github.com/hufilter/hufilter-dev/issues/new/choose) (GitHub account required).

## Licensing

The project hufilter is distributed under the "Creative Commons Attribution 4.0" license. Contributors are licensing their work under the very same terms and conditions.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
