&nbsp;
<div>
  <p align="center">
    <img src="https://raw.githubusercontent.com/hufilter/hufilter-dev/master/assets/hufilter_logo.png#gh-light-mode-only" width="350px" alt="hufilter logo light mode" />
    <img src="https://raw.githubusercontent.com/hufilter/hufilter-dev/master/assets/hufilter_logo_dark_mode.png#gh-dark-mode-only" width="350px" alt="hufilter logo dark mode" />
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" alt="License: CC BY 4.0" />
    <img src="https://github.com/hufilter/hufilter-dev/actions/workflows/push.yml/badge.svg" alt="Workflow state" />
  </p>
</div>

# Hufilter fejlesztői dokumentáció

Ez a leírás tartalmazza a fejlesztéshez szükséges főbb tudnivalókat. Kérjük, hogy olvasd el, ha munkáddal hozzá szeretnél járulni a hufilter projekthez!

- **A hufilter fejlesztése ebben a *hufilter-dev* nevű repoban történik, a [másik, *hufilter* nevű repo](https://github.com/hufilter/hufilter) csak a build folyamat eredménye!** Bővebben: [Build folyamat](#build-folyamat)
- A hufilter alapvetően 3 fő reklámblokkolót támogat:
  - ![](https://i.ibb.co/rch274D/adguard.png) [AdGuard](https://adguard.com/)
  - ![](https://i.ibb.co/MskKKGZ/ublock.png) [uBlock Origin](https://github.com/gorhill/uBlock)
  - ![](https://i.ibb.co/VWkXHfW/abp.png) [Adblock Plus](https://adblockplus.org/)
  - Illetve további kettőt, amelyek a fentiek szabályszintaxisát használják:
    * ![](https://i.ibb.co/P57DX8R/ad-ultimate.png) [AdBlocker Ultimate](https://adblockultimate.net/): AdGuard szintaxis
    * ![](https://i.ibb.co/wy0Xqjm/ab.png) [AdBlock](https://getadblock.com/): Adblock Plus szintaxis

## Projekt szerkezete
Ez a fejezet ismerteti a hufilter projektben található fájlokat és könyvtárakat, valamint azok szerepét.
- **sections mappa**
  - Ha közreműködsz, **az érdemi fejlesztés ebben a mappában történik.**
  - Itt gyűjtjük a szűrési szabályokat, különböző kategóriákra, szekciókra bontva. Egy fájl egy szekciót jelent.
  - Mindegyik fájlhoz meghatároztuk a szintaxist, erre kérjük, hogy figyelj oda!
  - **ads.txt**
    - ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus szintaxis**
    - Hirdetéseket blokkoló szabályok
    - Különböző elemzőrendszereket, nyomkövetési technikákat blokkoló szabályok
  - **ad-servers.txt**
    - ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus szintaxis** 
    -  Hirdetési szervereket blokkoló szabályok
  - **annoyances.txt**
    - ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus szintaxis**  
    - Kellemetlenségeket blokkoló szabályok
      - Ezek nem reklámok, inkább csak zavaró, ha vannak. Ilyen például:
        - Felugró ablakok, értesítések
        - Cookie értesítő ablakok, sávok
        - Becsúszó ajánlók
        - stb.
  - **adguard-specific.txt**
    - ![](https://i.ibb.co/rch274D/adguard.png) **AdGuard szintaxis** 
    - Olyan szabályok, amiket csak az AdGuard tud értelmezni
    - Ezekből a szabályokból nincs sok, így ezen a fájlon belül szedjük szét őket kategóriákra
    - Előfordulhat, hogy egy sima ABP szabály csak egy speciális szabállyal együtt működik, ilyenkor a sima szabály is ide kerüljön (pl. ha elrejted a popupot sima szabállyal, de a háttér ottmarad, amihez class remove kell)
  - **ublock-specific.txt**
    - ![](https://i.ibb.co/MskKKGZ/ublock.png) **uBlock Origin szintaxis** 
    - Olyan szabályok, amiket csak az uBlock Origin tud értelmezni
    - Ezekből a szabályokból nincs sok, így ezen a fájlon belül szedjük szét őket kategóriákra
    - Előfordulhat, hogy egy sima ABP szabály csak egy speciális szabállyal együtt működik, ilyenkor a sima szabály is ide kerüljön (pl. ha elrejted a popupot sima szabállyal, de a háttér ottmarad, amihez class remove kell)
  - **other.txt**
    - ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus szintaxis**  
    - Minden olyan szabály, ami a fenti kategóriákba nem esik bele
- *A projekt további fájljai, mappái:*
  - Ezek kevésbé fontosak, ha csak szűrési szabályokat szeretnél beküldeni
  - **headers mappa**
    - Az egyes szűrők elején megjelenő fejléceket tartalmazza, minden reklámblokkolóhoz külön beállítva.
    - Ezeket a header fájlokat szinte alig, vagy egyáltalán nem kell módosítani.
  - **filters.json**
    - Egy leíró fájl, a build script ez alapján készíti el a szőrőlistákat. Megadja, hogy az egyes szűrőlistákba melyik header, majd pedig melyik szekciók kerüljenek.
  - **build.js**
    - Ez a script végzi el a build folyamatot a *filters.json* fájl alapján.
  - **test.js**
    - Miután a build script lefutott, ez a script végzi el a tesztelést a kész szűrőlistákon.
  - **RELEASE_README.md**
    - A  [másik repo](https://github.com/hufilter/hufilter)-ba ez a leírás fog megjelenni README.md-ként.

## Szintaxisok, dokumentációk
Itt összegyűjtöttük az említett hirdetésblokkolók szintaxisait segítségképpen. 
- A szintaxis gyakorlatilag egy szabályrendszer. Megadja azt a logikát, hogy egyes reklámblokkolók miként, és milyen szabályokat tudnak értelmezni.
- Az összegyűjtött dokumentációk angol nyelvűek. A szűrőszabályok fejlesztéséhez szükséges némi webfejlesztés terén szerzett előismeret, pl. a [CSS selectorok](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) vagy a [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) legalább alapszintű ismerete. A [DevTools](https://developer.chrome.com/docs/devtools/) alapszintű ismerete szintén ajánlott. 
- Az uBlock és az AdGuard az Adblock Plus szintaxisára épül, így az összes Adblock Plus szintaxissal írt szabály működik mindhárom blokkolóval. Ezért írunk elő bizonyos fájlokban kizárólag ABP szintaxist.
- Valamilyen szinten az AdGuard és az uBlock is kompatibilis egymással, **de nem teljesen, és nem oda-vissza**.
- Hasznos linkek a három fő hirdetésblokkolóhoz:
  - ![](https://i.ibb.co/VWkXHfW/abp.png) **Adblock Plus**
    - ABP szűrőszabályok gyorstalpaló:
      - https://adblockplus.org/filter-cheatsheet 
    - ABP szűrőszabályok részletes:
      - https://help.eyeo.com/adblockplus/how-to-write-filters
    - ABP scriptlet-ek: 
      - https://help.eyeo.com/en/adblockplus/snippet-filters-tutorial
      - Fontos, hogy az ABP ezeket a scriptlet-eket [csak egy speciális, ún. anti-circumvention szűrőben](https://github.com/abp-filters/abp-filters-anti-cv) engedi, vagyis így ilyen szabályokat a hufilterbe nem tudunk elfogadni, azokat az említett szűrőbe küldd be, ha az ottani policy engedi!
      - Az uBlock és az AdGuard azonban lehetővé teszi, hogy ilyen szabályokat használjunk a hufilterben, ott körültekintően járj el.
  - ![](https://i.ibb.co/rch274D/adguard.png) **AdGuard**
    - AdGuard szűrők készítése:
      - https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters
    - AdGuard scriptlet-ek:
      - https://github.com/AdguardTeam/Scriptlets#scriptlets
    - AdGuard/uBO/ABP scriptlet-ek kompabitilitási táblázata:
      - https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#scriptlets
   - ![](https://i.ibb.co/MskKKGZ/ublock.png) **uBlock Origin**
      - uBO szűrők szintaxisa:
        - https://github.com/gorhill/uBlock/wiki/Static-filter-syntax
      - uBO scriptlet-ek:
        - https://github.com/gorhill/uBlock/wiki/Resources-Library  

## Build folyamat
1. fázis: 
    - Amikor push érkezik a hufilter-dev repoba, akkor a build folyamat automatikusan megtörténik a módosítások alapján.
2. fázis:
    - Miután a build összeállította a szűrőlistákat, lefut egy tesztelő script, ami megtöri a folyamatot, hogyha hibát talál. Így nyilvánvalóan hibás szűrőlista nem tud kikerülni az éles kiadások közé.
3. fázis:
    - Ha a szűrőlisták átmennek a tesztelésen, akkor felkerülnek ebbe a repo-ba: 
      - https://github.com/hufilter/hufilter
      - **Ez egy teljesen automatikusan generált repo. Ha szabályt szeretnél hozzáadni, akkor mindenképpen erre a dev repo-ra küldd azt be!**
    - A jelenlegi szűrőlisták:
      - ![](https://i.ibb.co/VWkXHfW/abp.png) **hufilter.txt / hufilter-abp.txt**
        - Kifejezetten az Adblock Plus-hoz készült változatok.
        - A *hufilter.txt* csak hirdetéseket blokkol, a *hufilter-abp.txt* pedig követőket, egyéb zavaró tartalmi elemeket is.
      - ![](https://i.ibb.co/rch274D/adguard.png) **hufilter-adguard.txt**
        - Kifejezetten az AdGuard-hoz készült változat.
        - Az összes AdGuard termék alapból tartalmazza nyelvspecifikus szűrőként.
      - ![](https://i.ibb.co/MskKKGZ/ublock.png) **hufilter-ublock.txt**
        - Kifejezetten az uBlock Origin-hez készült változat.
        - Az uBlock Origin alapból tartalmazza nyelvspecifikus szűrőként.
      - ![](https://i.ibb.co/rch274D/adguard.png) **hufilter-dns.txt**
        - Kifejezetten hálózati szintű blokkoláshoz készült változat (pl. AdGuard Home, Pi-hole, stb.)
        - Az AdGuard Home alapból tartalmazza nyelvspecifikus szűrőként.
 
## VSCode segítség
- A Visual Studio Code programot ajánljuk alapértelmezett szerkesztőnek, ezzel a bővítménnyel: https://marketplace.visualstudio.com/items?itemName=adguard.adblock
  - Ez ugyanis tudja kezelni az ABP szabályok szintaxisainak a nagy részét, a highlight (szövegkiemelés) által pedig átláthatóbbá és könnyebben fejleszthetővé teszi a kódot.
