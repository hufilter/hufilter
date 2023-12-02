# Szekciók

Ez a könyvtár tartalmazza a szekciófájlokat, amelyekben a szűrőszabályok találhatók. Ezen fájlok alapján generáljuk
a szűrőlistákat a [`filters.json`][filters-json] fájlban megadottak szerint.

A hufilter a következő hirdetésblokkolókat támogatja:

- <img src="https://cdn.adguard.com/website/github.com/AGLint/adg_logo.svg" width="14px"> [AdGuard][adg-url]
- <img src="https://cdn.adguard.com/website/github.com/AGLint/abp_logo.svg" width="14px"> [Adblock Plus][abp-url]
- <img src="https://cdn.adguard.com/website/github.com/AGLint/ubo_logo.svg" width="14px"> [uBlock Origin][ubo-url]

## Közös és hirdetésblokkoló-specifikus szabályok

Ha egy szűrőszabály működik az összes támogatott hirdetésblokkolóval, akkor az egyik közös szekciófájlba kerül, amelyek
a `sections` könyvtár gyökérkönyvtárában találhatók. Például `sections/ads.txt`.

Ha egy szűrőszabály csak egy adott hirdetésblokkolóval működik, akkor a megfelelő "specifikus" szekciókönyvtárba kerül
attól függően, hogy melyik hirdetésblokkolóval működik:

- [`adguard-specific` könyvtár][adg-section]
- [`adblock-plus-specific` könyvtár][abp-section]
- [`ublock-origin-specific` könyvtár][ubo-section]

> **Megjegyzés:** Ha egy szűrőszabály közös, de nem működik egy speciális szabály nélkül, akkor az is a megfelelő
> "specifikus" szekciókönyvtárba kerül. Például, ha egy közös szabállyal elrejted a süti értesítést, de a weboldal
> nem engedi a görgetést, amíg nem fogadod el a sütiket, akkor egy speciális szabályt kell hozzáadnod a görgetés
> engedélyezéséhez. Ha ebben az esetben az elemrejtő szabályt a közös szekcióba teszed, a weboldal meghibásodik azoknál
> a felhasználóknál, akik olyan hirdetésblokkolókat használnak, amelyek nem támogatják a specifikus szabályt, hiszen
> a görgetés nekik továbbra is le lesz tiltva.

## Szekciófájlok

Hasonló fájlstruktúrát használunk minden szekciókönyvtárban:

- `ads.txt` - Szabályokat tartalmaz a hirdetések blokkolásához.
- `annoyances.txt` - Szabályokat tartalmaz a bosszantó elemek blokkolásához, például a sütikkel kapcsolatos értesítések,
  hírlevél-feliratkozásra ösztönző felugró ablakok, lebegő elemek stb.
- `antiadblock.txt` - Szabályokat tartalmaz az anti-adblock védelem kikerüléséhez.
- `selfpromo.txt` - Szabályokat tartalmaz az önpromóció és adománykérések blokkolásához.
- `trackers.txt` - Szabályokat tartalmaz a követők és egyéb adatvédelmet sértő technológiák blokkolásához.
- `unbreak.txt` - Szabályokat tartalmaz a helytelen blokkolás okozta problémák megoldásához.

[abp-section]: https://github.com/hufilter/hufilter-dev/tree/master/sections/adblock-plus-specific
[abp-url]: https://adblockplus.org
[adg-section]: https://github.com/hufilter/hufilter-dev/tree/master/sections/adguard-specific
[adg-url]: https://adguard.com
[filters-json]: https://github.com/hufilter/hufilter-dev/blob/master/filters.json
[ubo-section]: https://github.com/hufilter/hufilter-dev/tree/master/sections/ublock-origin-specific
[ubo-url]: https://github.com/gorhill/uBlock
