Graduation Project Inventory

Name: Chinazom Chinaemeze
Target Role: Full-stack Developer
Deadline: October 19, 2026

---

1. Rota

* Repository URL: https://github.com/umehchinaemeze-a11y/rota
* Live deployment: https://rota-lovat-gamma.vercel.app/ (Core scheduling dashboard and initial persistent backend deployed; deployment of recent authenticated shift management is pending)
* Frontend dashboard: Complete (Overview, Schedule, and Team views with interactive shift management UI and sign-in modal)
* Persistent database storage: Implemented and verified in production with PostgreSQL
* Authenticated shift management & authorization: Implemented and committed locally in commit `3eb71cfd5f72145032b2124692620afee9cff942` (`feat(rota): add authenticated shift management`). Includes:
  - Scrypt password hashing with unique random salts and constant-time verification (`lib/auth.ts`)
  - Signed HMAC-SHA256 session tokens with HttpOnly, SameSite=Lax cookie delivery (`lib/session.ts`)
  - Server-side role authorization (`canManageShiftRecord` in `lib/permissions.ts`) enforcing immutable `user_id` ownership, manager overrides (Supervisor, Operations, Admin), and legacy unassigned shift protection
  - Safe auth endpoints (`POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`) returning sanitized user profiles without secret exposure
  - Authenticated shift collection (`POST /api/shifts`) and shift resource management (`GET`, `PUT`, `DELETE /api/shifts/[id]`)
* Automated tests: 32 unit and regression tests passing locally via Node test runner in `tests/shifts.test.mjs`, committed locally in commit `3eb71cf`
* Push & production deployment status: Pending (local repository branch `main` is ahead of `origin/main` by 1 commit `3eb71cf`; pushing to GitHub and redeploying to Vercel production are pending)
* Android development build: Not started
* Load test (200 virtual users): Not started
* Technical documentation: Not started
* Three-minute demo video: Not started
* Portfolio case study: Not started
* LinkedIn post: Not started
* Current status: Core dashboard and initial database backend are deployed to production. Authenticated shift management, session validation, role-based authorization, and 32 passing automated tests are implemented and committed locally in `3eb71cf`. Pushing commit `3eb71cf` to GitHub, production deployment to Vercel, Android development build, 200-VU load test, technical documentation, demo video, and case study remain pending.

---

2. Matinee

* Repository URL: https://github.com/umehchinaemeze-a11y/matinee
* Backend deployment: Complete — production API verified with 12 movie records (https://matinee-two.vercel.app/)
* Android development build: Complete — debug APK built, installed, and visually verified on the Android emulator via Capacitor server.url (requires internet connection, not standalone/offline)
* APK path: matinee/android/app/build/outputs/apk/debug/app-debug.apk
* Technical documentation: Complete — matinee/TECHNICAL-DOCUMENTATION.md (covers architecture, request flow, schemas, mobile wrapper, and troubleshooting)
* Load testing and results documentation: Complete — matinee/LOAD-TEST-RESULTS.md (autocannon baseline test results against `/api/movies`)
* Three-minute demo video: Complete — recorded on iPhone, edited in iMovie, ~2m 59s, reviewed, and backed up to Google Drive (https://drive.google.com/file/d/1PphqRPtJF2HJiLwRedNRsuXBHL3yyQgC/view?usp=drivesdk)
* Figma design link: https://www.figma.com/design/DCxpKWttoPIFKmtIueGq2u/Untitled?node-id=0-1&t=OAOmjcYzAPD9jXwd-1
* Matinee case study in the portfolio: Complete — implemented in `portfolio/app/matinee/page.tsx` and available on the live portfolio at https://chinazom-portfolio.vercel.app/matinee
* Automated tests: Pending
* LinkedIn post: Pending
* Current status: Core requirements substantially complete. Production backend deployment, Android development debug APK, technical documentation, load-test results, three-minute demo video, Figma prototype, and portfolio case-study page are all verified complete. Automated tests and LinkedIn post remain pending.

---

3. System Design

* Repository URL: Not created
* DESIGN.md: Not started
* Architecture diagram: Not started
* Technical deep dives & design patterns: Not started
* Prototype: Not started
* Load-test report: Not started
* Walkthrough video: Not started
* Current status: Not started.

---

4. RAG Application

* Repository URL: Not created
* RAG-NOTES.md: Not started
* Document ingestion & vector database: Not started
* Chat interface and citations: Not started
* Evaluation report: Not started
* Deployment: Not started
* Three-minute demo video: Not started
* Current status: Not started.

---

5. CV and Portfolio

* Portfolio website: Complete
* Portfolio deployment: Complete — https://chinazom-portfolio.vercel.app/
* Portfolio source code: Available in the `portfolio/` directory of the workspace
* Matinee case study: Deployed on portfolio at https://chinazom-portfolio.vercel.app/matinee
* CV: Draft created; final review, polish, and export pending (distinguished from finalized CV)
* Job lead tracker (100 leads): Not started / Pending
* Weekday job-search log: Not started / Pending
* Outreach message templates: Not started / Pending
* Open-source pull requests (2 required, 1 merged): Not started / Pending
* Edge project: Not started / Pending
* LinkedIn profile review & posts: Not started / Pending
* Current status: Portfolio website is deployed with the Matinee case study. CV is in draft form. Job search tracking, outreach templates, open-source PRs, and LinkedIn deliverables remain pending.

---

Notes

* Only mark a task complete after verifying the work.
* Record working links when they become available.
* Record incomplete requirements honestly.
* Keep evidence of tests, deployments, and demonstrations.
* Clearly distinguish locally committed work from pushed and deployed production work.
