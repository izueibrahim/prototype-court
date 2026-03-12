# Components Documentation

This directory (`src/components/`) contains reusable, distinct generic UI components and application layout wrappers used throughout the Next.js eMP application.

## 1. `ui/AccessibilityPanel.tsx`
This component renders the floating Accessibility (`A11y`) button and its corresponding slide-over panel. 
- **State Management**: It interfaces heavily with `useAppStore()` (from `src/lib/store.ts`) to toggle and apply Web Content Accessibility Guidelines (WCAG) settings, including high contrast, text spacing, text size zooming, and custom reading guides.
- **Styling**: Utilizes dynamic Tailwind utility classes combined with custom states to modify the UI on the fly without enforcing page reloads.

## 2. `layout/Navbar.tsx`
The primary top navigation bar interface. 
- **Features**: Includes the top-level government banner, primary branding (eMP v2.0 logo), localized navigation links, language toggler (`EN`/`BM`), and the `SSO Login` button.
- **Responsiveness**: It encapsulates a mobile-friendly hamburger menu that conditionally renders based on the screen size and the user's interaction state.
- **State Integration**: Toggles between `portal` and `login` views via global state (`setCurrentView`).

## 3. `layout/Footer.tsx`
The application footer.
- **Features**: Distinct grid layout providing localized detailed contact information, quick links shortcuts, resource outbound links, privacy policy links, and copyright text.
- **Accessibility**: Listens to the `highContrast` state to appropriately recolor the dark theme default to a pure black and white distinct border theme for visibility.
