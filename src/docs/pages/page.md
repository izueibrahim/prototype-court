# Home Page (`/`)

The main entry point assembler that manages view switching.

## Responsibility
- **View Routing**: Conditionally renders sections based on `currentView` (portal, login, schedule, search).
- **Global State Initialization**: Applies accessibility-related body classes (e.g., text underlining) via `useEffect`.
- **Structure**: Orchestrates the placement of the Navbar, Footer, and content sections.

## Technical Details
- **File**: `src/app/page.tsx`
- **Mode**: Uses `"use client"` for dynamic client-side rendering.
