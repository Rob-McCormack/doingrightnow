# Dev copies — screenshot & book data

Practice builds of the journal with **separate localStorage** from the live app at `/DoingRightNow`.

## DoingRightNow-dev-1.html

- **URL (local):** open `dev/DoingRightNow-dev-1.html` in a browser
- **Storage prefix:** `doingrightnow_dev1_*` — will not read or write the main app’s data
- **First visit:** same default welcome + sample entries as production
- **Not a PWA:** no manifest or service worker (won’t clash with the installed app)
- **Not indexed:** `noindex` meta; `/dev/` disallowed in `robots.txt`

## Resetting screenshot data

1. Open the dev app → **Settings** → **Clear All** (or **Clear All Except Today**)
2. Or in DevTools → Application → Local Storage → delete keys starting with `doingrightnow_dev1_`
3. Reload for a fresh first-visit seed

## Keeping in sync

This file is a copy of `DoingRightNow.html`. After major app changes, recopy and re-apply the dev patches (storage keys, asset paths, no SW).
