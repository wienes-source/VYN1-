# VYN1 — Detachering, Boekhouding & Webdesign

Deze website gebruikt de laatst aangeleverde versie `stitch_vyn1_detachering-4.zip` van 15 november 2026. De homepage, boekhoudpagina en webdesignpagina zijn rechtstreeks uit de drie HTML-ontwerpen overgenomen.

- Drie divisies: Interim & Detachering, Boekhouding & Administratie, Webdesign & Digital.
- Boekhouding: vijftien diensten met zoekfunctie en categoriefilters; startersaanbod €1.124,25 excl. btw, met de opgegeven jaar-/urenvoorwaarden.
- Webdesign: pakketten van €495, €995 en vanaf €1.850 excl. btw; onderhoud en SEO €79 per maand, volgens het aangeleverde ontwerp.
- Beide formulieren gebruiken de bestaande FormSubmit-contactbestemming; de export-demo die zonder verzending een succesmelding toonde is verwijderd.
- Pakketkeuze, onderhoudstab, dienstfilter, calculator en navigatie werken lokaal in de browser.

## Publicatie en kosten

GitHub Pages publiceert vanaf main / (root); CNAME blijft vyn1.com. Geen betaalde database, API-sleutel of runtime-framework nodig. De Tailwind-stijlen zijn vooraf gebouwd en opgenomen in assets/. Voor het opnieuw bouwen: `npm ci` en `npm run build:css`. Tailwind is vastgezet op 3.4.17. Lettertype en SVG-iconen staan lokaal met de bijbehorende licenties.

De nieuwe Google-afbeeldingslinks in de export leveren een inlogpagina of 403 op. Daarom worden het bestaande aangeleverde VYN1-logo en de bestaande illustratieve werkomgevingsfoto gebruikt. Ontwerptelefoonnummers en WhatsApp-links zijn vervangen door het bestaande contactadres en de contactpagina. Onbevestigde verificatie-, prestatie- en DBA-garanties zijn vervangen door beschrijvingen zonder garanties.

## Contact

De bestaande FormSubmit-ontvanger en het adres vin16d@icloud.com zijn behouden. Ontvangst vereist een geactiveerde FormSubmit-ontvanger; er is tijdens de controle geen bericht verstuurd. De website toont geen ongeverifieerde verzendbevestiging.
