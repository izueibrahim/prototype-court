---
title: "Dashboard Sidebar Component"
description: "The primary vertical navigation interface for authenticated users."
components:
  - "/src/components/dashboard/Sidebar.tsx"
---

# Sidebar Component

The modular Sidebar intercepts the Next.js `usePathname` hook to determine exactly which navigation tree to render.

## State Integrations
- Connects directly to `useAppStore()` picking up `loginRole` to display dynamic titles like "YDP" vs "Chairman" or "Registrar".
- Highlights active routes by referencing `dashActiveView`, eliminating the need for complex Next.js nested active route matching for this monolithic step.

## Conditional Rendering Logic
1. `pathname.includes('/guest')` -> Returns `null`.
2. `pathname.includes('/efiling')` -> Returns indigo-themed external workspace sidebar.
3. Fallback (Internal/Officer) -> Returns dark theme internal system navigation with the full suite of Teras and Admin panels.
