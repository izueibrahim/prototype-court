# Industrial Court of Malaysia (MPM) - Design System

This design system defines the conventions, typography, sizing, spacing, and animations heavily utilized on the "Home" page components (HeroSection, PromoBannerSection, e-Services, Hearings & Features). Adhering to these conventions maintains our premium, highly usable, and modern aesthetic.

---

## 1. Typography
We stick to high-contrast modern typography. 

- **Headings (H1/H2)**: Extremely bold. Use `font-black` and tight tracking (`tracking-tight` or `tracking-tighter`).  
  *Examples*: `text-h1 sm:text-[56px] font-black tracking-tight leading-none`
- **Subheadings & Text**: Use `text-body-lg` or `text-body-sm` with `font-medium` for readability. Let contrast guide you.
- **Labels / Badges / Supertitles**: Highly tracked and capitalized for emphasis. 
  *Examples*: `text-[10px] font-black uppercase tracking-widest` (or `tracking-[0.2em]`).

## 2. Spacing & Padding
Generous whitespace is critical for the premium feel.

- **Main Container**: Always constrain and center content optimally: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Vertical Padding**: Use standard, large gaps between major sections: `py-20 sm:py-28`.
- **Card Padding**: Inner padding for distinct blocks or cards should be `p-8 sm:p-10`.

## 3. Radii & Shapes
We use excessively rounded corners to create a softer, more approachable interface that balances the serious institutional subject matter.

- **Large Hero / Main Cards**: `rounded-[2.5rem]` (40px) or `rounded-3xl`
- **Medium Elements / Buttons**: `rounded-2xl` or `rounded-xl`
- **Tags, Small Ciphers & Icons**: `rounded-full`

## 4. Button & Interactive Styling

### Standard Primary Button
```tsx
className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
```
### Standard Secondary Button
```tsx
className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
```

## 5. High Contrast Constraints (A11y)
All components must support the `isHighContrast` mode strictly by stripping out subtle backgrounds/shadows and returning to strict monochrome.
- **Normal**: `bg-white border-slate-200 shadow-sm`
- **High Contrast**: `bg-black border-2 border-white text-white`

## 6. Animations and Micro-interactions
The UI should feel tactile and "alive".

- **Card Hover Status**: `transition-all duration-500 hover:-translate-y-1 hover:shadow-xl` (or `shadow-2xl` for premium elements). Use group modifiers.
- **Icon Hover Status**: Apply `group-hover:scale-110` or a very subtle `group-hover:rotate-12` coupled with `transition-all duration-700`.
- **Decorative Backgrounds**: For the premium look inside cards, deploy absolute blurred backgrounds that bleed out on hover:
  ```tsx
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  ```
