# MPM Frontend App - Developer Guide

Welcome to the Industrial Court of Malaysia (MPM) Frontend Repository.

This project is built using:
- **Next.js** (App Router)
- **React** 
- **Tailwind CSS**
- **Lucide Icons**
- **Zustand** (Global App State Management)

## Overview & Architecture

- **`src/app/`**: Contains the Next.js layouts, pages, and routing structures.
- **`src/sections/`**: Modular, self-contained sections of standard pages (e.g., `HeroSection.tsx`, `AboutPage.tsx`, `EServicesDirectory.tsx`). We group major complex visual blocks here instead of writing extremely long, cluttered page files.
- **`src/lib/`**: Helpers, Zustand state stores, and I18n configs.
- **`DESIGN_SYSTEM.md`**: Global reference for standard class definitions, spacing rules, colors, and interactive behaviors. **Please read this before modifying UI!**

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` with your browser to see the result.

## Development Rules & Best Practices

### 1. Modularity & Imports
When building a new page or modifying an existing complex one, break discrete features into files inside `src/sections/`. Keep components pure and maintainable. Use `lucide-react` for all iconography unless explicitly provided custom SVGs.

### 2. State & Store
We use `useAppStore` heavily for handling standard user states like language toggling (`lang:` 'en' | 'ms'), accessibility rules (`wcagStates`), and simple navigation (`setCurrentView`). Do not reach for React Context unless completely disconnected from these core stores.

### 3. Styling & the Design System
We rely strongly on utility-first Tailwind classes. Refer to `DESIGN_SYSTEM.md` for our standardized approach to:
- Sizing large `max-w-7xl` containers.
- Padding major elements consistently with `py-20 sm:py-28`.
- Writing accessible, `isHighContrast` compliant class toggles.

Before pushing any new standard UI card or button, confirm it mirrors the premium transitions (`transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`) and uses the standardized radii (`rounded-[2.5rem]`).

---
Please respect the accessibility constraints, ensuring all interfaces seamlessly handle localized string translation and high contrast mode via the Zustand store properties.
