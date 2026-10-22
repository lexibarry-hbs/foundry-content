# Foundry Perks Guide

Founder-facing web page from the Perks Overview session (October 19, 2026): how to activate perks, common questions, timing hacks, and the session recording.

## Files

```
index.html                         Page markup
css/styles.css                     Styles (brand tokens at the top in :root)
js/main.js                         Expand/collapse FAQ and copy-email button
assets/hbs-foundry-logo.svg        Official HBS Foundry lockup (light backgrounds). Don't edit.
assets/perks-overview-thumbnail.jpg  Loom thumbnail, 1280x720
fonts/                             Empty. Add licensed Graphik web fonts here.
```

No build step and no dependencies. Open `index.html` in a browser, or publish the folder with GitHub Pages (Settings > Pages > Deploy from a branch).

## Fonts

The page uses Graphik (Regular 400, Medium 500, Semibold 600, Bold 700). The font files are **not** included because Graphik is licensed to HBS Foundry.

1. Confirm the Foundry license covers web use.
2. Add `Graphik-Regular`, `Graphik-Medium`, `Graphik-Semibold`, and `Graphik-Bold` as `.woff2` (and optionally `.woff`) to `fonts/`.
3. Remove the font lines from `.gitignore` if the license allows committing them.

Without the files, the page falls back to Arial.

## Editing content

- Perk amounts and terms were shared verbally in the session. Check each perk page before updating.
- Brand colors live in `:root` in `css/styles.css`. Crimson (`--crimson`) is for the one headline phrase only.
- Recording: https://www.loom.com/share/2cafd19bdf2742edad156978fbfac5cb
