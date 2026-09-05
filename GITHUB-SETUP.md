# GitHub Backup setup

Optional. Doing Right Now stays local-first. GitHub Backup sends a JSON snapshot to a private repository you control. It is backup, not sync. A failed upload never blocks saving in the browser.

Use the journal from a website origin (`https://doingrightnow.com` or localhost). A downloaded `file://` copy cannot reach the GitHub API.

## 1. Create a private repository

Create a dedicated private repository used only for this backup, for example `drn-backup`. Do not keep unrelated files there.

The token you create next can write anywhere in that repository.

## 2. Create a fine-grained token

1. Open [Fine-grained personal access tokens](https://github.com/settings/personal-access-tokens?type=beta).
2. Choose **Generate new token**.
3. Suggested name: `DRN backup — drn-backup`
4. Suggested description:

```text
Doing Right Now journal backup. Contents read/write on this backup repository only. Stored in this browser’s GitHub Backup settings. Revoke and replace if exposed.
```

5. Resource owner: your GitHub account.
6. Expiration: pick a date you will remember. GitHub requires one.
7. Repository access: **Only select repositories**, then choose the backup repository.
8. Repository permissions: **Contents → Read and write**. Leave every other permission at **No access**. Metadata read may appear on its own; that is fine.
9. Generate the token and copy it once. GitHub will not show it again.

Do not commit the token to any repository. If it is exposed, revoke it on that same GitHub page and create a new one.

## 3. Fill in Doing Right Now

1. Open the journal.
2. **Settings → Advanced** — turn it on.
3. **System → Data & backup** — GitHub Backup is at the bottom.

| Field | Example |
|---|---|
| Repository owner | your GitHub username |
| Repository | `drn-backup` |
| Branch | `main` unless the repository uses another default |
| Fine-grained token | the token you just copied |

**Enable GitHub Backup** remembers the connection on this device. **Back Up Now** works as soon as owner, repository, and token are filled in.

## 4. Test, then back up

- **Test Connection** checks owner, repository, branch, and token without changing files. The result appears in the GitHub Backup panel as **Last result**.
- **Back Up Now** creates or updates `backup.json` in the repository. GitHub commit history keeps earlier versions.
- **Last GitHub backup** shows the time of the last successful upload.

The token stays in this browser. It is never written into `backup.json` or a downloaded export.

## 5. Restore

1. On GitHub, open `backup.json`.
2. Download the file (or an older version from History).
3. In Doing Right Now, use **Import journal**. Import replaces the current journal; it does not merge.

## Later

A copy of the web app itself is not uploaded yet. If you want a recovery kit, keep `DoingRightNow.html` and related PWA files in a `/webapp` folder in the backup repository by hand for now.
