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

### 4. Virtual Hearing & E-Sebutan
- **Virtual Room Integration**: Hosts the `SebutanChat.tsx` component directly inside the dashboard.
- **Digital Display**: Live preview of the external courtroom digital display boards.

### 5. Notice Management
- **Digital Notice Board**: Manages internal and public announcements.
- **Form Layouts**: Standardized form styling. Administrative forms (e.g., "Add Notice", "Schedule New Hearing") contain their titles and primary actions inside the main card container for a consistent, structured experience.

### 6. Search & Discovery
- **Smart Award Search**: Integrated semantic search for historical awards and judgements.

## Navigation

Utilizes a sidebar-driven navigation system with clear section headings:
- **Dashboards**: Overview, Chairman, Analytics.
- **Core Operations**: Case Registration, Case Management, Schedule, Notice, Collective Agreement.
- **System Admin**: Integration, Usage, Settings.

### Navigation State Logic
The dashboard implements a **Navigation Reset** mechanism. When switching between main menu items in the sidebar, any active sub-views (such as a specific "Case Detail" or "Add Schedule" form) are automatically cleared. This ensures the user lands on the primary view of the new category, preventing state carry-over and visual clutter.

### Case Tracking (Steppers)
The **Case Management** section utilizes a standardized, dynamic stepper system:
- **Unified Styling**: Consistent `blue-600` theme for active and completed stages across list and detail views.
- **Progress Logic**: Synchronized stage indicators (Registration → Allocation → Mention → Hearing → Award).
- **Iconography**: Uses the `Check` icon for completed steps to provide clear visual feedback.

### Advanced Reporting Defaults
- **Default Period**: Reporting filters across Overview and Analytics now default to the year **2026** for immediate data visibility.
- **Data Standardization**: All year selectors use full 4-digit formats and pull from verified data sources (`lib/data.ts`).

## Usage

```tsx
import { InternalDashboard } from '@/sections/InternalDashboard';

// Automatically rendered for internal users after login
<InternalDashboard />
```

- **Theme**: Light, clean administrative interface (`bg-[#F8FAFC]`).
- **Components**: Heavy use of cards, tables, and custom chart components.
- **Consistency**: Aligns with the main portal branding for fonts and logo.
- **Layout Optimization**: Administrative forms (e.g., "Schedule New Hearing") utilize expanded widths (`max-w-4xl`) to maximize screen usage and reduce excessive whitespace.
