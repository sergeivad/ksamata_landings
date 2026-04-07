# Tirol RSYA Second Screen Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the second landing section based on the archive reference and replace the doctor credentials card with a right-side free-price offer.

**Architecture:** Extend the existing page renderer with a dedicated second-screen section and a small data-driven renderer for its content. Reuse the shared visual language from the first screen while bringing in the required local image assets from the archive for the portrait and decorative objects.

**Tech Stack:** Vite, Vanilla JS, CSS, Vitest

---

### Task 1: Asset preparation

**Files:**
- Create: `public/assets/`

**Step 1: Extract the required archive images**

Pull the doctor portrait and the small gift image from the reference archive into `public/assets`.

**Step 2: Verify filenames and paths**

Confirm the files can be served directly by Vite.

### Task 2: Second-screen regression test

**Files:**
- Modify: `tests/hero.test.js`
- Modify: `src/hero.js`

**Step 1: Write the failing test**

Assert that the page markup contains:

- the second-screen heading `Щитовидка под контролем`
- the gift copy
- the CTA text for the second screen
- the price card on the right with `5000 ₽` and `БЕСПЛАТНО`
- the doctor image reference

**Step 2: Run test to verify it fails**

Run `npm test -- --run`.

### Task 3: Minimal markup

**Files:**
- Modify: `src/hero.js`

**Step 1: Add the second section renderer**

Implement semantic markup with the new price card replacing the doctor description area.

**Step 2: Re-run tests**

Run `npm test -- --run` and confirm green.

### Task 4: Styling

**Files:**
- Modify: `src/styles.css`

**Step 1: Add second-screen layout styles**

Implement the split layout, portrait area, curved decorative lines, gift row, CTA, and price card.

**Step 2: Add responsive rules**

Keep the section readable and visually controlled on tablet and mobile.

### Task 5: Verification

**Files:**
- Verify: `tests/hero.test.js`
- Verify: `src/*`
- Verify: `public/assets/*`

**Step 1: Run tests**

Run `npm test -- --run`.

**Step 2: Run production build**

Run `npm run build`.
