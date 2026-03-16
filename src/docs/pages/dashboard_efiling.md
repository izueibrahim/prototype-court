---
title: "eFiling Dashboard Page"
description: "The primary workspace for External Users such as legal representatives or employers."
components:
  - "/src/app/(dashboard)/dashboard/efiling/page.tsx"
---

# eFiling Dashboard Page

This page is designed specifically for public or external users submitting documentation for Case Management or Collective Agreements. 

## Architectural Nuances
Unlike the Internal dashboard which possesses a massive array of modular views, the eFiling prototype focuses purely on core user tasks:
- Tracking submitted cases.
- Replying to tribunal directions.
- Submitting new files.

## Routing Isolation
Because `Sidebar.tsx` and `Header.tsx` read `usePathname()`, navigating to this page automatically changes the sidebar to the sleek, indigo-themed 'External Workspace' navigation without requiring additional prop drilling.
