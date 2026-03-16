---
title: "Search Page"
description: "The global search results interface for finding cases and documents."
components:
  - "/src/sections/SearchPage.tsx"
---

# Search Page

The Search Page handles the display of results when a user performs a search from the Hero section.

## Features
- **Empty States:** Renders helpful illustrations when no results are found.
- **Mock Results:** Simulates a real-time search experience using dummy data including case statuses and file dates.
- **Action Buttons:** Allows users to "View Details" or "Track Case" directly from the results list.

## UX Design
- **Dismissible:** Users can easily return to the portal landing page using the back button or clearing the query.
- **Speed:** Relies on global state for instant filtering without server-side latency for the prototype phase.
