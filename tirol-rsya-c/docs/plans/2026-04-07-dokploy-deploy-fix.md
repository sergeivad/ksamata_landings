# Dokploy Deploy Fix Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish the landing on Dokploy at `https://land.ksamata.ru/rsya/tirol/a` with a healthy build and working subpath hosting.

**Architecture:** Keep the current Vite SPA and Dokploy Nixpacks deployment, but align the Node runtime with Vite 8 requirements. Persist the runtime choice in the repo and mirror it in Dokploy environment settings so rebuilds stay stable.

**Tech Stack:** Vite 8, Vitest, Nixpacks, Dokploy, GitHub

---

### Task 1: Persist Node 22 in the repo

**Files:**
- Create: `.nvmrc`
- Modify: `package.json`

**Step 1: Add a root `.nvmrc`**

Set the file contents to:

```text
22
```

**Step 2: Update `engines.node`**

Set `package.json` to:

```json
"engines": {
  "node": "22"
}
```

**Step 3: Verify locally**

Run: `npm test -- --run && npm run build`
Expected: tests pass and Vite build succeeds.

### Task 2: Mirror the runtime in Dokploy

**Files:**
- No repo file required

**Step 1: Open the Dokploy application environment settings**

Use the existing `Landings / tirol-rsya-a` application.

**Step 2: Add a build environment variable**

Create:

```text
NIXPACKS_NODE_VERSION=22
```

**Step 3: Redeploy**

Trigger a fresh deployment from the latest `main`.

**Step 4: Inspect logs**

Expected: setup stage selects Node 22 instead of 20.18.1.

### Task 3: Verify the public URL

**Files:**
- No repo file required

**Step 1: Check the health of the final URL**

Run:

```bash
curl -I https://land.ksamata.ru/rsya/tirol/a
```

Expected: `200` or a redirect to the final slash path followed by `200`.

**Step 2: Check the rendered page**

Open the public URL in a browser and confirm that assets load under `/rsya/tirol/a/`.

**Step 3: Confirm GetCourse widget integration still works**

Click a CTA and verify the popup opens.
