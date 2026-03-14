# Pages & Routing Documentation

The `src/app/` directory utilizes the standard Next.js 13+ App Router syntax to define layouts, styling, metadata, and pages.

## 1. `layout.tsx`

The foundational Root Layout for the application.

- **Purpose**: It applies the `html` and `body` tags wrapping the entire React component tree.
- **Metadata**: Pre-configures the static SEO metadata `title` and `description` headers.
- **Assets**: Directly imports `globals.css` ensuring Tailwind CSS initialization and CSS baseline variables exist uniformly across all rendered routes.

## 2. `page.tsx`

The primary client-side assembler. Being marked entirely with `"use client"`, it dynamically dictates what large structural blocks are shown to the user on the home URL `/`.

- **Purpose**: Assembles `AccessibilityPanel`, `Navbar`, `Footer`, `HeroSection`, `QuickLinksSection`, `EServicesDirectory`, `HearingsSchedule`, and `LoginSection`.
- **Core Logic**: Operates a master ternary operator evaluating the `currentView` Zustand state ('portal' | 'login' | 'schedule').
  - If `currentView === 'login'`, it unmounts the Navbar, Footer, and content sections, dropping the user immediately into the full-screen `LoginSection`.
  - If `currentView === 'schedule'`, it mounts the Navbar and Footer, sandwiching the dedicated **Full Schedule Page**.
  - Else, it displays the standard `portal` layout.
- **Side Effects**: Sets up a `useEffect` initialization block to conditionally inject `<body className="...">` strings required for high-level accessibility manipulation (specifically text underlining and reading guide lines).

## 3. `globals.css`

- **Purpose**: Serves as the Tailwind CSS v4 entry point (`@import "tailwindcss"`).
- **Customizations**: Contains cross-browser CSS overrides like `.hide-scrollbar` and accessibility root rules (`.a11y-reading-guide`). Extends the core theme to map global variables such as the default `--font-sans`.
