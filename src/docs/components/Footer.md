# Footer Component

The application footer providing site-wide information and secondary navigation.

## Features
- **Bilingual Branding**: Consistent with the Navbar, it displays the court's name in both Malay and English.
- **Quick Links**: Direct links to important sections and external resources.
- **Contact Info**: Displays address, phone, and email details.
- **Logo Navigation**: The footer logo is also clickable and returns the user to the home view.

## Technical Details
- **File**: `src/components/layout/Footer.tsx`
- **Grid Layout**: Uses a responsive grid that stacks on mobile and expands to multiple columns on desktop.
- **Accessibility**: Listens to the `highContrast` state to adjust color visibility.
