# Doing Right Now

A minimalist, offline-first journal to cure task paralysis. No logins — just focus on your next tiny step.

**Don’t plan your entire day. Just start with what’s right in front of you.**

Not a planner, to-do list, or habit tracker. Write one timestamped line — what you just did, or the tiny next step — and do that. Each line lowers the bar for the next one. If you drift, the last line is exactly where you left off.

[Use it at DoingRightNow.com](https://doingrightnow.com/) · [Open the journal](https://doingrightnow.com/DoingRightNow) · [Press kit](press/README.md)

![Doing Right Now journal](images/screenshot-840.jpg)

## How it works

One prompt: **What are you doing right now?**

- **Shrink the next step.** Don’t write “Write the report.” Write “Open the document.”
- **Empty your working memory.** Your brain is a processor, not a storage drive. Log the line so you don’t have to hold it in your head.
- **Anchor your attention.** Your timeline is a safety net. Come back anytime and see exactly what you were just doing.

Entries group by day in Today, Yesterday, 7-day, 30-day, 60-day, and All views. Search covers the whole journal.

## Markup

Optional tags in any line:

| Syntax | Meaning |
| --- | --- |
| `@person` | Person |
| `#location` | Place |
| `+project` | Project |
| `!` at the end of a line | Bold text |

Keep a tag to one word, or use a hyphen, such as `+annual-report`. The thumb beside a line means you began. Quick Add lives in Settings.

## What it includes

- One prompt, a timestamp, and a timer on today's newest line
- Zen mode from the timer or the expand icon
- Scratch Pad and Quick Add
- Search, copy, and day views through the last 60 days
- Light, dark, and system appearance, with accent colors
- JSON backup and restore, plus a Markdown copy
- Optional GitHub Backup to a private repository you control
- Offline PWA support

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

| File | Role |
| --- | --- |
| `index.html` | Landing page |
| `DoingRightNow.html` | The journal (single file, no build step) |
| `press/` | Icons, screenshots, copy for reviewers & directories |

## Privacy

Everything lives in this browser’s IndexedDB. No accounts and no tracking. Export a JSON backup from System, or turn on GitHub Backup to copy it to a private repository you control.

## Credits

Made by [Simpler Tasks](https://simplertasks.com).

## License

[MIT](LICENSE) © 2026 Simpler Tasks
