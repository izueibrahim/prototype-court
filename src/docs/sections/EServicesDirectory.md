---
title: "E-Services Directory"
description: "A horizontal scrolling directory of all digital court services."
components:
  - "/src/sections/EServicesDirectory.tsx"
---

# E-Services Directory

This section provides a categorised list of digital services available to users, featuring a smooth horizontal scroll interface.

## Functionality
- **Horizontal Scroll:** Uses CSS `overflow-x-auto` with a hidden scrollbar for a touch-friendly experience.
- **Interactive Cards:** Each card is an interactive element using `useAppStore` to navigate users or open external links.
- **Responsive Layout:** Adjusts from a simple list to a multi-column scrolling container based on screen width.

## Data Structure
Services are mapped from a local constant `services`, defined within the component for clarity, with icons provided by `lucide-react`.
