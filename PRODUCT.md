# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML + Tailwind CSS v4 (CLI build: `npm run build` from `src/input.css` to `css/style.css`), vanilla JS in `js/`. Deployed on GitHub Pages.

## Users

Minecraft players on Windows, macOS or Linux, many without a premium Microsoft account, who want to install a launcher, add mods/skins and host servers with friends. Confirmed primary visitor: a player who wants to download, so the right download for their OS must be the first and most obvious thing.

## Product Purpose

Landing page for Udeos Launcher (a free Minecraft launcher). Success: the visitor downloads the build for their system within seconds; secondarily understands the feature set and that the project is open source.

## Positioning

No Microsoft account needed, no premium tier, no ads; instances, mod loaders (Forge, NeoForge, Fabric, Quilt), Modrinth, skins, servers, bundled Java, all in one app. Open source under MIT.

## Capabilities and Constraints

- Downloads resolve from the latest GitHub release via `js/download.js` (data attributes: `data-dl`, `data-primary`, `data-version`, `data-size`, `data-file`, `data-os`). Keep that contract.
- Light/dark theme toggle (system default) swaps the matching `assets/<theme>_*.png` screenshots. `js/main.js` also handles the screenshot viewer, install tabs and reveal-on-scroll.
- Not an official Minecraft service; legal disclaimer must stay.
- Builds are not code-signed (SmartScreen / Gatekeeper notes must stay).

## Brand Commitments

Name "Udeos Launcher"; icon `assets/icon.png`; Minecraft item sprites in `assets/items/`; wordmark in Pixelify Sans, text in Geist. The launcher's own colour tokens (light and dark, blue accent) are binding: user asked to keep the application's default colours, no neon.

## Evidence on Hand

Real launcher screenshots (light/dark) in `assets/`; the page swaps between them with the theme. Repo github.com/Juan17la/Udeos_Launcher: MIT license, Go + TypeScript, 3 stars, 0 forks; GitHub language sizes ~512 KB Go, ~544 KB TypeScript. User confirmed claims allowed for the open-source section: MIT license, no ads and no telemetry. No testimonials, user counts or download numbers exist; do not fabricate them.

## Product Principles

- The download action for the visitor's OS is never more than one glance away.
- Say what it is free of (account, premium, ads, telemetry) plainly and truthfully.
- Open source is a trust signal for players first, an invitation for developers second.
- Only claim what the repo and the user confirmed.
