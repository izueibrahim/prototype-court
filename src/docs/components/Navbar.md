# Navbar Component

The primary top navigation bar interface for the eMP v2.0 application.

## Features
- **Branding**: Displays the Jata Negara logo and the bilingual "Mahkamah Perusahaan Malaysia" / "Industrial Court of Malaysia" title.
- **Navigation**: Supports single-page navigation via `setCurrentView` and anchor links for sections.
- **Language Switcher**: Allows users to toggle between English (`EN`) and Malay (`BM`).
- **SSO Login**: Provides a gateway to the login section.
- **Logo Navigation**: The logo and title are clickable and return the user to the portal view.

## Technical Details
- **File**: `src/components/layout/Navbar.tsx`
- **Mobile Support**: Includes a responsive hamburger menu for smaller screens.
- **Theme Support**: Adapts colors when High Contrast mode is active.
