# Exercise 1 - Responsive Product Dashboard (Tailwind CSS)

Completed the responsive product dashboard assignment using React and Tailwind CSS. Here is a summary of the changes and implementation:

- Configured Tailwind CSS in the Vite React setup using `@tailwindcss/vite`.
- Defined design tokens inside `src/index.css` using the `@theme` directive (primary color, text colors, background colors, card spacing, and border radius).
- Removed the default `App.css` to ensure all styling is done exclusively through Tailwind utility classes without writing custom CSS selectors.
- Built reusable React components:
  - `Header`: contains the dashboard title and a header action button.
  - `Sidebar`: navigation menu that adapts responsively (horizontal bar on small screens and vertical sidebar on medium/large screens using Tailwind's `md:` breakpoint instead of JavaScript state).
  - `Button`: reusable button supporting hover, visible focus ring, and disabled state styling.
  - `ProductCard`: displays product image, name, category, price, stock status, and an action button.
- Structured the product grid to be fully responsive using Tailwind grid classes:
  - 1 column on small screens (`grid-cols-1`)
  - 2 columns on medium screens (`md:grid-cols-2`)
  - 3 columns on desktop / large screens (`lg:grid-cols-3`)
- Added state-based styling for buttons:
  - Hover effect (`hover:bg-primary-hover`)
  - Visible focus ring for accessibility (`focus:ring-2 focus:ring-primary focus:ring-offset-2`)
  - Disabled styling (`disabled:opacity-50 disabled:cursor-not-allowed`) for out-of-stock items.
- Added mock product data in `src/data/products.js` with categories, prices, images, and varying stock statuses to demonstrate both active and disabled buttons.
