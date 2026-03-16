---
title: "Hero Section"
description: "The primary landing module for the e-Court portal."
components:
  - "/src/sections/HeroSection.tsx"
---

# Hero Section

The Hero Section is the first entry point for users visiting the e-Court portal. It utilizes a high-impact design to establish trust and technological modernization.

## Design Features
- **Glassmorphism:** Uses `backdrop-blur-xl` and semi-transparent backgrounds.
- **Dynamic Background:** Ambient animated blobs to create visual depth.
- **Search Integration:** Prominent search bar that triggers the global `SearchPage` view via Zustand `setCurrentView`.

## State Hooks
- `lang`: Determines the bilingual text output (EN/MS).
- `setCurrentView`: Used to transition from the landing state to specific service areas like 'Search'.
