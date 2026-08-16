# Repository Guidance

## Project overview

This repository contains Rohit Kisto's single-page developer portfolio. The
frontend is a React 19 and strict TypeScript application built with Vite and
Tailwind CSS. Netlify serves the production build and hosts the contact-form
function, which sends email through Resend.

These instructions apply to the entire repository.

## Development workflow

- Use Node.js 24 and npm. The CI workflow installs dependencies with `npm ci`.
- Use `npm run dev` for the Vite development server.
- Use `npm run preview` to build and preview the production bundle.
- Do not edit generated content in `dist/`, `.netlify/`, or `node_modules/`.
- Never read, print, commit, or replace values from `.env` unless the user
  explicitly requests an environment configuration change.
- Do not add or upgrade dependencies unless they are necessary for the task.

## Source map

- `src/app.tsx` defines the page composition.
- `src/sections/` contains the major page sections.
- `src/components/` contains shared portfolio components.
- `src/components/icons/index.tsx` contains inline SVG technology icons.
- `src/components/ui/` contains reusable Shadcn/Radix UI primitives.
- `src/data/projects.ts` is the source of truth for portfolio project cards.
- `src/types/project.ts` defines project and gallery image shapes.
- `src/util/icons.ts` maps technology keys to SVG icon components.
- `src/context/theme-provider.tsx` owns theme state and persistence.
- `src/styles/tailwind.css` contains global tokens and theme variables.
- `public/projects/<slug>/` contains project gallery assets.
- `netlify/functions/contact.ts` validates and sends contact-form submissions.

## Implementation conventions

- Keep TypeScript strict. Avoid `any`, unsafe casts, unused declarations, and
  non-null assertions unless the invariant is clear and local.
- Use functional React components and hooks. Keep state close to the component
  that owns it.
- Use the `@/` path alias for imports from `src/` and use `import type` for
  type-only imports.
- Follow the existing naming scheme: kebab-case filenames, PascalCase React
  components, and camelCase variables and functions.
- Reuse components from `src/components/ui/` and the `cn` helper before adding
  duplicate UI abstractions.
- Prefer Tailwind utilities and existing semantic color tokens such as
  `background`, `foreground`, `card`, `muted`, and `border`. Preserve both light
  and dark themes when changing visual styles.
- Keep the inline theme bootstrap in `index.html` consistent with
  `ThemeProvider`, including the `theme` storage key and `dark` root class.
- Preserve accessible names, semantic elements, keyboard interaction, visible
  focus states, and descriptive image alt text.
- Preserve the mobile performance strategy: `useIsMobile` uses the `768px`
  breakpoint, and non-essential Motion animations are bypassed or reduced on
  mobile.
- Keep changes focused. Do not reformat or rewrite unrelated files solely to
  satisfy a local change.

## Adding or editing projects

- Add project content in `src/data/projects.ts`; do not hard-code project cards
  in the section component.
- Use only keys declared by `IconKey` in `src/util/icons.ts`. When a technology
  is missing, add its SVG component in `src/components/icons/index.tsx` and add
  the typed mapping in `src/util/icons.ts`.
- Store screenshots as optimized web assets under
  `public/projects/<project-slug>/`.
- Provide a meaningful `alt` value for every cover and gallery image. Add a
  concise caption when it helps explain the screenshot.
- Use the first representative screenshot as the cover and include it in the
  gallery when the project has multiple screenshots.
- Link public projects to their canonical repository. Mark confidential work as
  `proprietary: true` and do not invent or expose source links for it.

## Contact function safeguards

- Keep client-side and server-side field limits aligned, especially the
  500-character message limit.
- Treat all submitted values as untrusted. Retain server-side type checks,
  trimming, email validation, size limits, and HTML escaping.
- Never expose `RESEND_API_KEY` or other secrets to frontend code.
- Return JSON consistently and preserve clear HTTP status codes for validation,
  method, provider, and internal errors.
- Do not change the destination address or sender identity without an explicit
  request.

## Required validation

Run checks appropriate to the files changed. Before handing off a completed
code change, run the full CI sequence when practical:

```powershell
pnpm run lint
pnpm run format:check
pnpm run build
```

For documentation-only changes, at minimum run Prettier against the changed
Markdown files and inspect `git diff --check`. If a repository-wide check fails
only in an untouched file, report it clearly instead of modifying unrelated
content without permission.

There is currently no automated application test suite. Do not claim tests pass
unless tests have been added and run.

## Change hygiene

- Preserve user changes and untracked assets.
- Do not commit secrets, generated build output, or local tool caches.
- Keep README project links synchronized with public entries in
  `src/data/projects.ts`.
- Summarize changed files and validation results in the final handoff.

## Coding style

- Use kebab case for file names.
- Ensure Rohit Kisto's prettier config from `https://github.com/rohitrtk/prettier-config` is set up.
