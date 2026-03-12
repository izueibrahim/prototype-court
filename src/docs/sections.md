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

## 4. `HearingsSchedule.tsx`
- **Purpose**: Displays the daily proceeding schedules and latest court notices.
- **Features**: 
  - **View Toggle**: Lets users toggle between a `list` view and a `grid` view using local state.
  - **Expandable Accordions**: Tracks the `expandedId` to unveil supplementary summaries and keywords for a selected court hearing block.
  - **Notices Sidebar**: Fixes a vertical column detailing the latest chronological court notices on desktop.

## 5. `LoginSection.tsx`
- **Purpose**: The Unified Login Gateway system substituting the main portal content upon SSO initialization.
- **Features**: 
  - **Role Selection Engine**: Step 1 prompts users to select their persona (`Court Officer`, `eFiling User`, `Guest Access`). Tracking handled by the global `loginRole` state.
  - **Dynamic Forms**: Based on the selected persona, Step 2 dynamically renders distinct login forms (e.g., Guest Access requires a Case Ref & Access Code, while an Officer requires standard credentials).
  - **Integration Options**: Offers supplementary mock links for MyDigital ID rendering.
