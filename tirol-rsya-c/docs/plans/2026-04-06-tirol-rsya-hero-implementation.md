# Tirol RSYA Hero Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scaffold a lightweight Vite landing page and implement the first screen in the approved reference-inspired style.

**Architecture:** Use a simple Vite vanilla setup with one rendering module that returns the hero markup and one stylesheet that defines the visual system. Test the generated markup and CTA structure with Vitest before final verification through build and browser preview.

**Tech Stack:** Vite, Vanilla JS, CSS, Vitest, jsdom

---

### Task 1: Project scaffold

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/styles.css`

**Step 1: Create the minimal Vite package metadata**

Define `dev`, `build`, `preview`, and `test` scripts.

**Step 2: Add test environment config**

Configure Vitest to run in `jsdom`.

**Step 3: Add the base HTML shell**

Mount the application into a single root node.

### Task 2: Hero regression test

**Files:**
- Create: `tests/hero.test.js`
- Create: `src/hero.js`

**Step 1: Write the failing test**

Assert that the hero renderer outputs:

- the start date label
- the main headline
- both section titles
- the gifts heading
- a CTA with `href="#"`
- a placeholder hook for the GetCourse popup integration

**Step 2: Run test to verify it fails**

Run `npm test -- --run`.

**Step 3: Implement the minimal renderer**

Return static semantic markup from `src/hero.js`.

**Step 4: Run test to verify it passes**

Run `npm test -- --run`.

### Task 3: Visual implementation

**Files:**
- Modify: `src/main.js`
- Modify: `src/styles.css`
- Modify: `src/hero.js`

**Step 1: Mount the hero into the page**

Render the markup into `#app`.

**Step 2: Add the design system**

Create CSS variables for palette, shadows, radii, spacing, and typography.

**Step 3: Style the hero**

Implement:

- background atmosphere
- bordered card
- two-column section grid
- gift strip
- CTA styling
- responsive breakpoints

**Step 4: Add a non-blocking GetCourse hook**

Expose the widget script URL and button hook without forcing an active popup flow yet.

### Task 4: Verification

**Files:**
- Verify: `tests/hero.test.js`
- Verify: `src/*`

**Step 1: Run tests**

Run `npm test -- --run`.

**Step 2: Run production build**

Run `npm run build`.

**Step 3: Preview in browser**

Open the local page and verify the first screen visually on desktop width.

Plan complete and saved to `docs/plans/2026-04-06-tirol-rsya-hero-implementation.md`.
