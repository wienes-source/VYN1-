# VYN1 — Detachering, Boekhouding & Webdesign

Deze website gebruikt de laatst aangeleverde versie `stitch_vyn1_detachering-5.zip` van 15 november 2026. De homepage, boekhoudpagina en webdesignpagina zijn rechtstreeks uit de drie HTML-ontwerpen overgenomen.

- Drie divisies: Interim & Detachering, Boekhouding & Administratie, Webdesign & Digital.
- Boekhouding: vijftien diensten met zoekfunctie en categoriefilters; startersaanbod €1.124,25 excl. btw, met de opgegeven jaar-/urenvoorwaarden.
- Webdesign: pakketten van €495, €995 en vanaf €1.850 excl. btw; onderhoud en SEO €79 per maand, volgens het aangeleverde ontwerp.
- Beide formulieren gebruiken de bestaande FormSubmit-contactbestemming; de export-demo die zonder verzending een succesmelding toonde is verwijderd.
- Pakketkeuze, onderhoudstab, dienstfilter, calculator en navigatie werken lokaal in de browser.

## Publicatie en kosten

GitHub Pages publiceert vanaf main / (root); CNAME blijft vyn1.com. Geen betaalde database, API-sleutel of runtime-framework nodig. De Tailwind-stijlen zijn vooraf gebouwd en opgenomen in assets/. Voor het opnieuw bouwen: `npm ci` en `npm run build:css`. Tailwind is vastgezet op 3.4.17. Lettertype en SVG-iconen staan lokaal met de bijbehorende licenties.

De externe Google-afbeeldingslinks uit de export zijn voor publicatie vervangen door de bestaande lokale VYN1-afbeeldingen. Ontwerptelefoonnummers en WhatsApp-links zijn vervangen door het bestaande contactadres en de contactpagina. De inhoud en prijzen volgen versie 5 van het ontwerp.

## Contact

De bestaande FormSubmit-ontvanger en het adres vin16d@icloud.com zijn behouden. Ontvangst vereist een geactiveerde FormSubmit-ontvanger; er is tijdens de controle geen bericht verstuurd. De website toont geen ongeverifieerde verzendbevestiging.

## Archiefcontrole versie 5

Het archief bevat drie code.html-pagina’s (home, boekhouding en webdesign), drie screen.png-ontwerpvoorbeelden en twee DESIGN.md-documenten. De ontwerpdocumenten staan in design/latest5/. Het archief bevat geen nieuwe detachering- of contactpagina en geen deploymentconfiguratie; de bestaande aanvullende pagina’s, CNAME, .nojekyll, robots.txt en sitemap.xml zijn behouden. De HTML-export is geschikt gemaakt voor de bestaande statische publicatie: lokale CSS, iconen en afbeeldingen, werkende paginalinks en de bestaande FormSubmit-bestemming.

SHA-256 van het aangeleverde ZIP-bestand: `949e419c711e90c732e669987674c299c34f9a441a40cbf53a29454d7b56b818`.
