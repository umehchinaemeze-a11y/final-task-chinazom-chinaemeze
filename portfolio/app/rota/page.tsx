import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rota Case Study — Chinazom Chinaemeze",
  description:
    "Technical case study for Rota: a full-stack shift scheduling and workforce management web application built with Next.js App Router, Neon PostgreSQL, cryptographic session authentication, and role-based access control.",
};

export default function RotaCaseStudy() {
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
          <span>Rota</span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            Full-stack Engineering &amp; System Architecture
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Rota
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            A full-stack shift scheduling and workforce management web application
            backed by Neon Serverless PostgreSQL, powered by Next.js App Router,
            and hardened with native cryptographic authentication and fine-grained
            role-based permissions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://rota-lovat-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#c5f467] px-6 py-3 text-sm font-bold text-[#101010] transition hover:bg-white"
            >
              Open Live Web App ↗
            </a>
            <a
              href="https://github.com/umehchinaemeze-a11y/rota"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white"
            >
              GitHub Repository ↗
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20 md:px-10 md:py-24">
        {/* 1. Project Overview & Purpose */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            01 / Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Project Overview &amp; Purpose
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            Rota is designed to streamline team shift coordination for operations
            departments, front desk teams, supervisors, and customer support
            staff. The application addresses the common operational pain points
            of schedule confusion, unauthorized shift alterations, and lack of
            centralized scheduling visibility.
          </p>
          <p className="mt-4 leading-8 text-white/70">
            Rather than relying on third-party authentication services or heavy
            ORM abstractions, Rota implements zero-dependency cryptographic
            authentication, direct parameterized PostgreSQL queries, and strict
            server-side role authorization to guarantee data integrity and tenant
            security.
          </p>
        </section>

        {/* 2. Architecture & Request Flow */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            02 / Architecture
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Next.js App Router Architecture &amp; Request Flow
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            The application follows Next.js App Router conventions with clear
            separation between UI presentation, API endpoints, cryptographic
            primitives, database models, and automated test suites:
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-bold text-white">
                1. Client Schedule Dashboard (<code>app/page.tsx</code>)
              </h4>
              <p className="mt-2 text-sm leading-7 text-white/60">
                A client-rendered React 19 interface displaying the weekly shift
                calendar, active team member rosters, authentication modals, and
                shift management controls. It consumes REST endpoints with
                optimistic local updates and graceful error fallbacks.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-bold text-white">
                2. Serverless API Route Handlers (<code>app/api/</code>)
              </h4>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Modular Next.js route handlers executing on Vercel serverless
                functions. Authentication endpoints (<code>/api/auth/login</code>,{" "}
                <code>/api/auth/logout</code>, <code>/api/auth/me</code>) handle
                credential verification and cookie management. Shift endpoints (
                <code>/api/shifts</code>, <code>/api/shifts/[id]</code>) handle
                calendar queries and role-gated mutations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-bold text-white">
                3. Business Logic &amp; Security Services (<code>lib/</code>)
              </h4>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Encapsulated modules for cryptographic primitives (
                <code>lib/auth.ts</code>), Neon database connectivity pool (
                <code>lib/db.ts</code>), server-side authorization policies (
                <code>lib/permissions.ts</code>), and HttpOnly cookie session
                lifecycle (<code>lib/session.ts</code>).
              </p>
            </div>
          </div>
        </section>

        {/* 3. Technology Stack */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            03 / Stack
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Verified Technology Stack
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            Declared dependencies and runtime technologies verified directly from{" "}
            <code>package.json</code> and the implementation codebase:
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
                  <td className="py-3 pr-6">Next.js (App Router, Turbopack)</td>
                  <td className="py-3 pr-6 text-[#c5f467]">16.4.0</td>
                  <td className="py-3">Server-side rendering, React Server Components, and API routes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">UI Library</td>
                  <td className="py-3 pr-6">React</td>
                  <td className="py-3 pr-6 text-[#c5f467]">19.3.0</td>
                  <td className="py-3">Client components, modal dialogs, and schedule view state</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Language</td>
                  <td className="py-3 pr-6">TypeScript</td>
                  <td className="py-3 pr-6 text-[#c5f467]">^5</td>
                  <td className="py-3">Static type checking and interface contracts across API models</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Styling</td>
                  <td className="py-3 pr-6">Tailwind CSS</td>
                  <td className="py-3 pr-6 text-[#c5f467]">^4</td>
                  <td className="py-3">Utility classes, responsive layouts, and accessible color tokens</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Database Driver</td>
                  <td className="py-3 pr-6">@neondatabase/serverless</td>
                  <td className="py-3 pr-6 text-[#c5f467]">^1.2.0</td>
                  <td className="py-3">Connection-pooled serverless SQL queries to Neon PostgreSQL</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Authentication</td>
                  <td className="py-3 pr-6">Node.js Native crypto</td>
                  <td className="py-3 pr-6 text-[#c5f467]">node:crypto</td>
                  <td className="py-3">Scrypt password hashing, HMAC-SHA256 tokens, timingSafeEqual</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Test Runner</td>
                  <td className="py-3 pr-6">Node.js Native Test Runner</td>
                  <td className="py-3 pr-6 text-[#c5f467]">node:test / node:assert</td>
                  <td className="py-3">Zero-dependency automated unit and security test suites</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Database Cloud</td>
                  <td className="py-3 pr-6">Neon PostgreSQL</td>
                  <td className="py-3 pr-6 text-white/50">—</td>
                  <td className="py-3">Serverless cloud PostgreSQL with connection pooling</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Deployment</td>
                  <td className="py-3 pr-6">Vercel</td>
                  <td className="py-3 pr-6 text-white/50">—</td>
                  <td className="py-3">Continuous deployment, edge routing, and serverless hosting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Authentication & Cryptographic Session Security */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            04 / Security
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Authentication &amp; Cryptographic Session Security
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            Authentication in Rota is implemented without external auth
            providers or third-party session packages, relying directly on Node.js
            native cryptographic primitives in <code>lib/auth.ts</code> and{" "}
            <code>lib/session.ts</code>:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#c5f467]">
                Scrypt Password Hashing
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span><strong>Memory-Hard KDF:</strong> Uses <code>crypto.scryptSync</code> to resist GPU and ASIC brute-force attacks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span><strong>Cryptographic Salt:</strong> 16 cryptographically secure random bytes generated per user (<code>crypto.randomBytes(16)</code>).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span><strong>Derived Key Length:</strong> 64 bytes (512 bits) stored as hex strings in the database.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span><strong>Constant-Time Verification:</strong> Uses <code>crypto.timingSafeEqual</code> over hash buffers to prevent timing side-channel attacks.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#c5f467]">
                HMAC-SHA256 Signed Sessions
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span><strong>Token Format:</strong> Two-part dot-separated token: <code>&lt;base64urlPayload&gt;.&lt;signature&gt;</code>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span><strong>Secret Signing:</strong> Signed with the server environment secret <code>AUTH_SECRET</code> using HMAC-SHA256.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span><strong>Tamper Protection:</strong> Any payload alteration (e.g. elevating role to Admin) causes constant-time signature mismatch and instant rejection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467]">✓</span>
                  <span><strong>Hardened Cookie:</strong> Stored in <code>rota_session</code> with <code>HttpOnly</code> (no XSS access), <code>SameSite=Lax</code> (CSRF protection), and <code>Secure</code> in production.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h4 className="font-bold text-white">
              Database Revalidation on Mutating Operations
            </h4>
            <p className="mt-2 text-sm leading-7 text-white/60">
              To prevent stale-token vulnerabilities where a deactivated or
              demoted employee continues to make authorized calls during a 7-day
              token lifespan, state-mutating route handlers (POST, PUT, DELETE) invoke{" "}
              <code>getSessionUser(&#123; revalidateWithDb: true &#125;)</code>. This
              validates the cryptographic signature and queries the fresh user record
              from Neon PostgreSQL to verify that the account remains active with
              unaltered permissions.
            </p>
          </div>
        </section>

        {/* 5. PostgreSQL Schema & Data Integrity */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            05 / Database
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            PostgreSQL Schema &amp; Data Integrity
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            The data model runs on Neon PostgreSQL using native parameterized SQL
            tagged template literals (<code>sql`...`</code>) to prevent SQL
            injection:
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="font-mono text-base font-bold text-[#c5f467]">
                users Table Schema
              </h3>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-black/40 p-4 text-xs font-mono leading-5 text-white/80">
{`CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  password_salt VARCHAR(64) NOT NULL,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);`}
              </pre>
              <p className="mt-3 text-xs leading-5 text-white/50">
                Stores unique user credentials, cryptographic salts, hashes, and
                assigned roles.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="font-mono text-base font-bold text-[#c5f467]">
                shifts Table Schema
              </h3>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-black/40 p-4 text-xs font-mono leading-5 text-white/80">
{`CREATE TABLE IF NOT EXISTS shifts (
  id SERIAL PRIMARY KEY,
  employee_name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL,
  shift_day DATE NOT NULL,
  user_id INTEGER REFERENCES users(id)
    ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);`}
              </pre>
              <p className="mt-3 text-xs leading-5 text-white/50">
                Stores individual shift assignments. <code>user_id</code> references{" "}
                <code>users(id)</code> with <code>ON DELETE SET NULL</code> to
                prevent orphaned record errors.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h4 className="font-bold text-white">
              Legacy Shift Record Protection &amp; Calendar Validation
            </h4>
            <p className="mt-2 text-sm leading-7 text-white/60">
              Shifts created prior to the user authentication layer have{" "}
              <code>user_id IS NULL</code>. To prevent security vulnerabilities
              where a user registers with a name matching a legacy shift to gain
              unauthorized ownership, the system strictly forbids non-managers from
              editing or deleting shifts with null foreign keys. Additionally,
              shift payloads are validated against regular expressions and parsed
              into JavaScript <code>Date</code> objects to reject impossible
              calendar dates such as February 31.
            </p>
          </div>
        </section>

        {/* 6. Role-Based Permissions & canManageShiftRecord */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            06 / Authorization
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Role-Based Shift Permissions &amp; canManageShiftRecord
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            Authorization in Rota is centralized in{" "}
            <code>lib/permissions.ts</code> via the{" "}
            <code>canManageShiftRecord(sessionUser, shiftRecord)</code> rule. The
            server strictly evaluates caller identity rather than accepting
            client claims:
          </p>

          <div className="mt-6 w-full max-w-full overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm text-white/70">
              <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-white/50">
                <tr>
                  <th className="py-3 pr-6">Caller Role</th>
                  <th className="py-3 pr-6">Target Shift</th>
                  <th className="py-3 pr-6">Edit Shift</th>
                  <th className="py-3 pr-6">Delete Shift</th>
                  <th className="py-3">Reassign Ownership</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Anonymous / Guest</td>
                  <td className="py-3 pr-6">Any shift</td>
                  <td className="py-3 pr-6 text-red-400">❌ Denied (401)</td>
                  <td className="py-3 pr-6 text-red-400">❌ Denied (401)</td>
                  <td className="py-3 text-red-400">❌ Denied (401)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Standard Employee</td>
                  <td className="py-3 pr-6">Own shift (<code>user_id === user.id</code>)</td>
                  <td className="py-3 pr-6 text-[#c5f467]">✅ Allowed</td>
                  <td className="py-3 pr-6 text-[#c5f467]">✅ Allowed</td>
                  <td className="py-3 text-red-400">❌ Locked to self</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Standard Employee</td>
                  <td className="py-3 pr-6">Other employee&apos;s shift</td>
                  <td className="py-3 pr-6 text-red-400">❌ Denied (403)</td>
                  <td className="py-3 pr-6 text-red-400">❌ Denied (403)</td>
                  <td className="py-3 text-red-400">❌ Denied (403)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Standard Employee</td>
                  <td className="py-3 pr-6">Legacy shift (<code>user_id IS NULL</code>)</td>
                  <td className="py-3 pr-6 text-red-400">❌ Denied (403)</td>
                  <td className="py-3 pr-6 text-red-400">❌ Denied (403)</td>
                  <td className="py-3 text-red-400">❌ Denied (403)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-white">Supervisor / Operations / Admin</td>
                  <td className="py-3 pr-6">Any shift (own, other, or legacy)</td>
                  <td className="py-3 pr-6 text-[#c5f467]">✅ Allowed</td>
                  <td className="py-3 pr-6 text-[#c5f467]">✅ Allowed</td>
                  <td className="py-3 text-[#c5f467]">✅ Allowed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. Automated Testing & Verification */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            07 / Verification
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Automated Testing &amp; Verification
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            A comprehensive automated test suite executes using Node.js&apos;s
            built-in test runner (<code>node --test</code>) via{" "}
            <code>tests/shifts.test.mjs</code>, verifying security assertions,
            cryptographic integrity, and business logic without external test
            framework dependencies.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h3 className="text-base font-bold text-white">
                  Automated Test Suite Summary
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  Command: <code>node --experimental-strip-types --test tests/shifts.test.mjs</code>
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#c5f467]/30 bg-[#c5f467]/10 px-4 py-1.5 text-xs font-bold text-[#c5f467]">
                <span>●</span>
                <span>32 / 32 Passed (100%)</span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs font-semibold text-[#c5f467]">Suite 1: Scrypt Hashing</p>
                <p className="mt-1 text-2xl font-bold text-white">5 Tests</p>
                <p className="mt-1 text-xs text-white/50">Unique salts, hash verification, bad password rejection, malformed hex handling.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs font-semibold text-[#c5f467]">Suite 2: HMAC Sessions</p>
                <p className="mt-1 text-2xl font-bold text-white">8 Tests</p>
                <p className="mt-1 text-xs text-white/50">HMAC-SHA256 creation, secret guards, payload tampering, signature forgery, expired token rejection.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs font-semibold text-[#c5f467]">Suite 3: RBAC Authorization</p>
                <p className="mt-1 text-2xl font-bold text-white">6 Tests</p>
                <p className="mt-1 text-xs text-white/50">Unauthenticated denial, owner permissions, non-owner denial, legacy shift protection, manager override.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs font-semibold text-[#c5f467]">Suite 4: Login &amp; Sanitization</p>
                <p className="mt-1 text-2xl font-bold text-white">4 Tests</p>
                <p className="mt-1 text-xs text-white/50">Missing field validation, email normalization, leak-free profile exposure.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs font-semibold text-[#c5f467]">Suite 5: Payload Validation</p>
                <p className="mt-1 text-2xl font-bold text-white">5 Tests</p>
                <p className="mt-1 text-xs text-white/50">Valid payload acceptance, date format enforcement, invalid calendar date rejection (e.g. Feb 31).</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs font-semibold text-[#c5f467]">Suite 6: Schedule State</p>
                <p className="mt-1 text-2xl font-bold text-white">4 Tests</p>
                <p className="mt-1 text-xs text-white/50">Idempotent updates, chronological sorting, immediate deletion, ID preservation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Challenges & Engineering Decisions */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            08 / Engineering
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Challenges, Engineering Decisions &amp; Lessons Learned
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                1. Balancing Stateless Scalability with Immediate Role Revocation
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Stateless cryptographic tokens reduce database read load on
                static and read-only endpoints. However, pure statelessness means
                that demoted or terminated users retain access until their cookie
                expires. To balance performance with enterprise security, Rota
                uses stateless verification for initial session validation, but
                mandates fresh database revalidation (
                <code>getSessionUser(&#123; revalidateWithDb: true &#125;)</code>) on all
                mutating endpoints (POST, PUT, DELETE).
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                2. Securing Legacy Pre-Authentication Shift Records
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                The initial version of Rota stored shifts without a foreign key to
                a user table. When authentication was introduced, existing records
                had <code>user_id = NULL</code>. A naive authorization rule based
                solely on employee name matching would allow any newly registered
                user who entered the same name to modify or delete historical
                records. The solution implemented in <code>lib/permissions.ts</code>{" "}
                requires an exact foreign key match for regular employees, locking
                legacy unassigned shifts to supervisor and management roles only.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                3. Zero-Dependency Cryptographic Implementation
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Rather than introducing large external authentication frameworks or
                native C++ bindings like <code>bcrypt</code>, which can cause
                binary compilation issues in serverless Vercel runtimes, Rota leverages
                Node.js native <code>node:crypto</code>. Scrypt provides
                superior memory-hardness, while <code>timingSafeEqual</code> prevents
                timing attacks without inflating the deployment bundle size.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Honest Limitations & Roadmap */}
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            09 / Scope &amp; Roadmap
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Honest Limitations &amp; Future Roadmap
          </h2>
          <p className="mt-4 leading-8 text-white/70">
            In accordance with rigorous engineering honesty, the following items
            are explicitly documented as current limitations and roadmap items
            that remain incomplete or unverified:
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-base font-bold text-white">
                Verified Current Limitations
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>No Android Mobile Build:</strong> Rota is deployed as a responsive web application. No Capacitor Android wrapper or native APK currently exists.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>No 200-VU Load Test:</strong> A 200-virtual-user automated stress test benchmark has not yet been executed for the Rota production API.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>No Demo Video:</strong> A recorded video walkthrough has not yet been produced for Rota.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>No Standalone Architecture Diagram:</strong> The system architecture is documented in text and tables, but a dedicated vector diagram asset is not included.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>No Subscription Proration:</strong> Multi-tier billing, Stripe webhooks, and subscription proration algorithms are not implemented.</span>
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
                  <span><strong>Mobile APK Packaging:</strong> Package the responsive web client using Capacitor for native Android and iOS distribution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467] font-bold">→</span>
                  <span><strong>Capacity &amp; Stress Testing:</strong> Execute automated load tests with k6 or autocannon to establish throughput thresholds under concurrent load.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467] font-bold">→</span>
                  <span><strong>Shift Swap Requests:</strong> Introduce employee-to-employee shift trade proposals with supervisory approval workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5f467] font-bold">→</span>
                  <span><strong>Calendar Integration:</strong> Export personal schedules via iCalendar (.ics) feeds and Google Calendar synchronization.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. Resources & Navigation */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            10 / Resources
          </p>
          <h2 className="mt-2 text-3xl font-black">Project Deliverables &amp; Links</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">
            Review the live production application and the GitHub source code repository:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://rota-lovat-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#c5f467] px-7 py-3 text-sm font-bold text-[#101010] transition hover:bg-white"
            >
              Live Web Application ↗
            </a>
            <a
              href="https://github.com/umehchinaemeze-a11y/rota"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:border-white"
            >
              GitHub Source Code ↗
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
