# web-pohja: ohjeet Claudelle

Tämä on Boostaamon verkkosivuprojektin pohja (Next.js, App Router, TypeScript). Sisältö on Markdown-tiedostoina, eikä sisällön muokkaus vaadi koodia.

## Säännöt
- Sisältö muokataan kansiossa `content/` (sivut: `content/pages/*.md`, asetukset: `content/site.json`). Älä kirjoita sisältöä koodiin.
- Tyylit ja värit ovat CSS-muuttujina tiedostossa `app/globals.css`. Vaihda design systemin arvot siellä.
- Älä lisää riippuvuuksia ilman perustetta. Pidä sivusto staattisena, kun mahdollista.
- Älä koskaan commitoi salaisuuksia tai henkilötietoja. Käytä `.env.local` (paikallinen) ja Vercelin ympäristömuuttujia. Vain `.env.example` on repossa.
- Lomakkeen liidit lähtevät reitille `app/api/lead/route.ts` ja sieltä `LEAD_WEBHOOK_URL`-osoitteeseen. Älä tallenna liidejä repoon.
- Analytiikka latautuu vain suostumuksen jälkeen. Älä lisää seurantaskriptejä ilman suostumuksen tarkistusta.
- Aja `npm run build` ennen jokaista pushia. Älä pushaa rikkinäistä koodia.
- Työskentele haarassa (`feature/...`), älä suoraan `main`-haaraan. `main` julkaistaan tuotantoon.
- Esikatselut eivät saa näkyä hakukoneissa (tämä on jo päällä: robots ja noindex).
- Tekstit: kirjoita kuten `context/tyyli.md` ohjeistaa. Älä keksi asiakascaseja, lukuja tai referenssejä.

## Rajat
- Räätälöity taustajärjestelmä, kirjautuminen, maksut ja integraatiot tavallista lomaketta ja analytiikkaa laajemmin kuuluvat Bistekille. Pysäytä työ ja kerro, jos tarve ylittää nämä.
