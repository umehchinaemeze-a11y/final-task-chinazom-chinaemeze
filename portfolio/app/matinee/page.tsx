import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matinee Case Study — Chinazom Chinaemeze",
  description:
    "Technical case study for Matinee: a movie discovery web application, Neon PostgreSQL backend, Capacitor Android development build, and interactive Figma booking prototype.",
};

export default function MatineeCaseStudy() {
  return (
    <main className="min-h-screen w-full min-w-0 overflow-x-hidden bg-[#101010] text-[#f5f1e8]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="text-xs sm:text-lg font-black tracking-tight hover:text-[#c5f467] transition"
        >
          ← Back to Portfolio
        </Link>
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/50">
          <span>Case Study</span>
          <span className="text-[#c5f467]">✳</span>
          <span>Matinee</span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            Full-stack Development &amp; Design Concept
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Matinee
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            A responsive movie discovery web application backed by Neon
            PostgreSQL, wrapped for Android development via Capacitor, and
            accompanied by an interactive 7-screen cinema booking prototype in
            Figma.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://matinee-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#c5f467] px-6 py-3 text-sm font-bold text-[#101010] transition hover:bg-white"
            >
              Open Live Web App ↗
            </a>
            <a
              href="https://github.com/umehchinaemeze-a11y/matinee"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white"
            >
              GitHub Repository ↗
            </a>
            <a
              href="https://www.figma.com/design/DCxpKWttoPIFKmtIueGq2u/Untitled?node-id=0-1&t=OAOmjcYzAPD9jXwd-1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-[#c5f467] hover:text-[#c5f467]"
            >
              Figma Prototype ↗
            </a>
            <a
              href="https://drive.google.com/file/d/1PphqRPtJF2HJiLwRedNRsuXBHL3yyQgC/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-[#c5f467] hover:text-[#c5f467]"
            >
              Demo Video (3 min) ↗
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20 md:px-10 md:py-24">
        {/* 1. Project Overview */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            01 / Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Project Overview
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            Matinee explores the progression from concept prototyping to working
            software. The project pairs an interactive Figma prototype—exploring
            an end-to-end movie booking user journey—with a production web
            application that implements a live, searchable catalog powered by
            serverless PostgreSQL. A companion Capacitor Android build packages
            the web application into an installable debug APK for mobile testing.
          </p>
        </section>

        {/* 2. Problem and Goal */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            02 / Objectives
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Design &amp; Engineering Goals
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#c5f467]">
                User Experience Design Goal
              </h3>
              <p className="mt-3 leading-7 text-white/65">
                Design a clean, visually focused movie-booking interaction flow
                in Figma. The goal was to prototype how users would transition
                from browsing movie titles to selecting a cinema hall and
                interactively picking seats without unnecessary navigational friction.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#c5f467]">
                Engineering &amp; Delivery Goal
              </h3>
              <p className="mt-3 leading-7 text-white/65">
                Build and deploy a full-stack web service to serve the
                movie catalog from a persistent database, establish an initial
                performance baseline, and package the interface as an Android
                development build using Capacitor.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Implementation and Architecture */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            03 / Implementation
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Application Architecture &amp; Request Flow
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            The implemented application separates catalog delivery into three
            distinct tiers:
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-bold text-white">
                1. Client Interface &amp; In-Memory Search
              </h4>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Built with React 19 and Next.js App Router. On initial mount,
                the page fetches the movie collection from the API endpoint and
                caches it in client state. Search is implemented as real-time
                client-side filtering across movie titles, genres, and release
                years, providing immediate responsive feedback without redundant
                network calls.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-bold text-white">
                2. Serverless API Route (`GET /api/movies`)
              </h4>
              <p className="mt-2 text-sm leading-7 text-white/60">
                A serverless Next.js route handler executing on Vercel. It
                queries the PostgreSQL database hosted on Neon using the serverless
                SQL driver, orders films by year and identifier, and returns
                typed JSON records with HTTP 200 responses and error fallbacks.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-bold text-white">
                3. Capacitor Android Development Wrapper
              </h4>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Configured with application ID <code>com.matinee.app</code>. The
                native wrapper uses Capacitor&apos;s <code>server.url</code> setting
                to render the production web application inside an Android
                WebView. The debug APK was compiled with Gradle and verified in
                the Android emulator.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Tech Stack */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            04 / Stack
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Verified Technology Stack
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            Declared package version ranges verified directly from{" "}
            <code>package.json</code> (values prefixed with <code>^</code> denote
            declared semver ranges, not necessarily resolved installed versions):
          </p>

          <div className="mt-6 w-full max-w-full overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm text-white/70">
              <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-white/50">
                <tr>
                  <th className="py-3 pr-6">Layer</th>
                  <th className="py-3 pr-6">Technology</th>
                  <th className="py-3 pr-6">Declared Version / Range</th>
                  <th className="py-3">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Web Framework</td>
                  <td className="py-3 pr-6">Next.js (App Router)</td>
                  <td className="py-3 pr-6 text-[#c5f467]">16.4.0</td>
                  <td className="py-3">Client pages and serverless API route</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">UI Library</td>
                  <td className="py-3 pr-6">React</td>
                  <td className="py-3 pr-6 text-[#c5f467]">19.3.0</td>
                  <td className="py-3">Interactive catalog components and state</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Language</td>
                  <td className="py-3 pr-6">TypeScript</td>
                  <td className="py-3 pr-6 text-[#c5f467]">^5</td>
                  <td className="py-3">Type definitions for data models and API payloads</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Styling</td>
                  <td className="py-3 pr-6">Tailwind CSS</td>
                  <td className="py-3 pr-6 text-[#c5f467]">^4</td>
                  <td className="py-3">Responsive utility classes and dark palette</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Database Driver</td>
                  <td className="py-3 pr-6">@neondatabase/serverless</td>
                  <td className="py-3 pr-6 text-[#c5f467]">^1.2.0</td>
                  <td className="py-3">Serverless SQL driver for PostgreSQL</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Mobile Runtime</td>
                  <td className="py-3 pr-6">Capacitor Android</td>
                  <td className="py-3 pr-6 text-[#c5f467]">^8.5.3</td>
                  <td className="py-3">Native Android container and WebView bridge</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Database Cloud</td>
                  <td className="py-3 pr-6">Neon PostgreSQL</td>
                  <td className="py-3 pr-6 text-white/50">—</td>
                  <td className="py-3">Cloud database storing 12 seeded movie records</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Deployment</td>
                  <td className="py-3 pr-6">Vercel</td>
                  <td className="py-3 pr-6 text-white/50">—</td>
                  <td className="py-3">Deployment and hosting on Vercel</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Prototyping</td>
                  <td className="py-3 pr-6">Figma</td>
                  <td className="py-3 pr-6 text-white/50">—</td>
                  <td className="py-3">7-screen interactive movie-booking prototype</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Figma Prototype vs. Deployed Functionality */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            05 / Deliverables
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Figma Prototype vs. Deployed Application
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            To maintain clear and honest accounting of project milestones, the
            scope is strictly partitioned between concept design and deployed
            software:
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Deployed Web &amp; Android App (Working Code)
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span>12-movie persistent catalog served from Neon PostgreSQL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span>Live <code>GET /api/movies</code> route handler.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span>Real-time client-side search filtering by title, genre, and year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span>Empty search states and graceful API error handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span>Capacitor Android debug APK verified running in emulator.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Interactive Figma Prototype (Design Concept)
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <li className="flex items-start gap-2">
                  <span className="text-white/40">○</span>
                  <span>7 designed screens: Home, Movies, Batman Details, Hunger Games Details, Fight Club Details, Cinema Details, and Booking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40">○</span>
                  <span>Interactive flow: Cinema Details → Booking Page → Movies Page.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40">○</span>
                  <span>Interactive seat components toggle between available (blue-grey) and selected (orange).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467] font-bold">!</span>
                  <span className="text-white/80">
                    <strong>Limitation:</strong> Seat selection and booking are prototype interactions only, not a live transactional booking system.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Validation and Baseline Load-Test Results */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            06 / Performance &amp; Verification
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Validation &amp; Baseline Load-Test Results
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            A baseline synthetic test was executed against the production
            endpoint <code>https://matinee-two.vercel.app/api/movies</code> using{" "}
            <code>autocannon</code> to record initial response times and status
            code distribution.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-base font-bold text-white">
              Measured Baseline Metrics
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Test parameters: 2 concurrent connections, 20 total requests, 13.1s duration.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs text-white/50">Success Rate</p>
                <p className="mt-1 text-2xl font-bold text-[#c5f467]">100%</p>
                <p className="text-xs text-white/40">20/20 HTTP 200</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs text-white/50">Average Latency</p>
                <p className="mt-1 text-2xl font-bold text-white">1,168.5 ms</p>
                <p className="text-xs text-white/40">Mean response time</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs text-white/50">Median (p50)</p>
                <p className="mt-1 text-2xl font-bold text-white">786 ms</p>
                <p className="text-xs text-white/40">50% under 786 ms</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs text-white/50">Average Throughput</p>
                <p className="mt-1 text-2xl font-bold text-white">1.54 req/sec</p>
                <p className="text-xs text-white/40">Total data: 83.5 kB</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs leading-6 text-amber-200/80">
              <strong>Explicit Test Limitation:</strong> This test evaluated
              endpoint availability and baseline latency under minimal traffic.
              It does <strong>not</strong> represent a 200-virtual-user stress
              test, capacity threshold benchmark, or production throughput guarantee.
            </div>
          </div>
        </section>

        {/* 7. Limitations and Next Steps */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            07 / Scope &amp; Roadmap
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Explicit Limitations &amp; Future Work
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-base font-bold text-white">
                Current Limitations
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>No Automated Tests:</strong> No automated test suites (Jest, Playwright, or Cypress) are currently implemented in the repository.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Internet Dependency:</strong> The Capacitor Android debug build relies on <code>server.url</code> pointing to the deployed site; it is not a standalone or offline-capable application.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Read-Only API:</strong> The production API is strictly read-only and does not process bookings, payments, or user accounts.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-base font-bold text-white">
                Future Engineering Roadmap
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467] font-bold">→</span>
                  <span><strong>Transactional Booking Backend:</strong> Implement database schemas and API routes for seat locks, reservations, and booking confirmations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467] font-bold">→</span>
                  <span><strong>Automated Testing:</strong> Add unit testing for the route handler and end-to-end testing for client search workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467] font-bold">→</span>
                  <span><strong>Offline Mobile Support:</strong> Transition Capacitor configuration to package local static assets directly inside the APK.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Links */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            08 / Resources
          </p>
          <h2 className="mt-2 text-3xl font-black">Project Deliverables &amp; Links</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">
            Review the live deployment, source repository, design prototype, and
            video walkthrough:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://matinee-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#c5f467] px-7 py-3 text-sm font-bold text-[#101010] transition hover:bg-white"
            >
              Live Web Application ↗
            </a>
            <a
              href="https://github.com/umehchinaemeze-a11y/matinee"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:border-white"
            >
              GitHub Source Code ↗
            </a>
            <a
              href="https://www.figma.com/design/DCxpKWttoPIFKmtIueGq2u/Untitled?node-id=0-1&t=OAOmjcYzAPD9jXwd-1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:border-[#c5f467] hover:text-[#c5f467]"
            >
              Figma Prototype (7 Screens) ↗
            </a>
            <a
              href="https://drive.google.com/file/d/1PphqRPtJF2HJiLwRedNRsuXBHL3yyQgC/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:border-[#c5f467] hover:text-[#c5f467]"
            >
              Demo Video Walkthrough ↗
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <Link
              href="/"
              className="text-sm font-semibold text-white/60 hover:text-[#c5f467] transition"
            >
              ← Return to Portfolio Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
