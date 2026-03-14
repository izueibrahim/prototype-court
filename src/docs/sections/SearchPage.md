# SearchPage Section

The `SearchPage` is a dedicated interface for exploring the deep archival and active records of the Industrial Court. It provides a real-time, responsive experience with localized technical filtering.

## Functional Pipeline
The search engine follows a three-step processing pipeline:

```mermaid
graph LR
    Query[Global searchQuery] --> Filter[Filter Logic]
    Filter --> Highlighting[Regex Text Wrapping]
    Highlighting --> Render[Grid Display]
```

## Technical Specifications

### 1. Real-time Filtering
The filtering happens instantly as the `searchQuery` store variable updates. It checks across multiple fields:
- Title (Claimant vs Respondent)
- Case ID / Reference
- Summary Text
- Metadata Keywords

### 2. Dynamic Text Highlighting
The component uses a custom `highlightText` function to provide visual feedback for matches.
- **Logic**: It creates a case-insensitive `RegExp` from the query and splits the target text.
- **Visuals**: Matches are wrapped in a `<mark>` tag.
- **A11y**: In High Contrast mode, the highlight swaps from a blue tint to a solid black/white bold background.

```tsx
const regex = new RegExp(`(${highlight})`, 'gi');
const parts = text.split(regex);
// Wrapped match: <mark className="...">part</mark>
```

### 3. Search Isolation
This page exclusively reacts to the `searchQuery` state. Actions performed in the `FullSchedule` view do **not** affect this page, and vice-versa, preventing "search crosstalk" in the user experience.

## UI Modules

### Sidebar Filters
Provides secondary refining options:
- **Categories**: Allows filtering by Award, Case, or Practice Note.
- **Temporal**: Filter by specific year of proceeding.
- **Jurisdiction**: Filter by specific court location.

### Empty State Illustration
When no results are found, the page renders a friendly "No Results" state using the `FileSearch` icon and localized guidance text to encourage the user to try different keywords.

## Styling & Performance
- **Responsiveness**: The sidebar is hidden on mobile devices in favor of the main feed to maximize screen real estate.
- **Cards**: Each search result card is a complex flex container that organizes metadata (Date, Court, Type) alongside the highlighted summary.
