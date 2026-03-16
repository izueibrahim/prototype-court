---
title: "Login Gateway"
description: "The secure portal entry for different user roles."
components:
  - "/src/sections/LoginSection.tsx"
---

# Login Gateway

The Login Section is a multi-step authentication simulator.

## Step 1: Role Selection
Users choose between "Court Officer", "eFiling User", and "Guest Access". This updates the `loginRole` in the Zustand store.

## Step 2: Authentication Form
- **Officers/eFiling:** Standard ID and password fields.
- **Guest:** Case Reference and Access Code (Hearing PIN) fields.

## Redirection Logic
Upon successful "login" (simulated), the component uses `next/navigation` to route users:
- `/dashboard/internal` for Officers.
- `/dashboard/efiling` for eFiling users.
- `/dashboard/guest` for Guest attendees.

## Styling
Focuses on a dark, premium aesthetic with ambient glows, using `lucide-react` for role-distinguishing iconography.
