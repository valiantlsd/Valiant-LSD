# Unified Site Hosting Notes

This project is ready to host as a single Vite application.

## Recommended host

- Vercel

Netlify will also work.

## Project root

Deploy this folder as the project root:

`valiant-unified-site`

## Build settings

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

## Routes

This is a client-rendered app with internal routes:

- `/`
- `/vld`
- `/attention-mastery`

`vercel.json` is included so direct visits to those routes rewrite to `index.html`.

## Before production launch

- Set the production domain in Vercel
- Add a favicon
- Add production page title and meta description updates if needed
- Confirm the Calendly link is the final public booking URL

## Current production app entry

The unified app is now self-contained. It no longer depends on sibling project folders to build.
