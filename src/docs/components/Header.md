---
title: "Dashboard Header Component"
description: "The global top bar for authenticated users."
components:
  - "/src/components/dashboard/Header.tsx"
---

# Header Component

The Header spans the top of the main content area in the Dashboard (`layout.tsx`).

## Dynamic Titles
It actively checks the `dashActiveView` state variables and outputs localized page names directly from the `i18n.ts` store.

```typescript
const { dashActiveView, lang } = useAppStore();
const currentLang = t[lang];

// Dynamically sets the <h1> tag based on the view
{dashActiveView === 'overview' ? currentLang.dashOverview : ...}
```

## Language Switching
It houses the simplified bilingual toggle button that is prevalent throughout the e-Court prototype system, updating the global translation context instantly without a hard refresh.
