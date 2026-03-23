---
title: "Login Gateway"
description: "The secure portal entry for different user roles."
components:
  - "/src/sections/LoginSection.tsx"
---

# Login Gateway

The Login Section is a multi-step authentication simulator.

## Step 1: Authentication Method
Users can choose between:
- **Single Entry Point**: Traditional credentials-based login.
- **MyDigital ID / SSO**: Secure authentication via the National Digital Identity platform, featuring standardized branding and the official MyDigital ID logo.

## Step 2: Role Selection (Prototype Demo)
In the prototype, users can simulate logins for various roles to test the different dashboard experiences:
- **YDP / Executive**: Strategic oversight and allocation.
- **Registrar**: Case registration and management.
- **Chairman**: Judicial workspace and hearings.
- **Admin**: System integration and logs.
- **eFiling**: Document submission for parties.
- **Guest**: Virtual hearing attendance.

## Step 3: Redirection
Upon successful authentication, the system routes users to their respective dashboards:
- `src/sections/InternalDashboard.tsx` (Internal staff)
- `src/sections/EFilingDashboard.tsx` (External users)
- `src/sections/GuestDashboard.tsx` (Temporary guests)

## Styling
Focuses on a clean, professional aesthetic in Light Mode, utilizing `lucide-react` for security-related iconography and the official **MyDigital ID asset** for SSO authentication.
