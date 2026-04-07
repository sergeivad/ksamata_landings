# Tirol RSYA Third Screen Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the third landing screen based on the archive block with the speaker portrait, intro headline, experience badge, and specialization list.

**Architecture:** Extend the existing `renderHero()` page composition with a new `renderSpeakerScreen()` section in `src/hero.js`, then style it in `src/styles.css` using the same typography and spacing system as the first two screens. Reuse the exact portrait asset from the archive and verify the new block through a markup-level test in `tests/hero.test.js`.

**Tech Stack:** Vite, vanilla JS, CSS, Vitest

---

### Task 1: Add coverage for the third screen

**Files:**
- Modify: `tests/hero.test.js`

**Step 1: Write the failing test**

Assert that the rendered page contains:
- `Позвольте представиться`
- `Алена Гусева`
- `врач с опытом более 25 лет`
- all specialization lines
- the archive portrait asset path

**Step 2: Run test to verify it fails**

Run: `npm test -- --run`
Expected: FAIL because the third screen is not rendered yet.

### Task 2: Implement the third screen

**Files:**
- Modify: `src/hero.js`
- Modify: `src/styles.css`
- Copy asset to: `public/assets/tild3639-3561-4262-b938-613130346431__qa3dnw1ct9qljmbu97nq.jpg`

**Step 1: Add section markup**

Create a third section with:
- portrait column
- intro headline
- name/experience badge
- specialization list with check markers

**Step 2: Add section styles**

Match the archive composition while preserving the current landing visual language and responsive behavior.

### Task 3: Verify

**Files:**
- Modify: `tests/hero.test.js` if needed for final exact strings

**Step 1: Run tests**

Run: `npm test -- --run`
Expected: PASS

**Step 2: Run production build**

Run: `npm run build`
Expected: PASS
