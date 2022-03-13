&nbsp;
<div>
  <p align="center">
    <img src="https://raw.githubusercontent.com/hufilter/hufilter-dev/master/assets/images/hufilter_light.png#gh-light-mode-only" width="450px" alt="hufilter logo light mode" />
    <img src="https://raw.githubusercontent.com/hufilter/hufilter-dev/master/assets/images/hufilter_dark.png#gh-dark-mode-only" width="450px" alt="hufilter logo dark mode" />
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" alt="License: CC BY 4.0" />
    <img src="https://github.com/hufilter/hufilter-dev/actions/workflows/redundancy-check.yml/badge.svg" alt="Redundancy check status" />
  </p>
</div>

## Mi a hufilter? / What is hufilter?
A hufilter egy közösségi projekt, melynek célja egy olyan adblock szűrőlista létrehozása és karbantartása, amely arra készült, hogy a magyar nyelvű weboldalakról eltávolítsa a hirdetésket, az irritáló elemeket, valamint a különböző nyomkövető eszközöket. A hufilter technikailag egy szöveges szűrőszabály lista, amit egy reklámblokkoló tud felhasználni arra, hogy bizonyos elemek (pl. reklámok, nyomkövetők, stb) megjelenését vagy funkcionalitását letiltsa a megtekintett oldalakon.

Hufilter is a community project that aims to create and maintain an adblock filter list, which is designed to remove ads, annoyances, and various tracking methods from hungarian websites. Technically hufilter is just a list of filter rules that can be used by an adblocker to block the appearance or functionality of certain elements (e.g. ads, trackers, etc.) on viewed pages.

## Szűrőlisták / Filter lists

A hufilter által biztosított szűrőlisták / Filter lists provided by hufilter:

| Szűrőlista / Filter list | Hirdetések blokkolása / Block ads | Nyomkövetők blokkolása / Block trackers | Zavaró elemek blokkolása / Block annoyances | Adblock detekció blokkolása / Block adblock detectors | Fejlett szabályok / Advanced rules | DNS szűrés / DNS filtering | Ehhez ajánlott / Recommended for |
|--- | :---: | :---: | :---: | :---: | :---: | :---: |--- |
| [hufilter.txt](https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter.txt) | :green_circle: | :red_circle: | :red_circle: | :red_circle: | :red_circle: | :red_circle: | ![](https://i.ibb.co/wy0Xqjm/ab.png) [AdBlock](https://getadblock.com/)<br> ![](https://i.ibb.co/VWkXHfW/abp.png) [Adblock Plus](https://adblockplus.org) |
| [hufilter-abp.txt](https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-abp.txt) | :green_circle: | :green_circle: | :green_circle: | :yellow_circle: | :red_circle: | :red_circle: | ![](https://i.ibb.co/wy0Xqjm/ab.png) [AdBlock](https://getadblock.com/)<br> ![](https://i.ibb.co/VWkXHfW/abp.png) [Adblock Plus](https://adblockplus.org) |
| [hufilter-ublock.txt](https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-ublock.txt) | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :red_circle: | ![](https://i.ibb.co/MskKKGZ/ublock.png) [uBlock Origin](https://github.com/gorhill/uBlock) |
| [hufilter-adguard.txt](https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-adguard.txt) | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :red_circle: | ![](https://i.ibb.co/rch274D/adguard.png) [AdGuard](https://adguard.com)<br> ![](https://i.ibb.co/P57DX8R/ad-ultimate.png) [AdBlocker Ultimate](https://adblockultimate.net/) |
| [hufilter-dns.txt](https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-dns.txt) | :yellow_circle: | :yellow_circle: | :red_circle: | :red_circle: | :red_circle: | :green_circle: | ![](https://i.ibb.co/rch274D/adguard.png) [AdGuard Home](https://adguard.com/en/adguard-home/overview.html)<br> ![](https://i.ibb.co/qmmnw2Q/pihole.png) [Pi-hole](https://pi-hole.net/)<br> ![](https://i.ibb.co/9YZqry9/rethinkdns.png) [RethinkDNS](https://github.com/celzero/rethink-app) |

Általánosságban elmondható, hogy a legtöbb hirdetésblokkolóval működik az [Adblock Plus listánk](https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-abp.txt) / In general, [our Adblock Plus list](https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-abp.txt) works with most ad blockers.

## Wiki oldal / Wiki page
https://github.com/hufilter/hufilter/wiki (csak magyar nyelven / only in hungarian)

## Kapcsolat / Contact
- E-mail: [hufilter@protonmail.com](mailto:hufilter@protonmail.com)
- [Beszélgetések fül / Discussions tab](https://github.com/hufilter/hufilter/discussions)

## Hibák bejelentése / Bug report
[Kérjük, használd ezt az űrlapot / Please use this form](https://github.com/hufilter/hufilter-dev/issues/new/choose)

## Licencelés / Licensing
A hufilter projekt a "Creative Commons Attribution 4.0" licenszfeltételek mellett használható fel. A közreműködők vállalják ugyanezen feltételek melletti licenszelését a munkájuknak.

The project hufilter is distributed under the "Creative Commons Attribution 4.0" license. Contributors are licensing their work under the very same terms and conditions.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## Közreműködés / Contributing
Ezen GitHub repository tartalma egy build folyamat eredménye, vagyis az itt található fájlok automatikusan kerülnek feltöltésre! Ha munkáddal hozzá szeretnél járulni a hufilter projekthez, akkor kérjük, hogy készíts egy pull request-et a fejlesztésre használt repository-ban: [https://github.com/hufilter/hufilter-dev/pulls](https://github.com/hufilter/hufilter-dev/pulls). Köszönjük a közreműködést!

The content of this GitHub repository is the result of the build process, so the files here will be uploaded automatically! If you'd like to contribute to the hufilter project with your work, please create your pull request in our development repository: [https://github.com/hufilter/hufilter-dev/pulls](https://github.com/hufilter/hufilter-dev/pulls). Thank you for your contribution!
