# AccessibilityPanel Component

This component renders the floating Accessibility (`A11y`) button and its corresponding slide-over panel.

## Features
- **WCAG Support**: Provides toggles for High Contrast, Text Spacing, Invert Colors, Gray Hues, Underline Links, Big Cursor, Reading Guide, Text-to-Speech, and Speech-to-Text.
- **Dynamic Resizing**: Allows users to increase or decrease the base text size of the application.
- **Persistence**: Interfaces with the global Zustand store to apply settings across the entire app.

## Technical Details
- **File**: `src/components/ui/AccessibilityPanel.tsx`
- **State**: Uses `useAppStore` to access and modify `wcagStates` and `textSize`.
- **Styling**: Utilizes Tailwind CSS with conditional classes based on accessibility settings.
