# LoginSection Section

The unified login gateway for the Industrial Court of Malaysia.

## Features
- **Persona-Based Login**: Distinct flows for Court Officers, eFiling Users, and Guest Access.
- **Dynamic Forms**: Renders different input fields based on the selected role (e.g., Case Ref for Guests, Credentials for Officers).
- **MyDigital ID**: Integration placeholder for national digital identity login.

## Technical Details
- **File**: `src/sections/LoginSection.tsx`
- **Store Sync**: Updates `loginRole` in the Zustand store upon selection.
