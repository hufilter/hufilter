<!-- omit in toc -->
# Hozzájárulási útmutató

Tartalomjegyzék:

- [Előfeltételek](#előfeltételek)
- [Projekt beállítása](#projekt-beállítása)
- [Új szabályok hozzáadása](#új-szabályok-hozzáadása)

## Előfeltételek

Mielőtt hozzájárulnál a projekthez, győződj meg róla, hogy a következő eszközök telepítve vannak a rendszeredben:

- [Node.js][nodejs-download-link] (ajánlott a legfrissebb LTS verzió)
- [Git][git-download-link]

Az legjobb fejlesztési élmény érdekében javasoljuk, hogy a [Visual Studio Code][vscode-download-link]-ot használd kód
szerkesztőként. Ha a VS Code-ot választod, fontold meg a projekt
[ajánlott kiegészítőinek][recommended-vscode-extensions] telepítését.

## Projekt beállítása

1. Fork-old a [`hufilter/hufilter`][hufilter-repo] tárolót a GitHub-on.
2. Klónozd a fork-olt tárolódat.
3. Engedélyezd a Corepack-ot a `corepack enable` parancs futtatásával. A Corepack előre telepítve van a Node.js-el,
   így nem kell külön telepítened.
4. Telepítsd a projekt függőségeit a `pnpm install` paranccsal. Ha nincs telepítve a pnpm, a Corepack
   felajánlja a telepítését, ha futtatod a `pnpm` parancsot.

## Új szabályok hozzáadása

> [!IMPORTANT]
> A hufilter EasyList és EasyPrivacy listákat egészíti ki. Győződj meg arról, hogy a szabályaid nem szerepelnek ezekben
> a listákban.

1. Hozz létre egy új branch-et (ágat) a változtatásaidhoz, például `git checkout -b example.com` vagy
   `git checkout -b fix/123` (például ha az `123` azonosítójú issue-t javítod). Fontos, hogy mindig hozz létre külön
   ágat minden webhely / issue esetében.
2. Végezd el a változtatásokat az [sections][sections-directory] könyvtárban található szekciófájlok szerkesztésével,
   amelyek tartalmazzák a szűrési szabályokat. A könyvtárstruktúra részleteiért lásd a
   [`sections/README.hu.md`][sections-readme] fájlt.
3. Commit-old a változtatásaidat, majd push-old őket a forkolt tárolódba.
4. Hozz létre egy pull request-et a forkolt tárolód megfelelő ágáról a `hufilter/hufilter` tároló `master` ágára.
5. Várd meg a változtatásaid felülvizsgálatát.

<!--markdownlint-disable MD013-->
> [!TIP]
> Ha még nem vagy jártas a szűrőszabályok szintaxisában, nézd meg az alábbi dokumentációkat:
>
> - <img src="https://cdn.adguard.com/website/github.com/AGLint/abp_logo.svg" width="14px"> [Adblock Plus: *How to write filters*][abp-filters]
> - <img src="https://cdn.adguard.com/website/github.com/AGLint/adg_logo.svg" width="14px"> [AdGuard: *How to create your own ad filters*][adg-filters]
> - <img src="https://cdn.adguard.com/website/github.com/AGLint/ubo_logo.svg" width="14px"> [uBlock Origin: *Static filter syntax*][ubo-filters]
>
> Ezek a dokumentációk feltételezik, hogy ismered a webtechnológiák alapjait, például az HTML-t, a CSS-t és a JavaScript-et.
<!--markdownlint-enable MD013-->

[abp-filters]: https://help.adblockplus.org/hc/en-us/articles/360062733293
[adg-filters]: https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters
[git-download-link]: https://git-scm.com/downloads
[hufilter-repo]: https://github.com/hufilter/hufilter
[nodejs-download-link]: https://nodejs.org/en/download/
[recommended-vscode-extensions]: https://github.com/hufilter/hufilter/blob/master/.vscode/extensions.json
[sections-directory]: https://github.com/hufilter/hufilter/blob/master/sections/
[sections-readme]: https://github.com/hufilter/hufilter/blob/master/sections/README.hu.md
[ubo-filters]: https://github.com/gorhill/uBlock/wiki/Static-filter-syntax
[vscode-download-link]: https://code.visualstudio.com/download
