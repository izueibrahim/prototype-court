# Sections Documentation

The `src/sections/` directory encapsulates high-level functional blocks (or sections) that make up the main public-facing landing page of the application. By isolating these sections, the `page.tsx` remains unbloated and each logical entity can manage its own local component state cleanly.

## 1. `HeroSection.tsx`

- **Purpose**: Showcases the main entry point to the web application.
- **Features**: Highly styled text rendering the localized hero title and subtitle, alongside an animated "Version 2.0 Live" pill. It also contains the main global search input styled with glassmorphism `backdrop-blur`.

## 2. `QuickLinksSection.tsx`

- **Purpose**: A fast-track horizontal scrollable carousel for common user actions.
- **Features**: Renders a mapped list of quick utility actions (e.g., "File a Document", "Check Schedule") complete with individual icons from `lucide-react`. Built using CSS scroll snap functionality (`snap-x snap-mandatory`).

## 3. `EServicesDirectory.tsx`

- **Purpose**: Explores the comprehensive suite of online judicial services.
- **Features**: Implements a categorized tab system (Public Access). Changes the active tab via local state `useState(0)` to dynamically render a horizontal carousel of mapped services imported from `lib/data.ts`.

## 4. `HearingsSchedule.tsx` (Hearings & Judgments Section)

- **Purpose**: Displays the daily proceeding schedules, the latest published awards, and the latest court notices. It serves as a dashboard portal entry point to the full comprehensive schedule.
- **Features**:
  - **Tab System**: Uses local state `homeListTab` ('hearings' | 'judgments') to toggle the displayed feed between upcoming proceedings (mocked `upcomingHearings`) and recent rulings (mocked `latestJudgments`).
  - **Expandable Details**: Clicking a row toggles `expandedId` to unveil detailed tags/keywords, a summary of the dispute, and action buttons like "Download PDF".
  - **Notices Sidebar**: A fixed right-column detailing the latest chronological court practice directions and notices.
  - **Navigation Hook**: Contains a direct call-to-action button that transitions the `currentView` to the comprehensive `schedule` view.

## 5. `LoginSection.tsx`

- **Purpose**: The Unified Login Gateway system substituting the main portal content upon SSO initialization.
- **Features**:
  - **Role Selection Engine**: Step 1 prompts users to select their persona (`Court Officer`, `eFiling User`, `Guest Access`). Tracking handled by the global `loginRole` state.
  - **Dynamic Forms**: Based on the selected persona, Step 2 dynamically renders distinct login forms (e.g., Guest Access requires a Case Ref & Access Code, while an Officer requires standard credentials).
  - **Integration Options**: Offers supplementary mock links for MyDigital ID rendering.

## 6. `FullSchedule.tsx`

- **Purpose**: Offers a comprehensive, standalone, filterable interface for querying Industrial Court proceeding schedules across Malaysia.
- **Features**:
  - **Dynamic Smart Calendar**: A custom-built calendar interface using `calendarMonth`, `calendarYear`, and `selectedDate` states. It algorithmically calculates days in the month and starting offsets, highlighting specific `daysWithHearings` with indicator dots.
  - **Responsive Layout**: On mobile, the calendar becomes a smooth horizontal snapping scroll. On desktop, it displays a standard 7-column grid layout.
  - **3-Step Filtering Engine**: Users filter data geographically. A localized `Region` selector dictating the available `Court` options in the secondary dropdown, leading the user to finally select a `Date` on the calendar.
  - **Feed rendering**: Filters the `upcomingHearings` mock data based on the selected criteria and implements the exact same expandable accordion UI as the `HearingsSchedule` component.
