# EFilingDashboard Documentation

The `EFilingDashboard.tsx` is designed for external legal practitioners, employers, and employees to interact with the court digitally. It streamlines the process of filing documents and tracking case progress.

## Features

### 1. Case Tracking
- **My Cases**: A list view of all cases associated with the logged-in user.
- **Status Indicators**: Real-time status updates (e.g., Hearing, Trial, Mention).

### 2. Document Filing
- **New Filing Flow**: A step-by-step wizard for submitting new applications or responding to existing ones.
- **Document History**: A repository of all submitted documents with verification status.

### 3. Hearing Management
- **Court Calendar**: Personalized view of upcoming hearing dates and court locations.
- **Virtual Court Integration**: Direct access to the [SebutanChat](file:///Users/fikriafif/Desktop/prototype-court/src/docs/components/SebutanChat.md) virtual hearing rooms for remote proceedings.

## UI Characteristics
- **Style**: Professional, user-friendly interface with an emphasis on accessibility.
- **Layout**: Simplified sidebar with focus on 'Cases', 'New Filing', and 'Downloads'.

## Usage

```tsx
import { EFilingDashboard } from '@/sections/EFilingDashboard';

// Rendered for e-Filing users (Lawyers, Claimants, Respondents)
<EFilingDashboard />
```
