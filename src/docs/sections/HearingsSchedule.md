---
title: "Hearings Schedule"
description: "A filtered preview of upcoming court hearings."
components:
  - "/src/sections/HearingsSchedule.tsx"
---

# Hearings Schedule

This section provides a summarized list of upcoming hearings, often used as a preview on the main portal page.

## Core Features
- **Data Filtering:** Shows a subset of the `upcomingHearings` mock data.
- **Role-Based Styling:** Uses distinct colors and icons for different hearing types (e.g., Trial, Mention).
- **Navigation:** Links directly to the `FullSchedule` view for deeper filtering.

## Integration
Connected to `useAppStore` to handle language switching and high-contrast accessibility mode.
