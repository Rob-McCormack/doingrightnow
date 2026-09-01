# Dev copies

Development snapshots of the journal. The root [`DoingRightNow.html`](../DoingRightNow.html) is the authoritative app after a beta is promoted.

## DoingRightNow-dev-2.html

- **URL (local):** open `dev/DoingRightNow-dev-2.html` in a browser
- **Storage:** IndexedDB database `doing-right-now-inline`
- **Caution:** when served from the same origin as the root app, this snapshot can share journal data with it. Export a backup first or use a separate browser profile.
- **Not a PWA:** no manifest or service worker (won’t clash with the installed app)
- **Not indexed:** `noindex` meta; `/dev/` disallowed in `robots.txt`

## PlanningRightNow-sample.html

A sketch of **Planning Right Now** in the Doing Right Now PWA shell. Forward-looking task lists with checkmarks. Not the live plugin or [planning-right-now-web](../../planning-right-now-web).

- **URL (local):** open `dev/PlanningRightNow-sample.html` in a browser
- **Storage:** IndexedDB database `planning-right-now-sample` (does not share data with the journal)
- **Not a PWA:** no manifest or service worker
- **Not indexed:** `noindex` meta

## Resetting test data

1. Export anything you need from **System**.
2. Use **System → Reset**, or remove the `doing-right-now-inline` IndexedDB database in browser developer tools.
3. Reload to restore the starter lists.

## Keeping in sync

Do not maintain the dev snapshot and root app as parallel production implementations. Make release changes in the root app after promotion; create a new explicitly named dev snapshot only when another experiment begins.
