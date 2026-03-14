# SearchPage Section

The dedicated search results interface for the portal.

## Features
- **Live Filtering**: Updates results in real-time as the user types in the search bar.
- **Text Highlighting**: Dynamically wraps matching terms in `<mark>` tags for visibility.
- **Metadata Filters**: Sidebar options to filter by Category, Year, and Court.
- **Empty State**: Displays a friendly "No Results" illustration and message when no matches are found.

## Technical Details
- **File**: `src/sections/SearchPage.tsx`
- **Data**: Filtered from `mockSearchResults` in `src/lib/data.ts`.
- **State**: Tied to the global `searchQuery`.
