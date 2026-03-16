---
title: "Dashboard Layout Wrapper"
description: "The main layout wrapper for the authenticated dashboard experiences."
components:
  - "/src/app/(dashboard)/layout.tsx"
  - "/src/components/dashboard/Sidebar.tsx"
  - "/src/components/dashboard/Header.tsx"
---

# Dashboard Layout

The `(dashboard)` route group introduces its own dedicated layout to fully isolate the authenticated/internal application UI from the public-facing e-Court portal framework. This fulfills the requirement of creating a distinct layout for logged-in users.

## Core Architecture

Instead of relying on conditional rendering within a monolithic `App` container like the original prototype, this architecture uses Next.js route groups:

```typescript
// src/app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden text-zinc-900">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 hoverflow-x-hidden overflow-y-auto bg-[#F8FAFC]">
          {children}
        </main>
      </div>
    </div>
  );
}
```

## Interaction with Routes

- **Sidebar Integration:** The injected `<Sidebar />` component dynamically reads `usePathname()` to determine whether to display the Internal Navigation or the eFiling navigation.
- **Guest Dashboard Exception:** Since the `/guest` virtual mention dashboard needs to hijack the entire screen context, both `Sidebar` and `Header` will deliberately return `null` if the route includes `/guest`.

## Styling
- Utilizes full viewport scaling (`h-screen overflow-hidden`).
- Neutral background canvas (`bg-[#F8FAFC]`) to contrast with the rich micro-elements present in the dashboard views.
