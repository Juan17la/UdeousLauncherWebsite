---
name: Udeos Launcher
description: A free Minecraft launcher announced as a typographic lineup sheet; the launcher's own night-blue and light-blue tokens, one blue accent, rank by size alone.
colors:
  primary: "#2563EB"
  primary-hover: "#1D4ED8"
  primary-dark: "#336CEB"
  primary-hover-dark: "#4E86F8"
  on-primary: "#FFFFFF"
  bg: "#EEF3FC"
  panel: "#FFFFFF"
  panel-2: "#E8EEF9"
  text: "#121A2B"
  muted: "#586379"
  bg-dark: "#0E1423"
  panel-dark: "#161E2E"
  panel-2-dark: "#1F293C"
  text-dark: "#ECF0F7"
  muted-dark: "#8E98AE"
  hairline: "rgba(30,55,110,.15)"
  hairline-dark: "rgba(150,180,255,.13)"
  tag-gray: "#E4EAF5"
  tag-gray-dark: "#27324A"
typography:
  headliner:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(44px, 9vw, 128px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.05em"
  support:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(26px, 4.4vw, 52px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  os-cell:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(44px, 5.6vw, 76px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.003em"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.025em"
  wordmark:
    fontFamily: "Pixelify Sans, Geist, sans-serif"
    fontWeight: 400
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "22px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  section: "96px"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-idle:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-lg:
    rounded: "{rounded.lg}"
    padding: "14px 28px"
  os-cell:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    padding: "24px"
    height: "210px"
  os-cell-own:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.lg}"
  tag:
    backgroundColor: "{colors.tag-gray}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "3px 12px"
---

# Design System: Udeos Launcher

## Overview

**Creative North Star: "The Lineup Sheet"**

The page is a festival bill set in one typeface. Rank is carried by size and line breaks alone: the download is the headliner, the headline features are support acts, and the small names run together in one justified block. The colours are the launcher's own, kept as-is: a pale blue day theme and a night-blue dark theme, one blue accent, no neon, no gradients on type. Light and dark are both first-class, chosen by system preference with a manual toggle.

Structure is flat and ruled. Sections are separated by hairlines, not cards; panels are white or deep-navy slabs with a one-pixel edge. Exactly one surface is drenched: the open-source band floods the full width in the accent blue. Pixelify Sans appears only in the wordmark, and Minecraft item sprites stay tiny (20px) as texture beside feature copy.

**Key Characteristics:**
- One face, Geist, at weight 800 with tight negative tracking for everything that ranks; hierarchy by size only.
- Three giant OS download cells; the visitor's own system fills with the accent and is labelled "Your system".
- Hairline-ruled sections on a bg tinted by two faint accent glows.
- One drenched accent band, one accent colour everywhere else.
- Geist Mono for versions, sizes and file kinds.

## Colors

A night-blue and pale-blue pair with a single saturated blue; everything else is a tint of the same hue family.

### Primary
- **Launcher Blue** (#2563EB light / #336CEB dark): the only accent. Fills the visitor's own OS cell, primary buttons, selected tabs, step numerals, focus ring, selection tint and the open-source band. Hover steps to #1D4ED8 / #4E86F8. Text on it is white.

### Neutral
- **Pale Sky** (#EEF3FC) / **Midnight Navy** (#0E1423): page ground, with a faint accent radial glow at top-right and bottom-left (16% / 10% mix light, 28% / 18% dark).
- **Panel White** (#FFFFFF) / **Deep Slate** (#161E2E): panels, OS cells at rest, the sticky header's glass base.
- **Raised Mist** (#E8EEF9) / **Raised Slate** (#1F293C): hover state of cells, tab-track and list rows, inline code.
- **Ink** (#121A2B) / **Frost** (#ECF0F7): text. **Slate Muted** (#586379) / **Dusk Muted** (#8E98AE): the grey second sentence, captions, mono metadata.
- **Hairline** (rgba(30,55,110,.15) / rgba(150,180,255,.13)): every rule, the gaps between OS cells, edge rings.

### Named Rules
**The One Blue Rule.** Blue is the only chromatic colour on the page. The own-system cell and the open-source band are the two places it floods; elsewhere it marks selection and action only.

**The Launcher's Own Rule.** Tokens mirror the launcher app, light and dark pairs both. Do not add hues, neon or glow to freshen them.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono (with ui-monospace)
**Wordmark:** Pixelify Sans, wordmark only.

**Character:** Poster-heavy and compressed. Extra-bold Geist at -0.045em to -0.05em tracking reads as a single confident voice; Geist Mono supplies the small print of the bill.

### Hierarchy
- **Headliner** (800, clamp(44px, 9vw, 128px), 0.92): page and section headings ("Udeos Launcher", "Open source.", "Download."), and the three headline features. The h1 may scale down to clamp(40px, 7.2vw, 100px) with a muted second sentence on the next line.
- **OS cell** (800, clamp(44px, 5.6vw, 76px), 0.95): the system name inside each download cell.
- **Support** (800, clamp(26px, 4.4vw, 52px), 1): support-act features and the open-source promise line.
- **Title** (800, 24px, -0.03em): install panel system names.
- **Body** (400, 15px, 1.55): prose; muted captions at 14-18px; FAQ answers capped near 760px.
- **Label** (600, 14px / 13px small buttons): buttons and tabs.
- **Mono** (400, 12-13px, +0.025em, uppercase for cell captions): versions, sizes, file kinds, commands.

### Named Rules
**The Size-Only Rule.** Rank is expressed by font size and line break. Weight stays 800 for all ranked type; never colour, italics or decoration to create emphasis. The one exception is the muted second sentence of the h1, a grey tone shift on the same size.

**The Wordmark-Only Rule.** Pixelify Sans is never used for headings or body.

## Layout

A single 1240px column with 20px side padding. Sections stack with roughly 96px vertical rhythm and are divided by 1px hairlines (`border-t`), not boxes. The first viewport is the h1, one muted promise line (max 560px) and a three-column grid of OS cells (210px tall, gap 1px so the hairline colour shows through). Below 900px the cells stack at 150px and the visitor's own cell moves first. Features are full-width rows (headliner left, 320px description right from 900px) followed by a four-column support grid (two columns from 600px, one below) and a justified single-paragraph block of small names. The gallery is a segmented tab strip over one stacked screenshot pane; install guidance is a three-tab panel opened on the visitor's system. Content reveals on scroll with a 14px rise over 500ms.

## Elevation & Depth

Flat. Depth is tonal: panel against ground, with a one-pixel edge ring (inset hairline) and a faint soft drop (0 6px 16px -12px). Screenshots carry a larger popover shadow (0 18px 40px -12px at 30% navy). The primary button has a 1px top highlight and a short blue under-glow. The header is translucent glass with a blur.

### Named Rules
**The Hairline Edge Rule.** Surfaces separate by a 1px ring and a tonal step, never by a heavy shadow.

## Shapes

Gentle but not round: 6px on small chips and step numerals, 10px on buttons and tab tracks, 16px on panels, OS cell grid and large buttons, 22% radius on the app icon, full pill on tags. The OS cell grid is one rounded, clipped block divided by 1px gaps.

## Components

### Buttons
- **Shape:** 10px radius; large variant 16px with 14px 28px padding.
- **Primary:** Launcher Blue fill, white 600 text, 10px 20px padding.
- **Idle / secondary:** raised tint fill with an inset hairline ring and ink text; used for header links and "All formats".
- **On the blue band:** white fill with blue text, or transparent with a 1.5px white-60% ring.
- **Hover / Focus:** colour step over 150ms; focus-visible is a 2px blue outline offset 3px.

### OS Download Cells
Signature. Panel-coloured slab with mono caption top ("Windows 10 / 11 · 64-bit"), the system name at OS cell size, and a mono file line with size and a right arrow that nudges 6px on hover. The detected system (class `rec`) fills with the accent, switches all text to on-primary and shows a "Your system" pill; the others stay panel-coloured and lift to Raised on hover.

### Feature rows
Hairline-topped rows: headliner title, 20px pixelated item sprite beside a muted description. Support acts are the Support size title over a 14px muted line.

### Tabs
A panel-coloured segmented track with 4px padding; selected tab fills blue with white text, unselected is muted. Used for the screenshot gallery and the install guide.

### Tags and code
Pill tag: grey-blue fill, 11px 600 text. Inline code: Raised fill, 6px radius, Geist Mono.

### Open-source band
Full-bleed Launcher Blue section: headliner "Open source.", support-size promise line, white and ringed buttons.

### Navigation
Sticky glass header with a hairline bottom, wordmark left, GitHub idle button, theme toggle and a small primary Download button that follows the detected system.

## Do's and Don'ts

### Do:
- **Do** rank content by size and line break in Geist 800 with -0.04em to -0.05em tracking.
- **Do** fill only the visitor's own OS cell with #2563EB / #336CEB and keep the others outlined by tone.
- **Do** separate sections with 1px hairlines and keep panels flat with an edge ring.
- **Do** keep light and dark token pairs in sync with the launcher.
- **Do** give every interactive element the 2px blue focus-visible outline.

### Don't:
- **Don't** introduce neon, extra hues or glowing gradients.
- **Don't** use Pixelify Sans outside the wordmark.
- **Don't** build equal feature-card grids or a split hero with a product shot; the bill is the layout.
- **Don't** add a second drenched surface; the open-source band is the only one besides the own-system cell.
