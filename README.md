# Count Click

A touch-friendly, three-level arcade game built as a mobile-first web app. Players tap moving targets, collect gems and coins, avoid hazards, and save completed-run scores on the current device.

## Features

- Three short challenges with independent timers and score rules
- Touch-first controls and a responsive portrait layout
- Local high-score history stored in the browser on this device
- Sound effects generated in the browser
- Original vector game art, a web app manifest, and a service worker for home-screen installation and offline use after the first load

## Built with

HTML, CSS, vanilla JavaScript, the Web Storage API, a web app manifest, and a service worker. No external package dependencies are required.

## Run locally

Serve this folder over HTTP, then open the local server address in a browser. Python's built-in static server on port 8000 is one option.

## Mobile support

This is a mobile web app/PWA, not a native iOS application. On iPhone, open the hosted site in Safari and use **Share → Add to Home Screen**. Scores stay in the browser on that device and are not synced to a server.

## Scope

This repository focuses on the mobile web version. The original archive also contains a Python prototype and an Android WebView shell; generated build outputs and the unused player-score CSV are not included here.
