# InternalDashboard Documentation

The `InternalDashboard.tsx` is the primary workspace for Industrial Court staff, including the YDP, Chairmen, Registrars, and Administrators. It provides a centralized hub for case registration, allocation, and analytics.

## Features

### 1. Role-Based Views
The component dynamically adjusts its UI based on the user's role:
- **YDP / Executive**: Focuses on high-level analytics, workload distribution, and case allocation.
- **Chairman (Judge)**: Focuses on hearing schedules, notes, and judgment drafting.
- **Registrar / Officer**: Focuses on case registration, filing review, and notice management.
- **System Admin**: Focuses on logs, integration status, and system settings.

### 2. Advanced Analytics (Award Analytics)
Contains complex visualizations derived from historical data:
- **Case Trends**: Line charts showing registration vs. resolution rates.
- **Type Distribution**: Bar and pie charts for various dispute categories (Unfair Dismissal, CA, etc.).
- **Workload Management**: Visual indicators for chairman caseloads.

### 3. Case Registration & Allocation
- **JPPM Sync**: Integration tool to fetch new filings from the JPPM system.
- **Allocation Panel**: Interface for the YDP to assign cases based on system recommendations.

### 4. Search & Discovery
- **Smart Award Search**: Integrated semantic search for historical awards and judgments.

## Navigation

Utilizes a sidebar-driven navigation system with clear section headings:
- **Dashboards**: Overview, Chairman, Analytics.
- **Core Operations**: Case Registration, Case Management, Schedule, Notice, Collective Agreement.
- **System Admin**: Integration, Usage, Settings.

## Usage

```tsx
import { InternalDashboard } from '@/sections/InternalDashboard';

// Automatically rendered for internal users after login
<InternalDashboard />
```

## UI Characteristics
- **Theme**: Light, clean administrative interface (`bg-[#F8FAFC]`).
- **Components**: Heavy use of cards, tables, and custom chart components.
- **Consistency**: Aligns with the main portal branding for fonts and logo.
