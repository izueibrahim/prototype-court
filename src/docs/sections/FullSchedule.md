---
title: "Full Schedule Section"
description: "A comprehensive calendar and search interface for court proceedings."
components:
  - "/src/sections/FullSchedule.tsx"
---

# Full Schedule Section

The Full Schedule section provides a deep-dive interface for tracking court hearings across all regions and courts.

## Key Features
- **Interactive Calendar:** A custom-built monthly calendar allowing users to select specific dates.
- **Region/Court Filters:** Hierarchical dropdowns to narrow down proceedings.
- **Semantic Search:** A search bar that filters the list based on claimant, respondent, or case ID.
- **Expanded Details:** Accordion-style cards that reveal hearing summaries and tags.

## Implementation Details
- **Logic:** Manages its own local state for calendar navigation (`calendarMonth`, `calendarYear`) while syncing with global state for search queries.
- **Visuals:** High-contrast support is fully implemented for accessibility (WCAG compliance).
