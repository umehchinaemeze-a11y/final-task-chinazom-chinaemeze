# Chinazom Chinaemeze — Engineering Portfolio

The personal engineering portfolio and technical case studies for **Umeh Chinazom Chinaemeze**, an intermediate Full-Stack Developer with a B.Sc. in Computer Science from the University of Nigeria, Nsukka (2025).

* **Live Portfolio:** [https://chinazom-portfolio.vercel.app/](https://chinazom-portfolio.vercel.app/)
* **GitHub Profile:** [https://github.com/umehchinaemeze-a11y](https://github.com/umehchinaemeze-a11y)
* **LinkedIn:** [https://www.linkedin.com/in/chinazom-chinaemeze-a89711415/](https://www.linkedin.com/in/chinazom-chinaemeze-a89711415/)

---

## Purpose & Overview

This web application serves as a high-signal portfolio designed for international recruiters, hiring managers, and prospective freelance clients. Rather than simple screenshots, it presents comprehensive, deep-dive architectural case studies documenting real-world implementation decisions, trade-offs, cryptographic authentication patterns, database schemas, and automated test coverage across full-stack applications.

---

## Implemented Pages & Technical Case Studies

The portfolio implements clean, responsive routes using the Next.js App Router:

* **Homepage (`/`):**
  * Professional introduction, availability status, and core full-stack competency matrix (TypeScript, React, Next.js, Node.js, PostgreSQL, Tailwind CSS, Docker).
  * High-level overview of flagship projects with direct navigation to detailed case studies.
  * Direct contact channels and links to public repositories.

* **Rota Case Study (`/rota`):**
  * Deep-dive documentation for **Rota**, a workforce scheduling and shift management web application.
  * Details the Neon Serverless PostgreSQL schema, parameterized SQL query templates, Scrypt password hashing with cryptographically secure random salts, constant-time verification, HMAC-SHA256 session cookies, server-side RBAC authorization gates, multi-tenant isolation, Stripe billing engine, and 374 passing automated tests across 68 suites.
  * Live links to the production application ([https://rota-lovat-gamma.vercel.app/](https://rota-lovat-gamma.vercel.app/)) and the [Rota GitHub Repository](https://github.com/umehchinaemeze-a11y/rota).

* **Matinee Case Study (`/matinee`):**
  * Deep-dive documentation for **Matinee**, a movie discovery web application and cinema booking concept.
  * Details the client-side search engine, serverless `GET /api/movies` route handler, Capacitor Android WebView development build, 31 passing unit tests, and 7-screen interactive Figma prototype.
  * Live links to the production application ([https://matinee-two.vercel.app/](https://matinee-two.vercel.app/)), the [Matinee GitHub Repository](https://github.com/umehchinaemeze-a11y/matinee), and the [Figma Design Prototype](https://www.figma.com/design/PqN3i1XmK95O5N2uO8qFzW/Matinee).

---

## Technology Stack

Verified directly from `package.json`:

* **Web Framework:** [Next.js](https://nextjs.org) `16.4.0` (App Router, Turbopack)
* **UI Library:** [React](https://react.dev) `19.3.0` & React-DOM `19.3.0`
* **Language:** [TypeScript](https://www.typescriptlang.org) `^5`
* **Styling:** [Tailwind CSS](https://tailwindcss.com) `^4` (via `@tailwindcss/turbopack`)
* **Typography:** Geist Sans & Geist Mono via `next/font`
* **Linting:** ESLint `^9` with `eslint-config-next` `16.4.0`

---

## Local Development & Setup

### Prerequisites

* Node.js `20.x` or higher
* npm `10.x` or higher

### Installation & Run

1. **Clone the repository and navigate to the portfolio directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

Verified from `package.json`:

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `next dev` | Starts the local development server with Turbopack fast refresh |
| `build` | `next build` | Creates an optimized static production build |
| `start` | `next start` | Runs the built production application locally |
| `lint` | `eslint` | Executes ESLint to check for code style and syntax issues |

> [!NOTE]
> **Testing Status:** No automated test script (`test`) is defined or configured for this static marketing and case-study portfolio application. Automated tests are configured and executed within the individual project repositories (374 tests across 68 suites in Rota, 31 tests in Matinee).

---

## Project Structure

```text
portfolio/
├── app/
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Tailwind CSS directives & global dark theme
│   ├── layout.tsx           # Root HTML layout, Geist font loader, and metadata
│   ├── page.tsx             # Main portfolio homepage
│   ├── matinee/
│   │   └── page.tsx         # Dedicated Matinee technical case study route
│   └── rota/
│       └── page.tsx         # Dedicated Rota technical case study route
├── public/                  # Static assets and icons
├── eslint.config.mjs        # ESLint flat configuration
├── next.config.ts           # Next.js configuration (Turbopack, experimental features)
├── package.json             # Project dependencies and npm scripts
└── tsconfig.json            # TypeScript configuration with `@/*` path aliases
```

---

## Deployment

The portfolio is deployed to production on the **Vercel Edge Network**:

* **Production URL:** [https://chinazom-portfolio.vercel.app/](https://chinazom-portfolio.vercel.app/)
* **Build Configuration:** All application routes (`/`, `/rota`, `/matinee`) are statically prerendered at build time for optimal performance, instant global CDN delivery, and zero server cold-start latency.
