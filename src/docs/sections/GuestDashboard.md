# GuestDashboard Documentation

The `GuestDashboard.tsx` provides temporary, restricted access for individuals participating in virtual court proceedings without a permanent account.

## Features

### 1. Virtual Hearing Entrance
- **Access Code Verification**: Secure entry using temporary codes provided by the court.
- **Automated Admission**: Implements a simulation of the "Admission Waiting Room" with a **3-second automated delay**, after which participants are automatically admitted to the virtual session.
- **Simplified Guest Flow**: Guests are redirected directly to the `SebutanChat` experience upon admission for a seamless transition.

### 2. e-Sebutan Participation
- **Virtual Room Integration**: Hosts the [SebutanChat](file:///Users/fikriafif/Desktop/prototype-court/src/docs/components/SebutanChat.md) experience designed for virtual hearings.
- **Notice Display**: Shows relevant case details for the specific session the guest is attending.

## UI Characteristics
- **Minimalism**: Highly focused UI to minimize confusion for one-time users.
- **Emphasis**: Clear "Join" buttons and prominent case identification.

## Usage

```tsx
import { GuestDashboard } from '@/sections/GuestDashboard';

// Rendered for guest users attending e-Sebutan
<GuestDashboard />
```
