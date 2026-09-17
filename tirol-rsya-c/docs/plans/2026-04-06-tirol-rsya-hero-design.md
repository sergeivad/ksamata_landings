# Tirol RSYA Hero Design

**Date:** 2026-04-06

**Goal:** Build the first screen of a landing page that follows the user's content scheme while inheriting the soft editorial visual language of the provided Tilda reference.

## Approved Direction

Use a hybrid approach:

- Preserve the user's requested structure: start date, dominant headline, two explanatory columns, a gift block, and one CTA.
- Reinterpret that structure using the reference style instead of a literal black-and-white table.
- Keep the screen suitable for expansion into a 5-6 section landing page.

## Visual Language

- Typography: `Jost` for headlines and labels, `Roboto` for body copy.
- Palette: warm milk background, white central card, muted wine/plum text accents, peach-pink decorative gradients, soft olive secondary accents.
- Mood: feminine, calm, premium, non-medical-looking.
- Composition: a large central bordered card placed on a soft atmospheric background with blurred color fields and floral accents.

## First Screen Structure

1. Intro label with the course start date.
2. Main headline spanning the full card width.
3. Two-column grid:
   - left: "Какие условия?"
   - right: "Что делать?"
4. Bottom strip with gifts and CTA.
5. CTA styled as the final focal point and prepared for later GetCourse popup hookup.

## Interaction Notes

- The CTA uses `href="#"` for now as requested.
- The layout should expose a stable hook for the GetCourse widget script so the popup can be wired in later without redesigning the button.
- Subtle reveal animations are acceptable, but the first screen must remain readable without JavaScript.

## Responsive Notes

- Desktop: strong card composition with clear section dividers.
- Tablet: columns remain readable with reduced spacing.
- Mobile: the card stacks vertically, preserving hierarchy and button prominence.
