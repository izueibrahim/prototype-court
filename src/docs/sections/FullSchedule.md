# FullSchedule Section

A standalone, filterable interface for querying Industrial Court proceeding schedules across Malaysia.

## Features
- **Dynamic Calendar**: A custom-built calendar highlighting days with scheduled hearings.
- **Geographic Filtering**: Filter proceedings by Region (e.g., Kuala Lumpur, Selangor) and specific Court numbers.
- **Isolated Search**: Includes a local search bar that filters the schedule results without affecting the main portal search.
- **Responsive Calendar**: Transforms from a grid on desktop to a horizontal scrollable strip on mobile.

## Technical Details
- **File**: `src/sections/FullSchedule.tsx`
- **Search Isolation**: Uses `scheduleSearchQuery` from the store to ensure it doesn't conflict with global search.
- **Mock Integration**: Uses `upcomingHearings` and `courtLocations` from `src/lib/data.ts`.
