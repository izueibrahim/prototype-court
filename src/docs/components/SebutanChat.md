# SebutanChat Documentation

The `SebutanChat` component (`src/components/sebutan/SebutanChat.tsx`) is a comprehensive UI module handling the "E-Sebutan" (Virtual Mention) room experience. It is designed to act as a standalone workspace or be embedded within other dashboards (like `InternalDashboard` or `GuestDashboard`).

## Features

### 1. Role-Based States
The component adapts its initial state and capabilities based on the user's role:
- **Moderator/Admin (Chairman, Registrar, Admin, YDP)**: Immediately enters the full session view with controls to admit guests and manage the room.
- **Guest (Claimant, Respondent, Representative)**: Starts in a 'Chat' waiting state or progresses through session selection and access code verification.

### 2. Multi-Stage Entry Flow
- **Session Selection (`select`)**: Users choose from available active or upcoming sessions.
- **Security Verification (`code`)**: Requires a 4-digit PIN for access.
- **Waiting Room (`waiting`)**: A simulated holding area showing queue position and pending admission status. Non-admins are automatically admitted after a short delay in the current implementation.

### 3. Virtual Room Interface (`chat` / `moderator`)
The main interface consists of several responsive panels:
- **Participant Video Grid**: Displays all attendees (Chairman, Registrar, Claimants, Respondents) with role badges, online status indicators, and microphone controls. It uses adaptive layouts to maximize space.
- **Interactive Sidebars**: 
    - **Chat**: Real-time messaging tailored to specific roles (`bg-blue-600` for user, `bg-slate-900` for Chairman, etc.).
    - **Participants**: Detailed list of attendees and their connection status.
    - **Documents**: Quick access to case-related files and exhibits.
- **Dynamic Control Panel**: A floating action bar at the bottom containing audio/video toggles, sidebar toggles, and session exit controls. 
    - *Layout Intelligence*: The control panel dynamically offsets (`lg:right-[400px]`) when a sidebar is open to remain centered relative to the participant grid.

## Responsiveness & Styling

- **Mobile First**: Features mobile-optimized control panels and collapsible sidebars.
- **Theming**: Employs an aggressive dark/light contrast paradigm, using deep indigos/slates for authority figures (Chairman) and brighter colors for actions.
- **Animations**: Extensive use of simple CSS transitions (`transition-all duration-700`) for fluid sidebar toggles and panel shifting.

## Usage

```tsx
import SebutanChat from '@/components/sebutan/SebutanChat';

// Simply embed the component; it manages its own state via the global store
<SebutanChat />
```
