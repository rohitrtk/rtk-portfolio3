# Rohit Kisto Portfolio

Source code for [rohitkisto.dev](https://rohitkisto.dev), a responsive
single-page portfolio showcasing Rohit Kisto's projects, professional journey,
technical skills, and contact information.

## Highlights

- Data-driven project cards with responsive screenshot galleries
- Professional experience and education timeline
- Expandable technology lists backed by a typed icon registry
- Persistent light and dark themes with system-preference detection
- Reduced animation on mobile and respect for user motion preferences
- Accessible navigation, dialogs, controls, and image descriptions
- Netlify contact form with server-side validation and Resend delivery

## Technology

- **Frontend:** React 19, TypeScript, Vite, and Tailwind CSS
- **UI:** Shadcn-style components, Radix UI, Lucide, and Devicon
- **Interaction:** Motion and Embla Carousel
- **Backend:** Netlify Functions and Resend
- **Quality:** ESLint, Prettier, strict TypeScript, and GitHub Actions
- **Hosting:** Netlify

## Public projects

The portfolio includes the following non-proprietary projects:

- [Opening Bell](https://github.com/rohitrtk/opening-bell) — A pre-market
  research dashboard that ranks stocks and ETFs using recent financial news and
  market data.
- [FiLearn](https://github.com/rohitrtk/fi-learn) — A finance and crypto
  learning platform that rewards completed quizzes with tokens.
- [Kisto Coin](https://github.com/rohitrtk/kisto-coin) — An account-based,
  proof-of-work blockchain with wallet and transfer functionality.
- [Kill Task Utility](https://github.com/rohitrtk/killtask2) — A Rust terminal
  utility for terminating processes that occupy configured ports.
- [Instagram 4 Pomeranians](https://github.com/rohitrtk/pomstagram) — An
  Instagram-style application that uses image recognition to allow only
  Pomeranian photos.

Selected proprietary projects are described on the portfolio without source
links.

## Getting started

### Requirements

- Node.js 24
- npm

### Install and run

```powershell
git clone https://github.com/rohitrtk/rtk-portfolio3.git
cd rtk-portfolio3
npm ci
npm run dev
```

Vite serves the frontend at `http://localhost:5173` by default.

The contact endpoint is a Netlify Function. To exercise it locally, install the
[Netlify CLI](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/)
and run `netlify dev` from the repository root. Add the following variable to a
local `.env` file or the Netlify environment:

```dotenv
RESEND_API_KEY=your_resend_api_key
```

Do not commit `.env` or expose this key to frontend code.

## Available scripts

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the Vite development server            |
| `npm run build`        | Type-check and create the production build   |
| `npm run lint`         | Run ESLint across the repository             |
| `npm run format`       | Format supported files with Prettier         |
| `npm run format:check` | Verify formatting without changing files     |
| `npm run preview`      | Build and preview the production application |

## Project structure

```text
.
|-- public/
|   `-- projects/             # Portfolio screenshots
|-- src/
|   |-- components/           # Shared components and UI primitives
|   |-- context/              # Theme state and persistence
|   |-- data/                 # Project metadata
|   |-- hooks/                # Responsive hooks
|   |-- sections/             # Page sections
|   |-- styles/               # Tailwind theme and global styles
|   |-- types/                # Shared TypeScript types
|   `-- util/                 # Icon registry and navigation helpers
|-- netlify/
|   `-- functions/            # Contact-form serverless function
|-- .github/workflows/        # Continuous integration
|-- netlify.toml              # Hosting and local development configuration
`-- vite.config.ts            # Vite, React, Tailwind, and alias configuration
```

Project cards are defined in `src/data/projects.ts`. Gallery images live under
`public/projects/<project-slug>/` and are referenced with root-relative URLs.

## Validation and deployment

Pull requests and pushes to `main` run the following GitHub Actions checks on
Node.js 24:

```powershell
npm ci
npm run lint
npm run format:check
npm run build
```

Netlify runs `npm run build`, publishes `dist/`, and deploys functions from
`netlify/functions/`.
