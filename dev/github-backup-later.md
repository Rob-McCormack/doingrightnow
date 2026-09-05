# GitHub Backup — later

Shipped: optional Advanced → System GitHub Backup. Manual Test Connection and Back Up Now. `backup.json` plus `DoingRightNow.md`. Local Export as Markdown. Token stays on the device and is stripped from exports. Restore is download `backup.json` + Import journal. Markdown cannot be imported.

Current setup: `GITHUB-SETUP.md`.

No sync, no merge, no Markdown round-trip.

## Later, if still useful

- **Hide-tab auto backup** if dirty. Not hourly, not on every keystroke.
- **`/webapp`** snapshot of `DoingRightNow.html` and PWA files, only when the app version or file hash changes. Recovery kit, not part of every journal backup.
- **Restore Latest** in System after backup is boring and reliable. Same validation as Import. Keep a safety copy first.

JSON remains the restore format. GitHub stores files and history. DRN owns the data model.
