# HearingsSchedule Section

Displays daily proceeding schedules, latest awards, and court notices on the main portal.

## Features
- **Dual Feed**: Toggles between "Upcoming Hearings" and "Latest Judgments".
- **Expandable Rows**: Clicking a record expands to show a summary, tags, and download options.
- **Notices Sidebar**: Displays recent practice directions and announcements.
- **Navigation**: Direct link to the "Full Court Schedule" page.

## Technical Details
- **File**: `src/sections/HearingsSchedule.tsx`
- **State**: Manages `homeListTab` for feed switching and `expandedId` for accordion behavior.
