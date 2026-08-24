# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview
**EatWithMe** is a 100% Local-First / Offline-First personal food discovery and map application for Ho Chi Minh City, Vietnam. It runs as a lightweight static web app, PWA, and cross-platform mobile app via Capacitor. All user data is persisted locally in `localStorage` and `IndexedDB`.

---

## Development Commands

### Running Locally
- **Start local server:** `npm start` or `npm run dev`
  - Runs built-in Node.js static server at `http://localhost:4173` via `server.mjs`.
  - Zero external runtime server dependencies needed.

### Mobile & Build (Capacitor & esbuild)
- **Bundle web assets for mobile:** `npm run build:mobile` (bundles `app.js` with esbuild to `dist/`)
- **Sync Capacitor assets:** `npm run cap:sync`
- **Add native platforms:** `npm run cap:add:android` / `npm run cap:add:ios`
- **Open native IDEs:** `npm run cap:open:android` / `npm run cap:open:ios`

### Data Ingestion & Geocoding
- **Import & Geocode places from Excel:** `node scripts/import-excel-geocode.mjs`
  - Parses `Eat with mi.xlsx` (`quán ăn` and `nước` sheets).
  - Uses a multi-tier free geocoding engine (Photon OSM with Saigon proximity bias, Nominatim, and ESRI).
  - Updates `defaultPlaces` in `app.js`.

---

## Architecture & Code Structure

### Core Files
- `index.html`: Main HTML entry point. Loads Leaflet CSS/JS (via CDN), Google Sign-In SDK, and modern CSS/JS bundles.
- `app.js`: Single-file core client application containing:
  - Default dataset (`defaultPlaces` with 200+ curated places).
  - Local-first state management with `IndexedDB` and `localStorage`.
  - Leaflet map integration (CartoDB Positron tiles, custom SVG markers, popups, bounds fitting).
  - Geolocation engine (Capacitor Geolocation API + Browser Geolocation with Saigon fallback).
  - UI components (Header, filter pills, search input, place cards list, detail modal, spin the wheel).
  - Haversine formula distance calculation and sorting.
- `styles.css`: CSS design system featuring custom properties (`--bg-primary`, `--accent`, etc.), glassmorphism, responsive mobile-first layout.
- `server.mjs`: Zero-dependency Node.js HTTP server for local development with accurate MIME types and cache headers.
- `build.mjs`: esbuild bundler script compiling `app.js` and copying static files to `dist/` for Capacitor.

### Data Flow
1. **Excel Sheet (`Eat with mi.xlsx`)** → `scripts/import-excel-geocode.mjs` → geocoded coordinates → `defaultPlaces` array in `app.js`.
2. **Initial Load:** If user has no saved places in `IndexedDB`/`localStorage`, `defaultPlaces` is seeded.
3. **Runtime Updates:** User additions/edits save directly to local browser storage and can be backed up as `.json`.
