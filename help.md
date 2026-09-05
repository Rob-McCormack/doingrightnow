# Doing Right Now — Help

A journal for getting unstuck. Write one line for what you're doing right now, timestamp it automatically, and move on. No planning, no streaks, no pressure to finish.

This reference covers the **1.0.0-beta.1** public beta.

[New here? Read the philosophy →](/guide)

---

## Quick Start

1. Open the journal — you land on **Today**.
2. A new journal starts with one normal entry, **Trying out Doing Right Now**, to demonstrate the journal. You can edit or delete it.
3. Type what you're doing right now in the composer at the top, then press **Enter** or the Enter-icon button.
4. When what you're doing changes, write the next line. That's the whole app.
5. Everything stays in this browser — no sign-up and no cloud sync.

![The Today view with the composer and timestamped entries. The newest line is the current item.](images/screenshot-680.jpg)

Two brief, dismissible messages guide your first entry and then disappear permanently. That's enough to start. Everything below is optional.

---

## The Journal

- The **Today** composer creates a timestamped entry. The newest line is the current item: taller than the rest, with its elapsed timer under the timestamp when the timer is enabled.
- Entries can't be reordered, and their timestamps can't be changed.
- Open the navigation drawer with the hamburger. Tap the current view title, such as **Yesterday** or **Search**, to return directly to Today; tapping **Today** scrolls to the top without opening the keyboard.
- Tap an entry to view and edit its complete text.

## Editing a Line

- The dialog editor supports multiple lines and up to **1,000 characters**, with a live character count. Press **Enter** to save or **Shift+Enter** to add a new line.
- Choose **Save** to keep changes, **Cancel** to discard them, or **Delete** and confirm to remove the entry.
- Long entries are shortened to three lines with an ellipsis in the journal display. The editor always shows the complete text.
- The browser’s native spell checker is enabled in the Today composer, entry editor, Quick Note, project documents, issues, and editable copy dialog. Languages and suggestions come from your browser or device; Doing Right Now does not send text anywhere.
- Addresses beginning with `http://`, `https://`, or `www.` appear as openable links in the editor and entry-actions dialog. `+Ongoing` and `+Ongoing.1` appear in the same list when that project or issue exists; tapping one opens it.

![Screenshot placeholder: the entry dialog with multiline text, character count, detected links, and Save, Cancel, and Delete actions.](placeholder-editing.png)

## Entry Actions

Use the **ellipsis** beside an entry to open its actions:

- **Copy to Today** duplicates it with a new current timestamp; the original remains unchanged.
- **Mark as started (`^`)** — you began this. Counts in the day's started total.
- **Mark as completed (`"`)** — you finished a small step. Different from started; it does not count in started/total.
- **Mark as important (`!`)** — worth noticing.
- **Mark as question (`?`)** — an open loop.
- An entry can have only one of these special markers. Choosing another replaces the current one.
- **Delete entry** asks for confirmation before permanently removing it.

![Screenshot placeholder: the ellipsis entry-actions dialog with Copy to Today, marker controls, links, and Delete entry.](placeholder-actions.png)

---

## Tags & Formatting

Optional shorthand:

- `@name` tags a person and is shown in violet.
- `+project` tags a project and is shown in amber. `+Website.12` tags a numbered issue the same way.
- `#place` tags a place and is shown in teal.
- `^` as a standalone marker means started and counts in the day's started total.
- `"` as a standalone marker means you completed a small step. It is not a start and does not count in started/total.
- `!` as a standalone marker means important.
- `?` as a standalone marker means question or open loop.
- Backticks display inline text in monospace, such as `` `next step` ``.

Example: `Email @Bill about +Website ^`

Type `@`, `+`, or `#` to see matching suggestions. Suggestions come from the People, Projects, and Places lists managed in **Settings**. Type `+Ongoing.` or `ongoing.` to list that project’s issues (`+Ongoing.1`). Matching is case-insensitive and based on the text after the prefix. `+Website.12` is highlighted as a project tag.

Special markers are standalone symbols, and an entry can contain only one of `^`, `"`, `!`, or `?`. If you type more than one, the last one is kept. Emoji are ordinary searchable text; for example, 🤡 can flag a distraction and ✅ can flag a small win.

## Search

Open **Search** from the drawer or command palette. Search is a simple, case-insensitive **substring search** across every entry.

- Typing `Bill` finds that sequence anywhere, including in `@Bill`. Typing `@Bill` narrows the substring to the prefixed text.
- Search opens with no results and a prompt to type. Results update as you type and display newest first.
- Search tags directly with `@person`, `+project`, or `#place`.
- **Copy** copies matching entries as plain text.
- **Edit** opens an editable plain-text preview before copying; changing the preview does not change the journal.

![Screenshot placeholder: the Search view with a search box, result count, and Copy and Edit controls.](placeholder-search.png)

## Quick Add

Quick Add stores reusable activity text. Manage the list in **Settings → Quick Add**.

1. Use the lightning button beside the Today composer to open the Quick Add menu.
2. Choose an item to append it to anything already in the composer.
3. Edit the combined text if needed, then press **Enter** or the Enter-icon button to create the entry.

The full entry dialog also displays Quick Add items as buttons. Templates may include tags, markers, and backtick formatting.

![Screenshot placeholder: the lightning-button menu beside the Today composer, showing reusable activities managed in Settings.](placeholder-quickadd.png)

## Quick Note

Quick Note is a shared scratchpad for anything that is not a timestamped entry.

- Use the **note icon** in the header, to the right of the command palette, from any view.
- It auto-saves as you type and is not attached to a date.
- Its **Copy** button copies only the note.
- The command palette can open and focus Quick Note directly.

## Projects

Optional. Open **Projects** from the drawer, or use **Project:** and **Issue:** commands in the command palette. Document and issue commands use the last opened project (default **+Ongoing**); they do not ask which project.

Projects are things you work on. Issues belong to a project. Both are just freeform text. Do things your way.

### Today across projects

**Today: may be the complete feature.**

It answers the one cross-project question that fits Doing Right Now:

> What deserves my attention now?

The lifecycle is simple:

1. Add `Today:` to the beginning of a line in a project document or issue.
2. It appears in **Today across projects**.
3. Open it and work.
4. Remove `Today:` when it no longer needs attention.

That is not a status system. The project text remains; only its temporary visibility changes.

- Every journal has **+Ongoing** — a catch-all document and issue list that cannot be renamed or removed. A new journal includes a short note and two sample issues so you can see how it works; you can edit or delete those.
- Add another project only if you need a separate document. **+Website** appears next to **+Ongoing** in the picker, not inside it.
- Starter tag names in Settings (Website, Report, Home) are only tags until you add a project here.
- Type `+Ongoing.1` in a journal line to point at an issue. Today’s `+` suggestions include those references. The entry’s ellipsis menu (and the editor) list `+Ongoing` and `+Ongoing.1` as links that open that document or issue.
- Begin a line with `Today:` in a project document or issue to include the complete line in **Today across projects**. Matching is case-insensitive and only occurs at the beginning of a line, so an ordinary sentence containing “today” is ignored.
- Open the collected view with the calendar-check icon in Projects or **Project: Today** in the command palette. Each result names its source; selecting it opens the project document or exact issue and selects the matching line.
- `Today:` lines remain until you edit or remove the prefix. They do not expire automatically.
- For any other text, use **Project: Search documents & issues** in the command palette. It searches every project document and issue together and returns each complete matching line.
- Select a project-search result to open its project document or exact issue and select the source line. The regular **Search journal** view continues to search journal entries only.
- There are no status fields, assignees, or due dates — write those in your own words if you need them. The examples below are only illustrations, not a required format.
- Export includes project documents and issues in the same JSON backup.

Example project document:

```
WEBSITE REDESIGN

Goal
Launch the new website before October.

Next
Today: @Rob — Finish mobile navigation
@Sarah — Rewrite the introduction
@Bill — Review the contact form
@Nina — Confirm launch copy

Milestones
Sep 12 — Content complete — @Sarah
Sep 20 — Internal review — @Rob @Bill
Sep 27 — Launch candidate — @Rob
Oct 1 — Launch — @Rob @Nina

Timeline
Sep 1–10 — Content — @Sarah
Sep 8–18 — Development — @Rob
Sep 18–25 — Testing — @Bill
Sep 25–30 — Final changes — @Rob @Sarah

Waiting
@Sarah — Photographs
@Bill — Pricing copy
@Nina — Final approval

Calendar
Sep 5 — Order remaining assets — @Sarah
Sep 12 — First full content review — @Rob @Sarah
Sep 18 — Client review — @Bill
Sep 25 — Final changes — @Rob
Oct 1 — Launch — @Rob @Nina
```

Example issue:

```
+Website.1

Mobile menu closes unexpectedly on iPhone.

Sept 1, 2026

STARTED:
Reproduced the problem in Safari.

@Rob is checking the outside-click handler.

Need to:
Today: test touch events
- test scroll behaviour
- compare with desktop Safari

Sept 2, 2026

PROGRESS 50%:
The issue appears to happen only after scrolling.

Possible fix:
Ignore outside-click events while the mobile menu is being scrolled.

DONE:
Fixed the event handler and tested on iPhone.
```

## Views, Copy & Editable Plain Text

- History views group entries by day and show the newest entries first.
- In Yesterday, 7-, 30-, 365-day, All journal, and Search views, **Copy** sends displayed entries to the clipboard as readable plain text.
- **Edit** opens the same plain text in a dialog. You may revise it before copying; those revisions never alter saved entries.
- Plain text includes date headings, optional ratings as `*` characters, timestamps, and entry text.

![Screenshot placeholder: a history view and its editable plain-text copy dialog.](placeholder-copy.png)

## Command Palette & Zen

- The right side of the header contains the command icon and Quick Note; the hamburger on the left opens the navigation drawer. Open the palette with its icon or **⌘K**/**Ctrl+K**.
- Choose in any of three ways: type a more specific phrase and press **Enter**, click or tap a command, or use the arrow keys and **Enter**. For example, instead of stopping at `project`, search for `open document`, `new project`, or `search documents`.
- Commands cover adding an activity; Today, Yesterday, 7-, 30-, 365-day, and All views; journal Search; Projects (including **Project: Today** and **Project: Search documents & issues**); Quick Note; Zen mode; Help; and temporary Developer tools. Settings commands are prefixed **Settings:**, System commands **System:**, project commands **Project:**, and issue commands **Issue:**. **Add an activity** and **Go to Today** stay first; the remaining commands are alphabetical. **System: Test GitHub connection** and **System: Back up to GitHub** appear only when Advanced is on.
- Use the expand button at the upper right of Today’s current entry to enter **Zen mode**, a distraction-free full-screen view of the current entry, elapsed duration, and current clock time. Started, completed, important, and question markers appear as icons instead of `^`, `"`, `!`, or `?`. Its **+** returns to Today ready to add another activity.

---

## Day Ratings & Counts

- On any **past** day, tap the date to cycle a star rating from 0 to 5. Today can't be rated.
- Every day header shows **started/total**. “Started” means entries carrying the `^` marker.
- A trophy appears when a day's total reaches the threshold configured in Settings (default 6).

![Screenshot placeholder: a past day's heading with rating, started/total badge, and trophy.](placeholder-daystars.png)

## Timer on the Current Line

The elapsed-time display on Today’s current entry shows how long the newest line has been current. It appears under that entry’s timestamp: the animated timer icon, then the numeric readout. It is enabled by default, but it is optional.

- It counts seconds and minutes, then hours, up to **8hr+**.
- The stopwatch hand circles every minute to show passing time; it is not a target or countdown.
- If the timer feels distracting, visually dominant, or creates pressure, turn it off in **Settings → Timer on current entry**. The journal works exactly the same without it.
- The duration does not use AM/PM and is not logged or reported elsewhere.

## Theme & Appearance

- Choose **System**, **Light**, or **Dark** in Settings, or use **Settings: Toggle Light/Dark** in the command palette.
- Choose Small, Medium, or Large text and one of six accents: Green, Blue, Violet, Amber, Coral, or Pumpkin. The app icon remains green.
- Choose **Loose** (default) or **Tight** item spacing for the journal list.
- Choose 12- or 24-hour timestamps and Regional, MM/DD/YYYY, DD/MM/YYYY, or YYYY-MM-DD dates.
- Reduced-motion preferences disable decorative animation.
- **Advanced** is off by default. Turn it on in Settings to show optional tools such as GitHub Backup.

![Screenshot placeholder: Settings showing appearance, font size, item spacing, date and time formats, and six accents.](placeholder-theme.png)

---

## Your Data

- Journal data is stored in **IndexedDB** in this browser. There is no Doing Right Now account.
- Tabs and windows stay in sync automatically only in the **same browser on the same device**.
- A different device or browser has a separate journal. Clearing browser site data can permanently remove it.
- Open **System → Data & backup** to see journal size, browser storage estimates when available, and the last backup time.
- **Export journal** downloads a complete `.json` backup containing entries, Quick Note, ratings, lists, settings, project documents, and issues. Import can restore this file. The GitHub token and repository connection are not included.
- **Export as text** downloads a readable `.txt` of the journal, Quick Note, project documents, and issues. It is for reading, sharing, or archiving before a cleanup. It cannot be imported.
- **Export as Markdown** downloads the same words as a `.md` file. GitHub can render it. It cannot be imported.
- **Import journal** accepts a Doing Right Now JSON backup. After showing its entry count and date range, import **replaces the entire current journal**, Quick Note, ratings, lists, settings, project documents, and issues; it does not merge. This device’s GitHub connection and token stay put. Export the current journal first if you may need it.
- A backup reminder appears after seven days of journal history with no export, or when the latest export is at least 30 days old. Repeat reminders are limited to once a week. A successful GitHub backup also counts as an export.

In **System**, destructive cleanup actions ask for confirmation:

- **Clear all except Today** removes entries before today while keeping Quick Note, lists, settings, and projects.
- **Clear older entries** keeps a chosen number of recent calendar days and removes earlier entries.
- **Reset** removes journal entries, Quick Note, ratings, custom lists, settings, project documents, issues, and any stored GitHub token, then restores starter People, Projects, Places, and Quick Add lists.

Clearing and resetting cannot be undone without a previously exported JSON backup.

## GitHub Backup

Optional. Off until **Settings → Advanced** is on. Then **System → Data & backup** shows GitHub Backup.

This uploads the same JSON as **Export journal**, plus a Markdown copy, to a private GitHub repository you control. It is backup, not sync. The journal stays in this browser. A failed upload never blocks local saving. Doing Right Now does not host your data.

**What you need**

1. A dedicated **private** GitHub repository used only for this backup, for example `drn-backup`.
2. A **fine-grained personal access token** with access to that repository only, and **Contents: Read and write**. Grant nothing else.
3. In GitHub Backup: repository owner (your GitHub username), repository name, branch (`main` unless you chose another), and the token.

**Create the token**

1. GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens**.
2. **Generate new token**.
3. Resource owner: your account.
4. Repository access: **Only select repositories**, then choose the backup repository.
5. Repository permissions: **Contents → Read and write**. Leave other permissions at No access.
6. Generate the token, copy it once, and paste it into Doing Right Now. Do not commit it to any repository.

**Use it**

- **Test Connection** checks owner, repository, branch, and token without changing files.
- **Back Up Now** creates or updates `backup.json` and `DoingRightNow.md` in that repository. GitHub commit history keeps earlier versions.
- Restore by downloading `backup.json` from GitHub and using **Import journal**. `DoingRightNow.md` is for reading; it cannot be imported.
- The token is stored only in this browser. It is never written into `backup.json`, `DoingRightNow.md`, or a downloaded export.

If the token is exposed, revoke it in GitHub and create a new one.

## Install as an App

Installing the PWA is optional. It opens in its own window with an icon, but storage remains local to that browser installation.

**iPhone or iPad (Safari):**

1. Open the journal in Safari.
2. Tap **Share → Add to Home Screen**.

**Mac (Safari):**

1. Open the journal in Safari (macOS Sonoma or later).
2. Choose **File → Add to Dock…**, or **Share → Add to Dock**.

On desktop Chrome, use the install icon in the address bar when offered.

## Not a Task Manager

DRN records moments; it doesn't replace a full task manager. For a free, open-source option with projects, timers, and time tracking, see [Super Productivity](https://super-productivity.com/download/). Typical pattern: choose the next thing in your planner, work there, and log a new line in DRN when you switch.

## Privacy & Security

This isn't a password manager or encrypted vault. Don't store passwords, financial details, or other highly sensitive information in your journal or Quick Note.

- Data is plain text in this browser, not on Doing Right Now servers.
- Anyone with access to your unlocked device can read it.
- Browser extensions with site access may be able to read page storage.
- DRN uses no third-party scripts or analytics. Your journal leaves the browser only when you explicitly export a backup, copy text, or use optional GitHub Backup.

## Advanced Tips

- Use `^` to count starts and `"` to mark a completed small step. Add or remove either from the ellipsis menu. Treat started/total as a record rather than a quota.
- Search exactly the fragment you remember. Search does not interpret operators or quotes; every query is one case-insensitive substring.
- Emoji are searchable text.
- Tune the trophy threshold to match your day.
- Timestamps are intentionally uneditable.
- Quick Note is meant for one-off scraps, not a parallel planning system.
- Projects are optional. **+Ongoing** is always there if you want a catch-all; ignore extra named projects if the journal is enough.
- Star ratings are for personal pattern-spotting; there is no aggregate score.
- Export before switching devices or clearing browser data.

## Public Beta Notes

**1.0.0-beta.1** is a public beta. Back up regularly and expect details of the interface to evolve. Data remains browser-local. Optional GitHub Backup is a manual snapshot you send to a repository you control; it is not account sync, collaborative editing, or automatic cross-device backup. The current JSON import is a full replacement, not a merge. Features removed from the earlier app are intentionally absent, and no migration workflow is required.

---

*Doing Right Now was inspired by Novie by the Sea's talk on interstitial journaling — timestamped lines between tasks, one moment at a time.*
