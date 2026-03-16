# CaseDetailsSection Documentation

The `CaseDetailsSection.tsx` component is a modernized, premium interface designed for viewing comprehensive case information in the Industrial Court management system. It emphasizes a clinical, professional aesthetic with high-end Tailwind CSS styling.

## Features

### 1. Premium Header
- **Background**: Utilizes a deep zinc background (`bg-zinc-950`) with subtle radial gradients for depth.
- **Breadcrumbs**: Integrated navigation path for easy context within the system.
- **Case Title**: Large, bold typography for immediate identification of the parties involved.

### 2. Information Grid
- **Glassmorphism**: Cards use `bg-white/5` with backdrop-blur for a modern "glass" effect.
- **Icons**: Each data point (Case Number, Stage, Classification, Status) is accompanied by a Lucide icon (`AlertCircle`, `Shield`, `Gavel`, `CheckCircle2`).
- **Dynamic Data**: Fetches and displays data from the active case in the `useAppStore`.

### 3. Verification & Documents
- **Verification Badges**: Documents feature "Verified" badges with checkmarks to indicate filing validity.
- **Table Design**: A "ghost" style table with wide tracking and bold uppercase headers for a premium feel.

### 4. Interactive Document Viewer
- **Mock PDF Viewer**: A stylized container that simulates a high-end document reader with standardized toolbar colors and iconography.
- **Visual Feedback**: Hover states and refined borders to indicate interactivity.

### 5. Historical Timeline
- **Sidebar Integration**: The timeline is moved to a sidebar for clear separation of concerns.
- **Elegant Indicators**: Pulsating rings for the active state and double-border circles for past events.

## Usage

```tsx
import { CaseDetailsSection } from '@/sections/CaseDetailsSection';

// Used within the Case Management flow
<CaseDetailsSection />
```

## Styling Tokens (Tailwind)
- **Container**: `shadow-premium`, `rounded-[32px]`, `border-zinc-800/50`
- **Typography**: `tracking-widest`, `font-extrabold`, `leading-tight`
- **Colors**: `text-blue-500`, `bg-zinc-950`, `text-emerald-500` (success states)
