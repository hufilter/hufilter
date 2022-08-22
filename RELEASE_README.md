&nbsp;
<p align="center">
  <img src="https://raw.githubusercontent.com/hufilter/hufilter-dev/master/assets/images/hufilter.svg" width="128rem" alt="hufilter" />
</p>
<h3 align="center">The Hungarian Adblock Filter List</h3>
<p align="center">
  Támogatott hirdetésblokkolók / Supported Adblockers:
</p>
<p align="center">
    <a href="https://adguard.com/"><img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> AdGuard</a> |
    <a href="https://github.com/gorhill/uBlock"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> uBlock Origin</a> |
    <a href="https://adblockplus.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> Adblock Plus</a> |
    <a href="https://adblockultimate.net/"><img src="https://gist.githubusercontent.com/scripthunter7/418eb959a67d230f1f0975a222078565/raw/85854779bc661bce93b6abccea6ed56fca5c2844/adblocker_ultimate_logo.svg" width="14px"> AdBlocker Ultimate</a> |
    <a href="https://getadblock.com/"><img src="https://gist.githubusercontent.com/scripthunter7/45f46156b3e4efdd13817ffc57389feb/raw/6024bd84726be876839925f328faa3afb45e0534/adblock_logo.svg" width="14px"> AdBlock</a> 
</p>
<p align="center">
    <img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" alt="License: CC BY 4.0" />
    <img src="https://github.com/hufilter/hufilter-dev/actions/workflows/automatic-deploy.yml/badge.svg" alt="Automatic deploy status" />
    <img src="https://github.com/hufilter/hufilter-dev/actions/workflows/redundancy-check.yml/badge.svg" alt="Redundancy check status" />
</p>

## Mi a hufilter? / What is hufilter?
A hufilter egy közösségi projekt, melynek célja egy olyan adblock szűrőlista létrehozása és karbantartása, amely arra készült, hogy a magyar nyelvű weboldalakról eltávolítsa a hirdetésket, az irritáló elemeket, valamint a különböző nyomkövető eszközöket. A hufilter technikailag egy szöveges szűrőszabály lista, amit egy reklámblokkoló tud felhasználni arra, hogy bizonyos elemek (pl. reklámok, nyomkövetők, stb) megjelenését vagy funkcionalitását letiltsa a megtekintett oldalakon.

Hufilter is a community project that aims to create and maintain an adblock filter list, which is designed to remove ads, annoyances, and various tracking methods from hungarian websites. Technically hufilter is just a list of filter rules that can be used by an adblocker to block the appearance or functionality of certain elements (e.g. ads, trackers, etc.) on viewed pages.

## Szűrőlisták / Filter lists

A hufilter által biztosított szűrőlisták / Filter lists provided by hufilter:
| | [hufilter.txt](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter.txt&title=Hufilter%20Basic) | [hufilter-abp.txt](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-abp.txt&title=Hufilter%20for%20ABP) | [hufilter-ublock.txt](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-ublock.txt&title=Hufilter%20for%20uBO) | [hufilter-adguard.txt](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-adguard.txt&title=Hufilter%20for%20AdGuard) | [hufilter-selfpromo.txt](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-selfpromo.txt&title=Hufilter%20Self-promotions) | [hufilter-dns.txt](https://raw.githubusercontent.com/hufilter/hufilter/master/hufilter-dns.txt) |
|--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Hirdetések blokkolása / Block ads | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :red_circle: | :yellow_circle: |
| Nyomkövetők blokkolása / Block trackers | :red_circle: | :green_circle: | :green_circle: | :green_circle: | :red_circle: | :yellow_circle: |
| Zavaró elemek blokkolása / Block annoyances | :red_circle: | :green_circle: | :green_circle: | :green_circle: | :red_circle: | :red_circle: |
| Adblock detekció blokkolása / Block adblock detectors | :red_circle: | :yellow_circle: | :green_circle: | :green_circle: | :red_circle: | :red_circle: |
| Fejlett szabályok / Advanced rules | :red_circle: | :yellow_circle: | :green_circle: | :green_circle: | :red_circle: | :red_circle: |
| Önpromóció blokkolása / Block self-promotion | :red_circle: | :red_circle: | :red_circle: | :red_circle: | :green_circle: | :red_circle: |
| DNS szűrés / DNS filtering | :red_circle: | :red_circle: | :red_circle: | :red_circle: | :red_circle: | :green_circle: |
| Ajánlott szűrő / Recommended filter | | | :star: | :star: | :star: | :star: |
| Kompatibilis hirdetésblokkolók / Compatible adblockers | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> [Adblock Plus](https://adblockplus.org)<br><img src="https://gist.githubusercontent.com/scripthunter7/45f46156b3e4efdd13817ffc57389feb/raw/6024bd84726be876839925f328faa3afb45e0534/adblock_logo.svg" width="14px">  [AdBlock](https://getadblock.com/)<br><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> [uBlock Origin](https://github.com/gorhill/uBlock)<br><img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> [AdGuard](https://adguard.com)<br> <img src="https://gist.githubusercontent.com/scripthunter7/418eb959a67d230f1f0975a222078565/raw/85854779bc661bce93b6abccea6ed56fca5c2844/adblocker_ultimate_logo.svg" width="14px"> [AdBlocker Ultimate](https://adblockultimate.net/) | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> [Adblock Plus](https://adblockplus.org)<br><img src="https://gist.githubusercontent.com/scripthunter7/45f46156b3e4efdd13817ffc57389feb/raw/6024bd84726be876839925f328faa3afb45e0534/adblock_logo.svg" width="14px">  [AdBlock](https://getadblock.com/)<br><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> [uBlock Origin](https://github.com/gorhill/uBlock)<br><img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> [AdGuard](https://adguard.com)<br> <img src="https://gist.githubusercontent.com/scripthunter7/418eb959a67d230f1f0975a222078565/raw/85854779bc661bce93b6abccea6ed56fca5c2844/adblocker_ultimate_logo.svg" width="14px"> [AdBlocker Ultimate](https://adblockultimate.net/) | <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> [uBlock Origin](https://github.com/gorhill/uBlock)<br><img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> [AdGuard](https://adguard.com)<br> <img src="https://gist.githubusercontent.com/scripthunter7/418eb959a67d230f1f0975a222078565/raw/85854779bc661bce93b6abccea6ed56fca5c2844/adblocker_ultimate_logo.svg" width="14px"> [AdBlocker Ultimate](https://adblockultimate.net/) | <img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> [AdGuard](https://adguard.com)<br> <img src="https://gist.githubusercontent.com/scripthunter7/418eb959a67d230f1f0975a222078565/raw/85854779bc661bce93b6abccea6ed56fca5c2844/adblocker_ultimate_logo.svg" width="14px"> [AdBlocker Ultimate](https://adblockultimate.net/) | <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Adblock_Plus_2014_Logo.svg" width="14px"> [Adblock Plus](https://adblockplus.org)<br><img src="https://gist.githubusercontent.com/scripthunter7/45f46156b3e4efdd13817ffc57389feb/raw/6024bd84726be876839925f328faa3afb45e0534/adblock_logo.svg" width="14px">  [AdBlock](https://getadblock.com/)<br><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> [uBlock Origin](https://github.com/gorhill/uBlock)<br><img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> [AdGuard](https://adguard.com)<br> <img src="https://gist.githubusercontent.com/scripthunter7/418eb959a67d230f1f0975a222078565/raw/85854779bc661bce93b6abccea6ed56fca5c2844/adblocker_ultimate_logo.svg" width="14px"> [AdBlocker Ultimate](https://adblockultimate.net/) | <img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> [AdGuard Home](https://adguard.com/en/adguard-home/overview.html)<br> <img src="https://gist.githubusercontent.com/scripthunter7/57081afb98764f69a2f5278698592cd8/raw/ca1f6fe2ae7074adb0333729442b7986e120304e/pihole_logo.svg" width="14px"> [Pi-hole](https://pi-hole.net/)<br> <picture><source media="(prefers-color-scheme: dark)" srcset="https://www.rethinkdns.com/ico/app_icon_Light.svg"><img alt="RethinkDNS" src="https://www.rethinkdns.com/ico/app_icon.svg" width="14px"></picture> [Rethink DNS](https://github.com/celzero/rethink-app) |

:vertical_traffic_light: **Jelmagyarázat / Legend:**  
🔴 Nem támogatott / Not supported  
🟡 Részben támogatott / Partially supported  
🟢 Támogatott / Supported  

**Javasolt hirdetésblokkolók / Recommended adblockers:**
- <img src="https://gist.githubusercontent.com/scripthunter7/6378a96b61b927357f39a33d3abc5af7/raw/e306604fd548ac1b2de70d2a5d8a43017496f221/adguard_logo.svg" width="14px"> [AdGuard](https://adguard.com) / <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/UBlock_Origin.svg" width="14px"> [uBlock Origin](https://github.com/gorhill/uBlock)
- **:bangbang: Ne használj több hirdetésblokkolót egyszerre, mivel zavarhatják egymást! / Don't use multiple adblockers at the same time as they may interfere with each other!**

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
