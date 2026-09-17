# Tirol RSYA B Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a local `b` copy of the Tirol RSYA landing with only the first two screens, a new custom conversion block, and the footer.

**Architecture:** Copy the existing Vite landing into a separate sibling directory so variant `a` remains untouched. In the copied project, keep the same popup/widget infrastructure and adapt `renderHero()` to render only the required sections plus the new block.

**Tech Stack:** Vite, vanilla JS, Vitest, CSS

---

### Task 1: Create the isolated local copy

**Files:**
- Create: `/Users/sergeielkin/Base/Ksamata/Lends/tirol_rsya_b/*`

**Step 1: Copy the current project without transient build artifacts**

Create a sibling project directory for the `b` variant.

**Step 2: Update the Vite base path**

Set the copied `vite.config.js` base to `/rsya/tirol/b/`.

### Task 2: Write the failing tests for variant `b`

**Files:**
- Modify: `/Users/sergeielkin/Base/Ksamata/Lends/tirol_rsya_b/tests/hero.test.js`

**Step 1: Add assertions for the trimmed page structure**

Check that the copied landing still contains the first and second screens.

**Step 2: Add assertions for the new custom block**

Check for:
- intro copy about Алена Гусева
- `Хотите попробовать?`
- `Забрать подарки`
- six benefit cells
- `Хочу быть здоровой!`

**Step 3: Add assertions that removed sections are absent**

Check that the speaker intro, symptom grid, benefits grid, reviews, and registration gifts sections are not rendered.

**Step 4: Run tests and confirm they fail**

Run: `npm test -- --run`

### Task 3: Implement the new variant structure

**Files:**
- Modify: `/Users/sergeielkin/Base/Ksamata/Lends/tirol_rsya_b/src/hero.js`
- Modify: `/Users/sergeielkin/Base/Ksamata/Lends/tirol_rsya_b/src/styles.css`

**Step 1: Add the new block renderer**

Implement the new text-and-benefits section with two CTA buttons wired to the existing popup trigger.

**Step 2: Trim `renderHero()`**

Render only:
- hero
- second screen
- new custom block
- footer
- popup host

**Step 3: Add responsive styles**

Style the new block for desktop, tablet, and mobile.

**Step 4: Run tests and confirm they pass**

Run: `npm test -- --run`

### Task 4: Verify the copied project builds

**Files:**
- Modify: `/Users/sergeielkin/Base/Ksamata/Lends/tirol_rsya_b/vite.config.js`

**Step 1: Run the production build**

Run: `npm run build`

**Step 2: Smoke-check local startup instructions**

The project should be ready to run locally under the `b` subpath.
