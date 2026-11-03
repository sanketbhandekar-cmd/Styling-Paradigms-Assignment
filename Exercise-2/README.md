# Exercise 2 - Type-Safe Component Library (Vanilla Extract)

Completed the type-safe component library assignment using React, TypeScript, and Vanilla Extract. Here is a summary of the implementation:

- Configured Vanilla Extract in the Vite setup using `@vanilla-extract/vite-plugin` and `@vanilla-extract/css`.
- Defined a small set of shared design tokens in `src/styles/theme.css.ts` using `createTheme` (colors, spacing, typography, and border radius) to be used consistently across all components.
- Kept styling definitions in dedicated `.css.ts` files separate from component markup (`.tsx`).
- Created reusable components:
  - `Button`:
    - Base styles composed with variants using `styleVariants`
    - Supported variants: `primary`, `secondary`, and `danger`
    - Supported sizes: `small` and `large`
    - Includes interaction states for hover, visible focus ring (`:focus-visible`), and disabled state (`:disabled` with reduced opacity and not-allowed cursor).
  - `Card`:
    - Base styling with background, border radius, border, and shadow from theme tokens
    - Consistent spacing and responsive padding using build-time `@media` queries.
  - `Badge`:
    - Supported variants: `success`, `warning`, and `error`
    - Composed with base pill styles and theme token colors.
- Demonstrated responsive styling:
  - Card padding adjusts for mobile screens (`<= 600px`).
  - Card grid adapts from 1 column on mobile to 3 columns on larger screens using CSS media queries.
- Verified build-time CSS generation:
  - Running `npm run build` extracts all styles into static CSS (`dist/assets/*.css`) with zero runtime styling overhead in the browser.
