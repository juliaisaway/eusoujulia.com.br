# Repository Guidelines

## Project Structure & Module Organization

This is a small static personal site with no framework or bundler. The main page is `index.html`. Editable page copy lives in `content/` as Markdown, with one file per language. Styles live in `styles/`: `style.scss` imports partials such as `_variables.scss`, `_layout.scss`, `_components.scss`, and `_themes.scss`, then compiles to `styles/style.css`. JavaScript is split by behavior in `scripts/`. Static media lives in `images/`.

## Build, Test, and Development Commands

- `npx sass styles/style.scss styles/style.css --style=compressed`: compile Sass for production.
- `npx sass styles/style.scss styles/style.css --watch`: compile Sass continuously while editing.
- `npm run dev`: serve the static site locally with Node at `http://localhost:8000`.

There is no package manifest or build pipeline. Avoid dependencies unless they clearly improve maintenance.

## Coding Style & Naming Conventions

Use semantic HTML and preserve accessibility attributes when editing markup. Use two-space indentation in HTML, SCSS, and JavaScript where practical. JavaScript should remain vanilla, wrapped in small focused modules or IIFEs, with `const`/`let` and descriptive camelCase names. Prefer kebab-case for CSS classes and file names.

## CSS Architecture

Always write source styles in SCSS, then compile to `styles/style.css`. Separate concerns into focused partials: tokens in `_variables.scss`, layout in `_layout.scss`, components in `_components.scss`, and themes in `_themes.scss`. Use existing variables and design tokens for colors, typography, sizes, and spacing; never place raw hex values directly in rules. Reuse the spacing tokens already defined in `_variables.scss`, and create new tokens only when absolutely necessary. Prefer nested SCSS selectors to keep related rules close and avoid repeated class declarations.

## Testing Guidelines

There is no automated test suite. Before submitting changes, manually verify `index.html` in a browser at desktop and mobile widths. Check light/dark theme switching, PT/EN language behavior, image loading, keyboard navigation, and console errors. For style changes, recompile Sass and confirm `styles/style.css` was updated.

## Commit & Pull Request Guidelines

Recent commits use short conventional-style prefixes, such as `fix: translation not working`, `style: new avatar`, and `refactor: modernização no site`. Follow `type: concise description`, using `fix`, `style`, `refactor`, `docs`, or `feat`. Pull requests should summarize the change, list manual checks, link related issues, and include screenshots when layout, theme, or responsive behavior changes.

## Agent-Specific Instructions

Keep the site intentionally simple: no framework, no bundler, and no library unless explicitly requested. Preserve the bilingual and accessible nature of the page. Do not overwrite compiled CSS without updating the matching SCSS source.
