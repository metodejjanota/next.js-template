# Next.js Template with Tailwind, ShadCN UI, TypeScript, and Themes

This is a Next.js template set up with Tailwind CSS, ShadCN UI, TypeScript, and a fully configured layout structure. It includes a page router, layout with navigation and footer, a global typography file, theme switch, and more. It also uses `turbopack` for fast builds and enhanced performance.

### Features and Setup

1. **Tailwind CSS**:
   - Tailwind is preconfigured, and the `globals.css` file contains the `@tailwind` directives to ensure the utility-first CSS is available.
2. **ShadCN UI**:

   - A custom UI library is integrated to provide ready-to-use, beautiful UI components for the app.

3. **TypeScript**:

   - Fully typed with TypeScript support across the project, including in the components, pages, and utility files.

4. **Layout Structure**:

   - The layout is composed of a header (navigation), footer, and a main content area. The layout structure is reusable across all pages.
   - The navigation is responsive and includes links to pages within your Next.js app.

5. **Themes and Theme Switch**:

   - The `themeSwitch.tsx` utility and `typography.tsx` component handle the global theme switching logic (e.g., light and dark mode).

6. **Turbopack**:

   - TurboPack is used to speed up the build and development process in Next.js.

7. **ESLint & Prettier**:
   - ESLint configuration is already set up for linting and Prettier for code formatting.

## Getting Started

1. **Install Dependencies**:

Make sure you have [PNPM](https://pnpm.io/) installed.

```bash
pnpm install
```

2. **Run Development Server**:
   After installation, start the development server:

```bash
pnpm dev
```

3. **_Open the Project_**:
   You can now access your project at [http://localhost:3000](http://localhost:3000).

4. Building for Production:
   When you're ready to build for production, run the following command:

```bash
pnpm build
```
