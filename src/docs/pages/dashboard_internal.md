---
title: "Internal Dashboard Page"
description: "The primary internal workspace for Court Officers, Chairmen, and Admins."
components:
  - "/src/app/(dashboard)/dashboard/internal/page.tsx"
---

# Internal Dashboard Page

This page serves as the entry point for all Internal-role users. It dynamically switches between multiple granular view sub-components based on global state tracking.

## Sub-Views Handled

- `OverviewView` - Generates high-level statistical analysis of active cases.
- `ChairmanView` - Renders the daily docket specific to the current judge/chairman.
- `RegistrationView` - Manages manual filing queues.
- `IntegrationView` - Real-time metrics of JPPM and MyDigital ID syncs.
- `NoticeView`, `CollectiveView`, etc.

## State Management Approach

While modern Next.js might lean heavily toward distinct URL paths for everything, the requested monolithic migration requires retaining the `dashActiveView` paradigm governed by Zustand block level rendering:

```typescript
  const renderView = () => {
    switch (dashActiveView) {
      case 'chairman': return <ChairmanView lang={currentLang} />;
      // ...
    }
  };
```

This ensures lightning-fast tab-switching across internal tools without full routing lifecycles, accurately reflecting the monolithic prototype's behavior.
