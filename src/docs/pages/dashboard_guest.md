---
title: "Guest / Virtual Dashboard Page"
description: "A full-screen, focused interface for virtual hearings and mentions."
components:
  - "/src/app/(dashboard)/dashboard/guest/page.tsx"
---

# Guest / Virtual Court Page

Used purely for the "e-Sebutan" remote mention feature where claimants or respondents can attend virtual hearings.

## Styling Quirks

To overcome the inherited padded `main` tags in `src/app/(dashboard)/layout.tsx`, this route enforces a CSS override hack using standard Tailwind:

```css
className="flex h-screen w-full bg-[#050505] text-white fixed inset-0 z-50 overflow-hidden"
```

The `fixed inset-0 z-50` ensures that the standard Dashboard Sidebar and Header (which return `null` on this path anyway) and their empty padding containers are entirely covered by this interface. This creates a deeply focused, distraction-free environment conducive to a professional virtual court experience.
