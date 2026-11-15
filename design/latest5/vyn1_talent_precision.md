---
name: VYN1 Talent Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4a3d'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7b6c'
  outline-variant: '#bdcaba'
  surface-tint: '#006e2d'
  primary: '#006b2c'
  on-primary: '#ffffff'
  primary-container: '#00873a'
  on-primary-container: '#f7fff2'
  inverse-primary: '#62df7d'
  secondary: '#2b6954'
  on-secondary: '#ffffff'
  secondary-container: '#adedd3'
  on-secondary-container: '#306d58'
  tertiary: '#006a34'
  on-tertiary: '#ffffff'
  tertiary-container: '#008644'
  on-tertiary-container: '#f6fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7ffc97'
  primary-fixed-dim: '#62df7d'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#b0f0d6'
  secondary-fixed-dim: '#95d3ba'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#0b513d'
  tertiary-fixed: '#6dfe9c'
  tertiary-fixed-dim: '#4de082'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-touch professional recruitment and secondment services in the Dutch market. It balances executive gravitas with kinetic forward momentum, targeting C-level decision-makers, senior HR directors, and high-caliber interim professionals.

The visual style blends **Corporate Modern** rigor with **Tactile Precision**:
- **Confidence & Gravitas:** Deep emerald and slate foundations project stability, institutional trust, and compliance integrity.
- **Dynamic Growth:** Vibrant ribbon-greens represent vitality, individual talent progression, and agile interim solutions.
- **Dutch Directness & Clarity:** Generous whitespace, razor-sharp architectural layout lines, structured data presentation, and zero visual clutter.

## Colors

The palette takes direct cues from the brand logomark: a continuous fold transitioning between deep, grounded pine green and luminous growth green.

- **Primary (`#16a34a`):** Dynamic green used for key calls to action, active indicators, and conversion anchors.
- **Secondary (`#064e3b`):** Deep executive emerald. Used for authoritative section headers, dark contrast cards, brand anchors, and professional badge fills.
- **Tertiary (`#4ade80`):** Fresh lime-green highlight. Used sparingly for accent pings, focus rings, tag badges, and status counters.
- **Neutral (`#0f172a`):** Deep slate charcoal. Replaces harsh pure black for high-contrast typography, structural rules, and icons.
- **Surfaces & Canvases:** Primary canvas relies on crisp `#ffffff`, layered over architectural secondary panels of `#f8fafc` and subtle divider borders in `#e2e8f0`.

## Typography

Typography is set in **Plus Jakarta Sans** across all hierarchies. Its clean geometric underpinnings provide crisp legibility on data-dense assignment specifications while its subtly curved terminals mirror the brand's ribbon mark.

- **Headlines:** Set tightly tracked (`-0.02em`) with prominent font weights (`700` and `800`) to communicate certainty and seniority.
- **Eyebrows & Overlines:** Rendered in `label-sm` or `label-md`, always uppercase with `+0.06em` letter spacing, tinted in deep forest green or muted slate.
- **Body Text:** Uses standard weights (`400`) and balanced line heights (`1.5` to `1.6`) for rapid scanning of job specs, candidate summaries, and corporate case studies.

## Layout & Spacing

The layout is built around a standard 12-column fluid grid on desktop (max width `1280px`), adapting to 6 columns on tablet and 4 columns on mobile.

- **Vertical Rhythm:** Rooted in an 8px modular cadence. Sections are separated by distinct vertical spans (`space-xl` and above) to give breathing room to corporate propositions.
- **Data Cards & Grids:** Positioned with uniform `1.5rem` (`24px`) gutters on desktop to maintain systematic order across candidate pools and vacancy listings.
- **Margins:** Exterior canvas margins contract down to `1.25rem` on mobile screens to maximize horizontal real estate for candidate metric tables and recruitment briefs.

## Elevation & Depth

Visual depth is achieved through **low-contrast outlines** paired with **ambient tinted shadows**:

- **Card Surfaces:** Primary cards sit on crisp white (`#ffffff`) bordered with a deliberate `1px` stroke in `#e2e8f0`. 
- **Resting Elevation:** Cards feature a soft, diffuse shadow: `0 4px 20px -2px rgba(6, 78, 59, 0.05)`. The green undertone anchors the brand subtly into the depth layer.
- **Hover & Interaction:** Interactive cards elevate upward with a `translateY(-2px)` shift and an expanded shadow: `0 12px 28px -4px rgba(6, 78, 59, 0.10)`, accompanied by a border transition to `#cbd5e1` or primary green `#16a34a`.
- **Dark Inverted Sections:** Key feature callouts utilize solid deep emerald (`#064e3b`) surfaces with subtle inner strokes (`rgba(255, 255, 255, 0.08)`) to establish executive weight without heavy drop shadows.

## Shapes

The design system adopts a balanced **Rounded (`2`)** shape strategy:

- Base radius is `0.5rem` (`8px`) for buttons, text inputs, search modules, and segmented controls.
- Structural elements such as candidate portfolio cards, executive quote panels, and modals use `rounded-lg` (`1rem` / `16px`).
- Filter chips, status pills (e.g., "Interim", "Direct Hire"), and metric badges utilize full pill radii (`9999px`) to mirror the rounded loops of the logomark's green ribbon.

## Components

### Buttons
- **Primary:** Background `#16a34a`, text `#ffffff`, font-weight `600`, radius `0.5rem`. Hover state transitions to `#15803d` with subtle button depression.
- **Secondary / Executive:** Deep forest `#064e3b` background with crisp white text. Used for primary partner/client actions (e.g., "Post an Interim Assignment").
- **Outline / Ghost:** Border `1.5px solid #064e3b`, background transparent, text `#064e3b`. Hover activates `#f0fdf4` tint with `#16a34a` border.

### Candidate & Assignment Cards
- Crisp `#ffffff` container, `1rem` radius, `1px solid #e2e8f0` border.
- Top section includes client sector, role category pill, and compensation or assignment duration indicator.
- Subtle green accent strip (`3px` vertical line or left border accent) indicates priority or verified availability.

### Chips & Badges
- **Sector/Specialism Chips:** Background `#f1f5f9`, text `#0f172a`, `12px` font size, `9999px` pill border radius.
- **Status Indicators:** 
  - "Available Immediately": `#dcfce7` background with `#166534` text and a pulsating `#22c55e` bullet.
  - "Interim Assignment": `#f8fafc` background with `#064e3b` text and `#cbd5e1` border.

### Input Fields
- White background, `0.5rem` radius, `1px solid #cbd5e1` resting border.
- Focus state reveals a `2px` ring in `#16a34a` with zero offset and border color `#16a34a`.
- Floating or persistent labels set in `label-sm` with slate `#475569`.

### Selection Controls (Checkboxes & Radios)
- Custom square (`6px` radius) checkboxes and circular radio controls.
- Checked state fills with `#16a34a` featuring crisp white SVG checkmarks and inner dots.