---
title: "Main Portal Entry"
description: "The root page component for the e-Court Public Portal."
components:
  - "/src/app/page.tsx"
---

# Main Portal Entry (page.tsx)

This is the main entry point for the public-facing portal. It orchestrates the various sections and handles the top-level view switching.

## View Switching Logic
Instead of complex routing for the initial prototype, this page uses a "Single Page App" approach within the portal domain:
- `portal` (Default): Shows Hero, E-Services, and Quick Links.
- `search`: Swaps the main content for the `SearchPage` section.
- `schedule`: Swaps for the `FullSchedule` view.
- `login`: Transition to the dedicated `LoginSection`.

## Responsive Container
Wraps all content in a `min-h-screen` container that correctly maintains spacing for the global `Navbar` and `Footer`.
