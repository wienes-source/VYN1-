# VYN1 – Interim & Detachering

Website voor **VYN1.com** (uitspraak: **Vin One**), gebouwd als statische en mobielvriendelijke website voor GitHub Pages.

## Inhoud

- Landingspagina voor opdrachtgevers en professionals
- Expertise: Finance & Control, IT & Digital, HR & People, Legal & Compliance, Projectmanagement en Business Support
- Aanpak, introductie VYN1 en contact
- Geen externe JavaScript-frameworks, trackingpixels, cookies of derdepartij-afhankelijkheden

## Repository

https://github.com/wienes-source/VYN1-

## Publiceren via GitHub Pages

1. Open [Settings → Pages](https://github.com/wienes-source/VYN1-/settings/pages).
2. Kies bij **Build and deployment** voor **Deploy from a branch**.
3. Selecteer branch **main**, folder **/(root)**, en klik op **Save**.
4. Deze repository bevat een `CNAME`-bestand met `vyn1.com`. Ga in GitHub Pages na of dit als **Custom domain** is vastgelegd.
5. Controleer de DNS-instellingen bij de domeinregistrar (Vimexx/Control4Us). Wijzig geen mail-MX/TXT-records.

### DNS voor VYN1.com

Voor de hoofddomeinnaam `vyn1.com` zijn volgens de GitHub Pages-documentatie deze A-records gebruikelijk:

| Type | Host | Waarde |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | wienes-source.github.io |

**Let op:** verwijder conflicterende oude A/AAAA-records pas na beoordeling van de bestaande hostingconfiguratie. DNS-wijzigingen kunnen de huidige site beïnvloeden. Controleer na activatie de status van HTTPS in GitHub Pages en activeer **Enforce HTTPS** zodra mogelijk.

Documentatie: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Contactadres

De pagina verwijst naar **info@vyn1.com**. Dit is een voorgesteld zakelijk contactadres; bevestig eerst in het e-mailbeheer van Vimexx/Control4Us dat de mailbox of alias bestaat en berichten ontvangt. Zo niet: pas het contactadres in `index.html` aan voordat de site als definitief live wordt beschouwd.

## Wijzigen

Alle pagina-inhoud, layout, CSS en kleine JavaScript-interacties staan in `index.html`. Publiceren van gewijzigde inhoud verloopt na iedere commit naar de ingestelde Pages-bron. Pas waar nodig de teksten aan op de operationele situatie; de site bevat bewust geen onbevestigde referenties, aantallen vacatures of klantnamen.

## Privacy en techniek

De site gebruikt geen analytics, cookies, externe fonts of verwerkingsformulieren. Het e-mailcontact wordt geopend in het mailprogramma van de bezoeker. Voor het daadwerkelijk ontvangen van e-mails is een geconfigureerde mailbox vereist.
