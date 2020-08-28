
# Fejlesztői dokumentáció

Ez a dokumentáció tartalmazza a fejlesztéshez szükséges főbb tudnivalókat.

- A projekt fő mappájában találhatók a build eredményeképpen léterejött szűrők, valamint egy leírás.
- **A fejlesztéshez szükséges fájlok a dev mappában vannak, a fejlesztés során ezeket a fájlokat kell módosítani!**
- A projekt alapvetően 3 fő reklámblokkolót támogat, a dev mappa szerkezete is ennek megfelelően lett kialakítva.
  - AdGuard
  - uBlock Origin
  - Adblock Plus

## A dev mappa
- A dev mappa szerkezete. Mindegyik fájlhoz meghatároztuk a szintaxist, erre kérjük, hogy figyelj oda!
  - headers mappa
    - Az egyes szűrők elején megjelenő fejléceket tartalmazza, minden reklámblokkolóhoz külön beállítva.
    - Ezeket szinte alig, vagy egyáltalán nem kell módosítani.
  - ads.txt
    - **Adblock Plus szintaxis** 
    - Hirdetéseket blokkoló szabályok
    - Különböző elemzőrendszereket, nyomkövetési technikákat blokkoló szabályok
  - ad-servers.txt
    - **Adblock Plus szintaxis** 
    -  Hirdetési szervereket blokkoló szabályok
  - annoyances.txt
    - **Adblock Plus szintaxis**  
    - Kellemetlenségeket blokkoló szabályok
      - Ezek nem reklámok, inkább csak zavaró, ha vannak. Ilyen például:
        - Felugró ablakok, értesítések
        - Cookie értesítő ablakok, sávok
        - Becsúszó ajánlók
        - stb.
  - adguard-specific.txt
    - **AdGuard szintaxis** 
    - Olyan szabályok, amiket csak az AdGuard tud értelmezni
    - Ezekből a szabályokból nincs sok, így ezen a fájlon belül szedjük szét őket kategóriákra
    - Előfordulhat, hogy egy sima ABP szabály csak egy speciális szabállyal együtt működik, ilyenkor a sima szabály is ide kerüljön (pl. ha elrejted a popupot sima szabállyal, de a háttér ottmarad, amihez class remove kell)
  - ublock-specific.txt
    - **uBlock Origin szintaxis** 
    - Olyan szabályok, amiket csak az uBlock Origin tud értelmezni
    - Ezekből a szabályokból nincs sok, így ezen a fájlon belül szedjük szét őket kategóriákra
    - Előfordulhat, hogy egy sima ABP szabály csak egy speciális szabállyal együtt működik, ilyenkor a sima szabály is ide kerüljön (pl. ha elrejted a popupot sima szabállyal, de a háttér ottmarad, amihez class remove kell)
  - other.txt
    - **Adblock Plus szintaxis**  
    - Minden olyan szabály, ami a fenti kategóriákba nem esik bele
- Igény szerint a dev mappa szerkezete alakítható, ehhez kérjük, hogy nyiss egy issue-t.

## Szintaxisok
Itt összegyűjtöttük az említett hirdetésblokkolók szintaxisait segítségképpen. A dokumentációk angol nyelvűek. A szűrőszabályok fejlesztéséhez szükséges némi webfejlesztés terén szerzett előismeret, pl. a [CSS selectorok](https://www.w3schools.com/cssref/css_selectors.asp) vagy a Javascript alapszintű ismerete.
- Az uBlock és az AdGuard az Adblock Plus szintaxisára épül, így az összes Adblock Plus szintaxissal írt szabály működik mindhárom blokkolóval. Ezért írunk elő bizonyos fájlokban kizárólag ABP szintaxist.
- Valamilyen szinten az AdGuard és az uBlock is kompatibilis egymással, **de nem teljesen, és nem oda-vissza**.
- Adblock Plus
  - https://adblockplus.org/filter-cheatsheet 
  - https://help.eyeo.com/adblockplus/how-to-write-filters
  - https://help.eyeo.com/en/adblockplus/snippet-filters-tutorial
    - Fontos, hogy az ABP ezeket a szkripteket [csak egy speciális szűrőben](https://github.com/abp-filters/abp-filters-anti-cv) engedi, így ilyen szabályokat a hufilterbe nem tudunk elfogadni, azokat az említett szűrőbe küldd be!
    - Az uBlock és az AdGuard azonban lehetővé teszi, hogy ilyen szabályokat használjunk a hufilterben, de ott is körültekintően járj el.
- AdGuard
  - https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters
  - https://github.com/AdguardTeam/Scriptlets#scriptlets
  - https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#scriptlets
 - uBlock Origin
    - https://github.com/gorhill/uBlock/wiki/Static-filter-syntax
    - https://github.com/gorhill/uBlock/wiki/Resources-Library  

## Build
- Amikor push érkezik a hufilter repojába, akkor a build folyamat automatikusan megtörténik a módosítások alapján!
- A build kimenetei:
  - hufilter.txt
    - Kifejezetten az uBlock Origin-hez készült változat
    - Az uBlock alapból tartalmazza nyelvspecifikus szűrőként
  - hufilter-adguard.txt
    - Kifejezetten az AdGuard-hoz készült változat
    - Az összes AdGuard termék alapból tartalmazza nyelvspecifikus szűrőként
  - hufilter-abp.txt
    - Kifejezetten az Adblock Plus-hoz készült változat
    - Az Adblock Plus alapból tartalmazza nyelvspecifikus szűrőként
  - hufilter-dns.txt
    - Kifejezetten hálózati szintű blokkoláshoz készült változat (pl. AdGuard Home, Pi-hole, stb.)
    - Az AdGuard Home alapból tartalmazza nyelvspecifikus szűrőként
 
## VSCode segítség
- A Visual Studio Code programot ajánljuk alapértelmezett szerkesztőnek.
- Ha ezt a programot használod a fejlesztéshez, akkor töltsd le ezt a bővítményt: https://marketplace.visualstudio.com/items?itemName=adguard.adblock
  - Tudja kezelni az ABP szabályok szintaxisainak a nagy részét, a kiemelés által pedig átláthatóbbá és könnyebben fejleszthetővé teszi a kódot.
