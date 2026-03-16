# GuestDashboard Documentation

The `GuestDashboard.tsx` provides temporary, restricted access for individuals participating in virtual court proceedings without a permanent account.

## Features

### 1. Virtual Hearing Entrance
- **Access Code Verification**: Secure entry using temporary codes provided by the court.
- **Check-in Process**: Simple workflow to verify identities before joining a session.

### 2. e-Sebutan Participation
- **Video Integration**: Interface elements designed to host or link to virtual hearing platforms.
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
