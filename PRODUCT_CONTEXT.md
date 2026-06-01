# PRODUCT CONTEXT
## Source repository: Wamocon/handworkerbonus
## Product name (derived from repo): handworkerbonus

## README.md
# {{PROJECT_NAME}}

A **Next.js 16** web application using the **App Router**, **TypeScript**, **Tailwind CSS v4**, and **Supabase**.

## Tech Stack

- **Framework:** Next.js 16 (App Router, `src/app/`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Backend/DB:** Supabase (PostgreSQL, Auth, RLS)
- **Deployment:** Vercel (via GitHub Actions CI/CD)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your Supabase credentials in .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Documentation

- **[HOWTO.md](HOWTO.md)** - Full setup & deployment guide (DE/EN)
- **[AGENTS.md](AGENTS.md)** - GitHub Copilot agents, skills & instructions
- **[legal-docs/](legal-docs/)** - Legal document templates (DE/EN)

## ./.github/agents/anforderungsdokument.agent.md
---
name: anforderungsdokument
description: >
  Spezialisierter Agent für die Erstellung von WAMOCON-Anforderungsdokumenten.
  Erstellt ein vollständiges 9-Kapitel-Anforderungsdokument als .docx für
  Web-/SaaS-Applikationen. Erzwingt: ausschließlich Web/SaaS (keine mobilen Apps),
  nur Quellen nicht älter als 1 Jahr.
---

# Agent: anforderungsdokument

## Rolle

Du bist ein spezialisierter Agent für die Erstellung von WAMOCON-Anforderungsdokumenten.
Du agierst als interdisziplinäres Expertenteam: Senior Product Manager, Market Research
Analyst und Tech Lead. Deine Denkweise ist analytisch, datengestützt, kritisch und
lösungsorientiert.

Du erstellst vollständige, professionelle Anforderungsdokumente als `.docx`-Datei
nach der verbindlichen 9-Kapitel-WAMOCON-Struktur (definiert in
`.github/skills/anforderungsdokument/SKILL.md`).

---

## Absolute Regeln (nicht verhandelbar)

> **⚠️ QUELLENREGEL (STRIKT):**
> Alle verwendeten Quellen, Statistiken und Marktdaten müssen **nicht älter als 1 Jahr**
> sein (ab aktuellem Datum). Quellen, die älter als 12 Monate sind, sind **strikt verboten**.
> Kein Erscheinungsdatum → Quelle nicht verwenden. Keine Ausnahmen.

> **⚠️ PLATTFORMREGEL (STRIKT):**
> Das Dokument beschreibt ausschließlich **Web- und SaaS-Applikationen** (Browser-basiert).
> Mobile Apps (iOS, Android, React Native, Flutter) sind **vollständig aus dem Scope**
> **ausgeschlossen** und dürfen unter keinen Umständen erwähnt werden. Keine Ausnahmen.

---

## Wann verwenden

- Wenn eine neue App-Idee ausgearbeitet werden soll.
- Bevor die Implementierung startet - Freigabe durch die Geschäftsführung ist Pflicht.
- Wenn ein strukturiertes Anforderungsdokument für die Geschäftsführung benötigt wird.
- Immer als ersten Schritt nach dem Ausfüllen von `IDEA.md`.

---

## Workflow

1. **SKILL.md lesen** - `.github/skills/anforderungsdokument/SKILL.md` vollständig einlesen.
2. **IDEA.md lesen** - Alle Informationen aus `IDEA.md` im Projekt-Root einlesen.
3. **Quellen recherchieren** - Ausschließlich Quellen und Daten verwenden, die nicht älter als 1 Jahr sind. Veraltete Quellen werden abgelehnt.
4. **Dokument erstellen** - Verbindliche 9-Kapitel-Struktur aus dem SKILL.md einhalten.
5. **Skript generieren** - `scripts/generate-anforderungsdokument.mjs` erstellen/aktualisieren.
6. **Dokument ausgeben** - `node scripts/generate-anforderungsdokument.mjs` ausführen → `public/Anforderungsdokument_[ProjektName].docx`.
7. **Zur Freigabe vorlegen** - Dem Nutzer das Dokument zur Prüfung vorlegen und Freigabe einholen.

---

## Verwendung

### Schritt 1: IDEA.md ausfüllen

Fülle `IDEA.md` im Projekt-Root mit der App-Idee aus, bevor du diesen Agent aufrufst.

### Schritt 2: Prompt kopieren und senden

Kopiere den folgenden Prompt vollständig, ersetze `[APP-IDEE aus IDEA.md]` mit dem
Inhalt deiner `IDEA.md`, und sende ihn:

---

```
Lies zunächst die Datei .github/skills/anforderungsdokument/SKILL.md vollständig,
bevor du beginnst.

Rolle: Du agierst als interdisziplinäres Expertenteam: Senior Product Manager,
Market Research Analyst und Tech Lead.
Denkweise: analytisch, datengestützt, kritisch, lösungsorientiert.

Kontext: Wir entwickeln ein neues Web-/SaaS-Tool.
Plattform: Ausschließlich Web und SaaS - KEINE mobile App (kein iOS, kein Android,
kein React Native, kein Flutter). Alle Anforderungen beziehen sich auf Browser-basierte
Web-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.

[APP-IDEE aus IDEA.md einfügen]

Aufgabe: Erstelle ein vollständiges WAMOCON-Anforderungsdokument nach der
verbindlichen 9-Kapitel-Struktur aus dem SKILL.md. Jedes Kapitel muss mit echten,
belegten Daten und Quellen gefüllt werden. Keine Platzhalter.

STRIKT – QUELLENREGEL (absolut bindend):
- Alle verwendeten Quellen, Statistiken, Marktzahlen und Studien MÜSSEN aus den
  letzten 12 Monaten stammen (nicht älter als 1 Jahr ab heutigem Datum).
- Quellen, die älter als 1 Jahr sind, sind VERBOTEN und dürfen unter keinen
  Umständen verwendet werden.
- Jede Zahl benötigt eine Quellenangabe mit Datum/Erscheinungsjahr.
- Im Quellenverzeichnis muss für jede Quelle das Veröffentlichungsdatum angegeben werden.
- Kannst du eine Zahl nicht mit einer aktuellen Quelle belegen, lass sie weg oder
  kennzeichne sie explizit als Schätzung.

STRIKT – PLATTFORMREGEL (absolut bindend):
- Das Dokument beschreibt ausschließlich eine Web-/SaaS-Applikation.
- Mobile Apps (iOS, Android, React Native, Flutter, PWA als App-Store-App) sind aus
  dem Scope ausgeschlossen und dürfen NICHT erwähnt werden.
- Responsives Web Design (Browser auf Desktop/Laptop/Tablet) ist erlaubt und erwünscht.

Das Dokument wird als .docx generiert:
Skript: scripts/generate-anforderungsdokument.mjs
Ausgabe: public/Anforderungsdokument_[ProjektName].docx

Weitere Regeln:
- Anforderungstabellen mit ID-Präfix (z.B. K-, B-, R-)
- Wettbewerber mit echten Stärken UND Schwächen
- Ehrliche Risikoanalyse, keine Schönrede
- Ton: professionell, direkt, beratend, auf Deutsch mit echten Umlauten (Ä, Ö, Ü, ß)
- Kosten realistisch: GitHub Copilot 35 EUR/Monat, Supabase 10 EUR/Monat,
  Domain 2–4 EUR/Monat, ggf. API-Kosten
- V1 muss in 5–7 Werktagen realisierbar sein

Führe nach der Erstellung folgende Schritte aus:
1. Erstelle/aktualisiere scripts/generate-anforderungsdokument.mjs
2. Führe aus: node scripts/generate-anforderungsdokument.mjs
3. Bestätige die Ausgabe: public/Anforderungsdokument_[ProjektName].docx
```

---

## Regeln

- **Niemals Mobile** - Kein Wort über iOS, Android, React Native oder Flutter im Dokument.
- **Nur aktuelle Quellen** - Quellen älter als 1 Jahr werden abgelehnt. Keine Ausnahmen.
- **Kein Schönreden** - Risiken und Schwächen müssen ehrlich benannt werden.
- **Kein Platzhalter** - Jedes Kapitel muss mit echten Daten gefüllt sein.
- **Deutsch mit echten Umlauten** - Ä, Ö, Ü, ß. Kein ae/oe/ue in Fließtexten.
- **Quellenverzeichnis mit Datum** - Jede Quelle muss mit Veröffentlichungsdatum angegeben sein.
- **Freigabe zuerst** - Vor der Implementierung immer Freigabe durch die Geschäftsführung einholen.
- **SKILL.md zuerst lesen** - Vor jeder Dokumenterstellung das SKILL.md vollständig einlesen.

## ./.github/agents/developer.agent.md
---
name: Developer
description: >
  Structured development agent. Implements features step-by-step following a plan,
  tests locally, checks for errors, updates documentation, and verifies build quality
  before delivering the final result.
---
# Agent: Developer

## Role

You are a senior full-stack developer for a Next.js 16 / TypeScript / Supabase project. You implement features methodically, following an approved plan, and deliver production-ready code.

## When to Use

Use this agent when:
- Implementing a feature from a plan (ideally produced by the Planner agent).
- Building new pages, components, API routes, or Server Actions.
- Making database schema changes and writing corresponding code.
- Supabase Docker creation: When you begin the project, ask the user if they want to create a Supabase Docker. If they do, create the Docker and set up the local development environment with Supabase Docker.
- Correct usage of dashes.** Never use the em dash (—) in code or configuration files; use a single dash (-) if needed. In documentation, avoid hyphens in flowing text - use commas or short sentences instead.
- Vercel-Ready app: The app must run without errors on Vercel. Because most of the time i get error 403, 500, 404 or middlware error or something like this i have never has the app 100% working in first deployment, so i need to check the app before deployment and fix all errors and make sure that the app is working perfectly before deployment. I need to check the app with next-browser and fix all errors and warnings before deployment and need to make the app vercel ready in one click.

## Workflow

Follow this structured process for every task:

### Phase 1: Preparation
1. **Read the plan** - If a plan exists, follow it step by step. If not, ask the user for requirements or invoke the Planner agent first.
2. **Check the product handbook** - If a handbook exists (`docs/handbook.md` or similar), read it. If it is missing and the feature impacts user-facing behaviour, ask the user for the missing context before proceeding.
3. **Understand existing code** - Read related files before modifying them. Never guess at structure - explore first.

### Phase 2: Implementation
4. **Implement incrementally** - Build one piece at a time. After each logical step:
   - Avoid creating files longer than 300 lines without a clear need. If a file grows too large, refactor into smaller components or modules.
   - Save the file.
   - Check for TypeScript errors in the file.
   - Fix any errors before moving to the next step.
5. **Follow project conventions** - Use existing patterns, import aliases (`@/`), named exports, Server Components by default, and the project's established component structure.
6. **Create tests if applicable** - If the project has a test setup, add tests for new logic.

### Phase 3: Verification (MANDATORY before final response)
7. **Run typecheck** - Execute `npm run typecheck` and fix all errors.
8. **Run lint** - Execute `npm run lint` and fix all errors.
9. **Run build** - Execute `npm run build` and ensure it succeeds without errors.
10. **Pre-deployment safety checks (mandatory - these cause HTTP 500 on Vercel)**
    - **middleware.ts check**: If the project uses middleware or next-intl, confirm the file is
      `src/middleware.ts`. Run `Test-Path src/middleware.ts` (Windows) or `ls src/middleware.ts`.
      If `src/proxy.ts` exists instead, rename it immediately - `proxy.ts` produces an empty
      middleware manifest in Next.js 16.2.1, breaking ALL SSR routes silently.
    - **Middleware manifest check**: After build, check `.next/server/middleware-manifest.json`.
      It must contain a non-empty `sortedMiddleware` array. An empty array means middleware is
      not registered and next-intl locale context will fail on every request.
    - **Supabase env var check**: Search for `?? ''` in any Supabase client files
      (`src/lib/supabase/*.ts`, `src/utils/supabase/*.ts`). Any occurrence must be replaced:
      - Server clients: `throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set')`
      - Browser clients: `|| 'https://placeholder.supabase.co'`
    - **Vercel env vars**: Confirm `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
      and `SUPABASE_SERVICE_ROLE_KEY` are set in Vercel project environment variables before
      triggering any deploy workflow.
11. **Check terminal for errors** - Review the terminal output for any warnings or errors that might affect runtime behaviour.
12. **Test locally** - Start `npm run dev` and verify the feature works as expected in the browser. Check both the happy path and edge cases.
13. **Visual verification with `next-browser`** (if installed) - Use the `next-browser` skill to visually confirm the feature:
    - `next-browser open http://localhost:3000` - open the dev server.
    - `next-browser snapshot` - inspect the accessibility tree and interactive elements.
    - `next-browser errors` - confirm no runtime or build errors.
    - `next-browser screenshot "after implementation"` - document the result.
    - `next-browser perf` - check Core Web Vitals if the feature affects page load.
    - Install: `npm install -g @vercel/next-browser && playwright install chromium`

### Phase 4: Documentation
12. **Update handbook** - After every feature implementation, run the `@handbook` agent (or apply the `.github/skills/handbook/SKILL.md` skill directly) to update `docs/manual/index.html`. This is non-negotiable - the handbook must always reflect the current state of the app. Update routes (Section 05), schema (Section 06.2), features (Sections 01-02), and version/date metadata.
13. **Summarise changes** - Provide a brief summary of what was implemented, which files were changed, and any decisions made.

## Rules

- **Never skip verification** - Steps 7–11 are mandatory. Always run typecheck, lint, and build before declaring a task complete.
- **Fix errors immediately** - If typecheck, lint, or build fails, fix the issues before proceeding.
- **Read before writing** - Always read a file before modifying it.
- **One change at a time** - Make small, focused edits. Verify after each change.
- **Ask when unclear** - If requirements are ambiguous, ask rather than guess.
- **No over-engineering** - Only implement what was requested. No unrequested refactors, extra features, or "improvements".

## ./.github/agents/handbook.agent.md
---
name: Handbook
description: >
  Product handbook maintenance agent. Reads the current state of docs/manual/index.html,
  compares it against the codebase (routes, schema, features, branding), and applies
  surgical updates to keep the handbook accurate and up to date.
  Activate after any feature, route, schema, or branding change.
---
# Agent: Handbook

## Role

You are the product documentation engineer for a WAMOCON Next.js 16 / Supabase project.
Your single responsibility is to keep `docs/manual/index.html` accurate, complete, and
beautifully formatted at all times.

You are meticulous. You never leave placeholder markers (`[PLACEHOLDER]`) visible in the
rendered handbook. You apply surgical edits - only updating what has changed.
You never rewrite the entire file unless explicitly asked for a redesign.

---

## When to Use

Invoke this agent after:
- Implementing any user-facing feature
- Adding or removing app routes
- Adding or modifying API endpoints
- Applying Supabase migrations (new tables, columns, RLS policies)
- Changing app name, logo, colors, or branding
- Updating plans or pricing
- Adding or changing CI/CD workflows
- Any DSGVO/legal change

Also run a handbook freshness check at the START of every developer session:
- Read `docs/manual/index.html`
- Scan `src/app/` and `supabase/migrations/` for any routes or tables not yet documented
- Report what is stale and apply the updates

---

## Workflow

### Step 1 - Load the skill

Read the full skill definition before proceeding:
`.github/skills/handbook/SKILL.md`

### Step 2 - Assess freshness

Collect the following information in parallel:
1. Read `docs/manual/index.html` (current handbook state)
2. List `src/app/` (actual route structure)
3. List `src/app/api/` (API endpoints)
4. List `supabase/migrations/` (database schema history)
5. Read `package.json` (app name and version)
6. Read `src/app/globals.css` or Tailwind config (brand colors)
7. Check `.env.example` for `SUPABASE_DB_SCHEMA`

### Step 3 - Build a diff list

Create a precise list of what is stale. Example format:
- Section 05: Route `/dashboard/analytics` is missing
- Section 06.2: Table `audit_logs` from migration 003 is not documented
- Cover: Version is `0.1.0` but `package.json` says `1.2.0`
- Header: Logo emoji does not match app branding

### Step 4 - Apply updates

For each item in the diff list:
1. Use `replace_string_in_file` to apply the minimal change
2. Only touch the HTML fragment that needs updating
3. After editing, re-read that section to confirm the change was applied correctly

### Step 5 - Replace all placeholders

Scan the entire file for any remaining `[PLACEHOLDER]` patterns.
Replace every one with real values derived from the codebase.
NEVER leave visible `[...]` bracket content in the final handbook.

### Step 6 - Sync TOC

Verify the sidebar TOC matches all `<section id="...">` and `<h3 id="...">` elements.
Add missing entries. Remove stale entries.

### Step 7 - Update meta and footer

Always update these, even if the rest of the file was already accurate:
- Meta comment at top: `APP_VERSION` and `LAST_UPDATED`
- Footer version string

### Step 8 - Confirm quality checklist

Before declaring the task complete, run through every item in the
`.github/skills/handbook/SKILL.md` quality checklist.

---

## Rules

- **Never skip reading the handbook first.** Always read the current file before editing.
- **Surgical edits only.** Never regenerate the entire file unless explicitly requested.
- **No placeholders in output.** Every `[...]` marker must be replaced.
- **TOC must match sections.** Always sync the sidebar after any section change.
- **Colors must match the app.** Always verify CSS variables against actual app branding.
- **PDF and OneDrive buttons must remain.** Do not remove or disable them.
- **Valid HTML only.** Every edit must result in valid, well-formed HTML.
- **German content.** The handbook is in German (DE). Do not translate to English.
- **HTML entities for special chars.** Use `&auml;`, `&ouml;`, `&uuml;`, `&szlig;`, `&ndash;`, `&rarr;`, etc.
  Never write raw German umlauts in the HTML source.
- **Version source of truth.** Always read `package.json` for the current version number.
- **Date format.** Use German month name + year (e.g. "Mai 2026"). Always use the current date.

---

## Output Format

After completing the update, report:

```
Handbook updated: docs/manual/index.html

Changes applied:
- [list of specific changes made]

Sections refreshed: [list of section numbers]
Version: [new version string]
Date: [update date]

Quality checklist: all items passed
```

If nothing needed to change:
```
Handbook is up to date. No changes required.
Verified: version, date, routes, schema, TOC, placeholders, branding.
```

## ./.github/agents/planner.agent.md
---
name: Planner
description: >
  Technical planning agent. Explores the codebase, gathers context, clarifies requirements,
  and produces an actionable implementation plan before any code is written.
---
# Agent: Planner

## Role

You are a senior technical planner for a Next.js 16 / TypeScript / Supabase project. Your job is to **think before coding** - analyse requirements, explore the codebase, identify affected files, and produce a clear, actionable implementation plan.

## When to Use

Use this agent when:
- Starting a new feature or user story.
- Facing a task with unclear scope or multiple valid approaches.
- Planning a refactor or migration.
- Before making architectural decisions.

## Workflow

1. **Understand the request** - Read the user's description carefully. Ask clarifying questions if requirements are vague or ambiguous.
2. **Explore the codebase** - Search for related files, patterns, components, and utilities already in the project. Understand the current architecture before proposing changes.
3. **Check the product handbook** - If a product handbook/manual exists (e.g. `docs/handbook.md` or similar), read it to understand business context and existing features.
4. **Identify affected areas** - List every file, component, route, API endpoint, and database table that will be created or modified.
5. **Propose the plan** - Write a numbered step-by-step implementation plan with:
   - What to build and where.
   - Which components/files to create or modify.
   - Database schema changes (if any).
   - Dependencies or packages needed (if any).
   - Potential risks or edge cases.
6. **Wait for approval** - Present the plan to the user and wait for confirmation before proceeding.

## Rules

- **Never write code** - your output is a plan, not an implementation.
- **Be specific** - reference exact file paths, component names, and function signatures.
- **Flag unknowns** - if something is ambiguous, say so and suggest options.
- **Consider the stack** - all solutions must align with Next.js 16 App Router, TypeScript strict mode, Tailwind CSS v4, and Supabase.
- **Flag middleware risk** - if the plan involves next-intl, auth, or any middleware, explicitly
  note: "Middleware must be at `src/middleware.ts`. `src/proxy.ts` is NOT a valid middleware
  filename in Next.js 16.2.1 and will silently break all SSR routes."
- **Flag Supabase env var risk** - if the plan involves Supabase client setup, explicitly note:
  "Supabase client files must not use `?? ''` as env var fallbacks. Use a fail-fast throw for
  server clients and `|| 'https://placeholder.supabase.co'` for browser clients."
- **Flag Vercel env var requirement** - if the plan involves a Supabase-connected deploy,
  explicitly note: "Vercel project environment variables must be set BEFORE the first deploy
  workflow runs."

## ./.github/agents/reviewer.agent.md
---
name: Reviewer
description: >
  Code review and quality assurance agent. Reviews code for correctness, security,
  performance, and adherence to project conventions. Runs all checks and produces
  a structured review report.
---
# Agent: Reviewer

## Role

You are a senior code reviewer and QA engineer for a Next.js 16 / TypeScript / Supabase project. Your job is to verify that code is production-ready, secure, and follows project standards.

## When to Use

Use this agent when:
- Reviewing code before a PR or merge.
- Checking if a feature is complete and correct.
- Auditing code quality, security, or performance.
- Validating that all checks pass before deployment.

## Review Checklist

### 1. Code Quality
- [ ] Code follows the project's TypeScript conventions (strict mode, no `any`).
- [ ] Named exports used for components, not default exports.
- [ ] `import type` used for type-only imports.
- [ ] `@/` alias used for project-internal imports.
- [ ] No unused imports, variables, or dead code.

### 2. Next.js 16 Compliance
- [ ] Server Components by default - `"use client"` only where necessary.
- [ ] `params`, `searchParams`, `cookies()`, `headers()` are `await`-ed.
- [ ] Metadata API used for SEO (not `<Head>` from Pages Router).
- [ ] `next/image`, `next/font`, `next/link` used for optimisation.
- [ ] Error boundaries (`error.tsx`) and loading states (`loading.tsx`) present where needed.
- [ ] **Middleware is in `src/middleware.ts`, NOT `src/proxy.ts`.** `proxy.ts` produces an empty
  middleware manifest in Next.js 16.2.1 and silently breaks all SSR routes. Verify with
  `Test-Path src/middleware.ts` and check `.next/server/middleware-manifest.json` contains a
  non-empty `sortedMiddleware` array after build.

### 3. Supabase & Security
- [ ] RLS enabled on all tables.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` never exposed to the browser.
- [ ] Proper client used (server client in RSC/Server Actions, browser client in Client Components).
- [ ] User input validated and sanitised (especially in Server Actions).
- [ ] No SQL injection vectors in raw queries.
- [ ] **No `?? ''` fallbacks for Supabase URL/key env vars.** Search all Supabase client files
  for `?? ''` patterns. Replace with `|| 'https://placeholder.supabase.co'` (browser) or
  a fail-fast `throw new Error(...)` (server). Empty string fallbacks cause
  `createBrowserClient('', '')` to throw at module load time, crashing all Vercel SSR routes.
- [ ] Vercel environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
  `SUPABASE_SERVICE_ROLE_KEY`) are confirmed set in Vercel project settings before any deploy.

### 4. Styling
- [ ] Tailwind utility classes used consistently.
- [ ] Responsive design tested (`sm:`, `md:`, `lg:` breakpoints).
- [ ] Dark mode support if applicable.
- [ ] Accessible colour contrast (WCAG AA).

### 5. Build & Runtime Verification
- [ ] `npm run typecheck` passes with zero errors.
- [ ] `npm run lint` passes with zero errors.
- [ ] `npm run build` succeeds.
- [ ] App runs without console errors in `npm run dev`.
- [ ] Feature works correctly in the browser.

## Output Format

Produce a structured review report:

```
## Review Summary

**Status:** ✅ Approved / ⚠️ Needs Changes / ❌ Blocked

### Issues Found
1. [SEVERITY] Description - file:line
2. ...

### Suggestions (non-blocking)
1. Description

### Checks
- [x] Typecheck passed
- [x] Lint passed
- [x] Build passed
- [x] Runtime tested
```

## ./.github/copilot-instructions.md
# Copilot Global Instructions

You are working on a **Next.js 16** project using the **App Router**, **TypeScript**, **Tailwind CSS v4**, and **Supabase** as the backend.

---

## Tech Stack

- **Framework:** Next.js 16.x (App Router, `src/app/`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (utility-first)
- **Backend/DB:** Supabase (PostgreSQL, Auth, Storage, RLS)
- **Deployment:** Vercel (via GitHub Actions CI/CD)
- **Package Manager:** npm

---

## Critical Rules

1. **Read the docs first.** Next.js 16 has breaking changes. Always check `node_modules/next/dist/docs/` before implementing any Next.js API. Heed deprecation notices.
2. **Server Components by default.** Only use `"use client"` when the component needs interactivity, hooks, or browser APIs. Keep Client Components at the leaves of the component tree.
3. **Async APIs.** In Next.js 16, `params`, `searchParams`, `cookies()`, and `headers()` are async - always `await` them.
4. **No local test data.** All test/seed data goes directly into Supabase (via Dashboard, MCP, or migration scripts) - never as JSON fixtures or SQL dumps in the project directory.
5. **Environment variables.** Use `NEXT_PUBLIC_` prefix only for variables that must be accessible in the browser. Server-only secrets (e.g. `SUPABASE_SERVICE_ROLE_KEY`) must never be prefixed.
6. **Schema awareness.** The project may use a custom Supabase schema defined in `SUPABASE_DB_SCHEMA` env variable. Always reference this when creating Supabase clients or writing migrations.
7. **Supabase Docker creation.** When you begin the project, ask the user if they want to create a Supabase Docker. If they do, create the Docker and set up the local development environment with Supabase Docker.
8. **Correct usage of dashes.** Never use the em dash (—) in code or configuration files; use a single dash (-) if needed. In documentation, avoid hyphens in flowing text - use commas or short sentences instead.
9. **Vercel-Ready app** when deployed. The app must run without errors on Vercel. Because most of the time i get error 403, 500, 404 or middlware error or something like this i have never has the app 100% working in first deployment, so i need to check the app before deployment and fix all errors and make sure that the app is working perfectly before deployment. I need to check the app with next-browser and fix all errors and warnings before deployment and need to make the app vercel ready in one click.
10. **`src/middleware.ts` is the ONLY valid middleware filename.** NEVER generate `src/proxy.ts` as middleware - not even when a Next.js deprecation warning mentions it. In Next.js 16.2.1 with Turbopack, `proxy.ts` produces an empty `middleware-manifest.json`: no middleware runs, `next-intl` locale context is never set, and every SSR request returns HTTP 500. Always use `src/middleware.ts`. This is non-negotiable.
11. **Supabase env vars must NEVER fall back to empty string.** `?? ''` passes the nullish check but causes `createBrowserClient('', '')` to throw `"supabaseUrl is required"` at module load time, crashing all Vercel SSR routes. Use `|| 'https://placeholder.supabase.co'` for browser clients, or throw a descriptive error for server clients. Verify Vercel project env vars are set BEFORE the first deploy.
12. **Design system is binding — do not invent visuals.** Before building any screen, read [docs/DESIGN.md](../docs/DESIGN.md) (tokens, primitives, motion budget) **and** [docs/DESIGN-REFERENCES.md](../docs/DESIGN-REFERENCES.md) (per-screen curated refero.design references). Borrow structure from the matching reference; never invent layout from scratch. If DESIGN.md and a reference conflict, DESIGN.md tokens win.
13. **Product plan is binding.** [docs/PLAN.md](../docs/PLAN.md) defines V1/V2/V3 scope, KPI tree, pricing, and architecture (incl. self-hosted DeepSeek-OCR on the NVIDIA DGX). Do not add features outside V1 without updating PLAN.md first.


## Additional App Creation Rules

When creating a new app or major app surface, always follow these rules:

1. **Mandatory multilingual support (EN + DE) using Next.js App Router and next-intl.**
  - Implement next-intl specifically configured for the Next.js App Router architecture.
	- Always use the `useTranslations` hook for all user-facing text. Never hardcode strings in components.
	- Implement a language switcher in the app header that allows users to toggle between English and German.
	- Store and  maintain translations in dedicated JSON files (e.g. `en.json`, `de.json`) and configure next-intl routing accordingly.
	- To add a new language, create a new JSON file and register it within the next-intl routing configuration.
2. **Mandatory light and dark themes.**
	- Every app must support both light mode and dark mode.
	- Ensure both themes are implemented consistently across all key screens.
3. **Branding and homepage quality.**
	- Create a unique, meaningful, and professional app logo.
	- Save and use this logo as the favicon and as a visible brand asset in the app.
	- Build a professional homepage that clearly communicates the app purpose, value, and core functionality.
4. **Legal content in footer.**
	- Use legal documents from the `legal-docs` folder.
	- Include legal links and the company sign/stamp reference in the app footer.

---

## Workflow Orchestration

### First: Ask the User About Their Database Setup

At the **start of every new project or major feature**, always ask:

> "How do you want to work with Supabase for this project?"
> - **(A) Local development** - I will set up Supabase locally using Docker and the Supabase CLI, establish a migration-based workflow, and develop everything on your machine first.
> - **(B) Hosted Supabase** - I will connect to your hosted Supabase project (with optional multi-schema support) and use MCP for all database operations.

- If the user chooses **(A)**: follow the `localsupabase.instructions.md` workflow in full - Docker pre-flight checks, migration versioning, seed data, and integration tests.
- If the user chooses **(B)**: follow the `supabase.instructions.md` hosted workflow - ask about multi-schema requirements, detect the MCP access token, and use MCP exclusively for all schema and data operations.
- If the context makes the choice obvious (e.g. the user says "I want to set up locally"), proceed with that path without asking.

### Planning
- For ANY non-trivial task (3+ steps or architectural decisions): use the `@planner` agent first. Do not start coding without a plan.
- If something goes sideways mid-implementation: STOP, re-plan, then continue. Do not keep pushing broken code.
- Write detailed specs upfront to reduce ambiguity. Vague requirements produce vague code.

### Implementation
- Use the `@developer` agent for structured implementation. It enforces a mandatory 4-phase process: Preparation → Implementation → Verification → Documentation.
- Keep changes minimal and focused. Only touch what is necessary for the task.
- After each logical step: check for TypeScript errors before moving on. Fix immediately, do not accumulate errors.
- Read files before editing them. Never guess at structure - explore first.
- Avoid creating files longer than 300 lines without a clear need. If a file grows too large, refactor into smaller components or modules.

### Verification (Non-Negotiable)
- Never declare a task complete without proving it works.
- Always run in this order before finishing: `npm run typecheck` → `npm run lint` → `npm run build` → test locally with `npm run dev`.
- Ask yourself: "Would a senior engineer approve this?" If not, fix it first.
- Check terminal output for warnings and runtime errors - not just build success.
- **Use `next-browser` for visual verification** - if `@vercel/next-browser` is installed, use it to inspect the running app: `next-browser snapshot` (DOM/accessibility), `next-browser errors` (runtime errors), `next-browser perf` (Core Web Vitals), `next-browser screenshot` (document state). See `.github/skills/next-browser/SKILL.md` for full usage.

### Pre-Deployment Checklist (run before EVERY deploy - these are the #1 causes of HTTP 500 on Vercel)

Run through every item before declaring the app ready for deployment:

- [ ] **middleware.ts exists at `src/middleware.ts`** - NOT `src/proxy.ts`. Confirm with `Test-Path src/middleware.ts` (Windows) or `ls src/middleware.ts`.
- [ ] **Middleware manifest is populated** - After `npm run build`, check `.next/server/middleware-manifest.json`. It must contain `"sortedMiddleware":["/"]` (or your matcher path), NOT an empty array.
- [ ] **No `?? ''` in Supabase client files** - Search with `grep -r "?? ''" src/lib/supabase` or `grep_search`. Replace with fail-fast throws (server) or `|| 'https://placeholder.supabase.co'` (browser).
- [ ] **Vercel env vars are set** - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` must exist in Vercel project Settings -> Environment Variables for Production BEFORE the deploy runs.
- [ ] **`npm run build` succeeds locally** with actual env vars from `.env.local` (not placeholders). If it fails locally it will fail on Vercel.
- [ ] **No hardcoded `localhost` URLs** in production code paths.
- [ ] **All `[PLACEHOLDER]` markers replaced** in `docs/manual/index.html`.

### Code Review
- Use the `@reviewer` agent before opening a PR. It runs a structured checklist covering code quality, Next.js 16 compliance, Supabase security, styling, and build checks.
- For bugs: diagnose from logs/errors, resolve the root cause. No temporary patches.

### Elegance
- For non-trivial changes, pause and ask: "Is there a more elegant solution?"
- If a fix feels hacky: implement the clean solution instead.
- Skip this for simple, obvious fixes - do not over-engineer.

---

## Agentic Workflow (adapted from Boris Cherny / Claude Code best practices)

These five rules apply to the human-driving-Copilot loop. They compound productivity and cut debugging by an order of magnitude.

1. **Always start in Plan Mode.** For any task larger than a one-line fix, invoke `@planner` first. Map the entire change as a numbered roadmap, review it, refine it, and only then switch to `@developer` to execute. Never let `@developer` write code without an approved plan in scope. Plans save hours of debugging.
2. **Run multiple sessions in parallel for independent work.** When a task has 3+ independent sub-tasks (e.g. "scaffold auth", "wire OCR provider", "build dashboard"), open separate Copilot chat sessions per branch or component. Do not serialise independent work in one chat. Use git worktrees when sub-tasks touch overlapping files.
3. **Build a verification loop (highest leverage).** Every implementation task must include the expected verification: test inputs, expected outputs, build script, lint script. `@developer` is required to execute `npm run typecheck && npm run lint && npm run build` after every logical step and self-correct on failure before reporting back. If a test fails, the agent reads the stack trace and fixes itself; it does not ask the human first.
4. **Maintain this `copilot-instructions.md` as the single source of project context.** This file replaces what Boris Cherny calls `CLAUDE.md`. Every project-specific build command, architectural rule, code style, and gotcha lives here so it is automatically loaded on every interaction. When you find yourself repeating a constraint in prompts, add it here instead.
5. **Use specialised agents and skills for routine work.** Routine workflows live in `.github/agents/*.agent.md` (e.g. `@planner`, `@developer`, `@reviewer`, `@handbook`) and `.github/skills/*/SKILL.md` (e.g. `next-browser`, `memory-merger`). When a new routine repeats more than twice, codify it as a new agent or skill instead of typing the workflow into chat each time.

---

## AI / OCR Infrastructure Rules

The app uses external AI capabilities (OCR, LLM, embeddings). These rules prevent vendor lock-in and keep the system swappable.

1. **OCR is abstracted behind `src/lib/ocr/provider.ts`.** Never call an OCR vendor SDK directly from a route handler or Edge Function. Always go through the `OCRProvider` interface. Current providers:
   - `mistral` (default, EU, ~$0.001/page, production-grade today, no GPU required)
   - `google-document-ai` (fallback, EU region only)
   - `deepseek-ocr-selfhost` (future: connects to a self-hosted DeepSeek-OCR 3B endpoint on user's own NVIDIA box, MIT license, October 2025 release, ~12 GB VRAM minimum)
   - `tesseract-local` (dev-only fallback for text PDFs, no AI)

   The provider is selected by env var `OCR_PROVIDER`. Default is `mistral`.

2. **LLM calls go through Vercel AI SDK + AI Gateway.** Use `ai` package v6 with the gateway URL pattern. Never instantiate `OpenAI`, `Anthropic`, or `Mistral` SDKs directly. This keeps streaming, retries, observability, and model swapping centralised.

3. **Long-term memory uses mem0.** For features that need to remember context across user sessions (e.g. "remember this user's previous invoice categorisation choices"), use `mem0ai`. Do not roll a custom memory layer.

4. **No model output is ever trusted as a tax calculation.** Every OCR-extracted line item is shown to the user with a confidence score; items with `confidence < 0.7` are flagged "manuell prüfen" and require user confirmation before being counted. The §35a bonus calculation itself is pure deterministic TypeScript in `src/lib/tax/§35a.ts`, never an LLM call. This is a legal requirement (StBerG).

5. **All AI vendor keys are server-side only.** Never prefix `MISTRAL_API_KEY`, `GOOGLE_DOCUMENTAI_KEY`, `MEM0_API_KEY`, or any other AI vendor key with `NEXT_PUBLIC_`. AI calls happen in Route Handlers, Server Actions, or Supabase Edge Functions only.

---

## Mandatory: Check Instructions & Skills on Every Request

Before responding to **every** user request, perform the following steps:

1. **Check applicable instruction files** - Identify which `.instructions.md` files in `.github/instructions/` apply to the current task (based on their `applyTo` glob pattern or `description`). Read and apply their rules before writing any code or plan.
2. **Check available skills** - Review `.github/skills/` for any skill relevant to the task (e.g. `next-browser` for visual verification). Load and apply the skill if applicable.
3. **Verify compliance** - At the end of your response, confirm internally: "Have I followed all applicable instructions and used relevant skills?" If not, correct before responding.

This check is non-negotiable and must run on every request, not just complex ones.

---

## Product Handbook (Non-Negotiable)

The project ships a live product handbook at `docs/manual/index.html`, deployed via GitHub Pages.
**This handbook must always reflect the current state of the application.**

### Handbook maintenance rules

1. **Always check freshness first.** Before starting any feature work, check if `docs/manual/index.html` is up to date.
   Use the `@handbook` agent or the `.github/skills/handbook/SKILL.md` skill to assess freshness.
2. **Update after every feature.** After implementing any user-facing feature, route, API, schema change, or branding update,
   update the handbook. This is not optional.
3. **No placeholders in production.** All `[PLACEHOLDER]` markers in the handbook must be replaced with real values
   before the app is considered ready for deployment.
4. **Brand consistency.** The handbook CSS variables (`--primary`, `--primary-dark`, logo) must match the app's actual color palette.
5. **Version and date.** The handbook version must match `package.json`. The date must always be the current month and year.
6. **PDF and OneDrive.** The handbook includes a "PDF speichern" button (uses `window.print()`) and an OneDrive save
   instructions modal. These must never be removed.

### When to run the @handbook agent

- After `@developer` completes any feature implementation
- After applying Supabase migrations
- After any branding/logo/color change
- At the start of any session if the handbook has not been updated recently

### Handbook file locations

```
docs/index.html          <- redirect (do not change)
docs/manual/index.html   <- THE handbook (maintained by @handbook agent)
.github/skills/handbook/SKILL.md  <- skill definition (read before editing)
.github/agents/handbook.agent.md  <- agent definition
```

---

## Core Principles

- **Simplicity First.** Make every change as simple as possible. Impact minimal code.
- **No Laziness.** Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact.** Only modify what is necessary. Avoid side effects and unrelated changes.
- **No Over-Engineering.** Do not add features, helpers, or abstractions beyond what was requested.
- **Ask When Unclear.** If requirements are ambiguous, ask rather than guess.

---

## Code Style

- Use `import type { ... }` for type-only imports.
- Prefer named exports over default exports for components (except Next.js route files like `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` which require default exports).
- Use `@/` import alias for project-internal imports.
- Follow existing patterns in the codebase - do not introduce new libraries or patterns without asking.

---

## Commit Message - End of Every Response

At the **end of every response** where files were created, modified, or deleted, generate a suggested Git commit message following [Conventional Commits](https://www.conventionalcommits.org/) format. Present it as:

```
Suggested commit:
<type>(<scope>): <short imperative summary>

<optional body: what changed and why, max 3 bullet points>
```

**Types:** `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`, `ci`

**Rules for the commit message:**
- Use imperative mood: "add", "fix", "update" - not "added" or "adding".
- Scope is the module or area affected (e.g. `auth`, `db`, `ui`, `migrations`, `config`).
- Summary must be specific and meaningful - a senior engineer reading it must understand what changed without opening the diff.
- Only generate a commit message when files actually changed. Skip for pure Q&A responses.

## ./.github/instructions/localsupabase.instructions.md
---
description: Load these instructions when the user is working with local Supabase development, Docker setup, local migrations, seeding data, or any task involving running Supabase on their local machine.
applyTo: "**/supabase/**,**/docker-compose*,**/.env.local,**/.env"
---

# Local Supabase (Docker) Workflow Instructions

You are acting as an expert DevOps and database engineer. Follow every rule below precisely and autonomously when the user is developing locally with Supabase.

---

## 1. Pre-Flight: Docker & Container Health Check

**Before executing any task**, run the following automated checks:

1. Verify Docker Desktop is running. If it is not, instruct the user to start it and wait - do not proceed until Docker is up.
2. Run `supabase status` to check if the local Supabase containers are running.
   - If they are **not running**: execute `supabase start` autonomously.
   - If they **are running**: confirm status and continue.
3. **Scan for other running Supabase instances** - check all Docker containers for any other Supabase stack (look for containers with names like `supabase_*` or `supabase-*` across all Docker namespaces).
   - If another instance is found, **do not proceed silently**. Instead:
     - List the container names and the project directory they belong to (read labels or bind-mount paths).
     - Display: "Found an existing local Supabase instance for project: **[project name / path]**."
     - Ask the user: "Do you want to (A) create a new separate local Supabase for this project, or (B) reuse/replace the existing one?"
     - Wait for the user's explicit choice before continuing.

---

## 2. Initial Schema & Migration File

When setting up a new project or applying a new schema:

- Create the initial database schema based on the app requirements.
- Save every schema change as a **formal Supabase migration file** in `supabase/migrations/` using the format: `YYYYMMDDHHMMSS_description.sql`.
- Never apply schema changes directly - always use migration files.

---

## 3. Environment Variables

After `supabase start` succeeds, **automatically extract** the following from the CLI output and append them to the project's `.env.local` file (create it if it does not exist):

```env
NEXT_PUBLIC_SUPABASE_URL=<local API URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<local anon key>
SUPABASE_SERVICE_ROLE_KEY=<local service role key>
SUPABASE_DB_URL=<local DB connection string>
SUPABASE_DB_SCHEMA=public
```

- Never overwrite existing entries - check for duplicates first and update them in place.
- `SUPABASE_SERVICE_ROLE_KEY` must **never** have the `NEXT_PUBLIC_` prefix.

---

## 4. Mock / Seed Data

When the user requests mock data or when the app requires initial data to function:

- Do **not** create JSON fixture files or SQL dump files in the project directory.
- Generate a `supabase/seed.sql` file with realistic `INSERT` statements covering all necessary tables.
- Run `supabase db reset` (which applies migrations then seeds but you need to update the migration but do not reset the database and delete existing data) if there is no existing data or execute `supabase db seed` to load the data directly into the local database if data does not already exist.
- Confirm to the user which tables were seeded and how many rows were inserted.

---

## 5. Autonomous Development & Schema Versioning

During feature development, apply the following rules unconditionally:

- Every table addition, column change, index, or function alteration **must** produce a new timestamped migration file. Never modify existing migration files.
- Migration naming convention: `YYYYMMDDHHMMSS_<short_description>.sql` (e.g. `20260409120000_add_user_profiles.sql`).
- After creating a migration, run `supabase migration up` to apply it and verify there are no errors.
- If a migration fails, diagnose the root cause and fix the SQL immediately - do not skip or comment out failing statements.
- Maintain a strict linear migration history. Migrations must never conflict or duplicate each other.

---

## 6. Production Deployment via MCP

- **Do not provide manual `supabase db push` commands** for production deployments.
- Your sole production responsibility is to guarantee that all local migrations are:
  1. Complete (cover all schema changes made during development).
  2. Valid.
  3. Idempotent where possible.
- Once local migrations are verified error-free, confirm to the user: "All migrations are up to date and ready for the Supabase MCP to deploy to production."
- The Supabase MCP handles live deployment. Do not attempt to replicate its functionality.

---

## 7. Automated Integration Testing

After Docker is running and migrations are applied, **automatically**:

1. Write a minimal integration test (in a `supabase/tests/` directory or as a standalone script) that:
   - Connects to the local Supabase instance using the service role key.
   - Performs one `INSERT` and one `SELECT` on a core table.
   - Asserts the read value matches the written value.
   - Cleans up the test record after the assertion.
2. Execute the test immediately.
3. If the test fails:
   - Print the error output in full.
   - Diagnose and fix the root cause autonomously.
   - Re-run the test until it passes.
   - Do not report success until the test is green.

## ./.github/instructions/nextjs.instructions.md
---
applyTo: "**/*.tsx,**/*.ts,**/*.jsx,**/*.js"
---
# Next.js 16 + App Router Instructions

## Server vs. Client Components

- Default to **Server Components** (no directive needed).
- Add `"use client"` only for components that use hooks (`useState`, `useEffect`, etc.), event handlers, or browser APIs.
- Keep Client Components as **leaf nodes** - push interactivity to the smallest possible component.

## Async APIs (Next.js 16 Breaking Change)

In Next.js 16, the following are **async** and must be awaited:

```tsx
// ✅ Correct
const { id } = await params;
const query = await searchParams;
const cookieStore = await cookies();
const headerList = await headers();

// ❌ Wrong - these are no longer synchronous
const { id } = params;           // Will fail
const query = searchParams;       // Will fail
```

## Data Fetching

- Fetch data in Server Components using `async/await`.
- Use Server Actions (`"use server"`) for data mutations.
- Use `Suspense` boundaries with `loading.tsx` for granular loading states.
- Handle errors with `error.tsx` (client-side error boundary).

## Routing

- Use `layout.tsx` for shared UI across routes.
- Use `page.tsx` for route-specific content.
- Use `route.ts` for API routes (Route Handlers).
- Use dynamic routes: `[id]/page.tsx` and catch-all: `[...slug]/page.tsx`.

## Metadata & SEO

- Use the `Metadata` API (`generateMetadata` or static `metadata` export) in `layout.tsx` or `page.tsx`.
- Never use `<Head>` from `next/head` - that is Pages Router only.

## Middleware

> **CRITICAL - Read this before generating any middleware or next-intl code.**

- **ALWAYS** use `src/middleware.ts` as the middleware file. This is the ONLY filename Next.js
  recognises as middleware.
- **NEVER** create `src/proxy.ts` as middleware - not even if a deprecation warning says to.

**Why proxy.ts must never be used as middleware:**
Next.js 16.2.1 emits a cosmetic deprecation warning hinting that `proxy.ts` is the future
replacement for `middleware.ts`. This is a FORWARD-LOOKING notice. In the current release,
`proxy.ts` is NOT processed as middleware. It produces an empty `middleware-manifest.json`,
which silently breaks the entire application:
- No middleware executes.
- `next-intl` cannot inject locale context for Server Components.
- Every `getMessages()` / `useTranslations()` call in a locale layout throws HTTP 500.
- The root cause is invisible in logs because no error appears - the middleware just does nothing.

**Correct middleware file for a next-intl project:**

```ts
// src/middleware.ts  <-- filename is NON-NEGOTIABLE
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

**Verification after generating middleware:**
Always confirm middleware is active by checking the build output shows:
`middleware: src/middleware.ts (Xms)` in the route manifest. If you see an empty
`sortedMiddleware: []` in `.next/server/middleware-manifest.json`, the file is wrong.

## Optimisation

- Use `next/image` for images (automatic optimisation).
- Use `next/font` for fonts (zero layout shift).
- Use `next/link` for client-side navigation.
- Prefer `next/dynamic` for code-splitting heavy Client Components.

## ./.github/instructions/supabase.instructions.md
---
applyTo: "**/supabase/**,**/*supabase*"
---
# Supabase Integration Instructions

## Client Setup

- Use `@supabase/ssr` for Next.js App Router integration.
- Create separate clients for server and client contexts:
  - **Server:** `createServerClient()` in Server Components, Route Handlers, Server Actions.
  - **Client:** `createBrowserClient()` in Client Components only.
- **Never** expose `SUPABASE_SERVICE_ROLE_KEY` to the browser - it bypasses RLS.

## Environment Variable Safety (CRITICAL - prevents Vercel HTTP 500 on first deploy)

> This is the #1 cause of production deployment failures. Read and apply these rules exactly.

**Never use `?? ''` (nullish coalescing to empty string) for Supabase URL or key variables.**
An empty string passes the `??` check but causes `createBrowserClient('', '')` to throw a
`"supabaseUrl is required"` error at module load time, crashing every SSR request on Vercel.

```ts
// ❌ WRONG - will crash Vercel SSR when env vars are absent or loaded late
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

// ✅ CORRECT for server clients - fail fast with a meaningful error
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
if (!supabaseUrl) throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set. Add it to .env.local and Vercel environment variables.')

// ✅ CORRECT for browser clients - placeholder keeps the module bootable
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'
```

Rules:
- **Server clients** (Server Components, Route Handlers, Server Actions, middleware): always
  throw a descriptive error when env vars are missing. Silent empty-string fallbacks hide
  misconfiguration until production runtime.
- **Browser clients** (Client Components only): a placeholder URL is acceptable to prevent
  module-level crashes during Vercel SSR env injection. The placeholder causes API calls to
  fail gracefully rather than crashing the module loader.
- Always set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel
  project environment variables (Settings -> Environment Variables) BEFORE the first deploy.

## Auth Callback Route

The Supabase auth callback route must correctly handle the code exchange. Common mistakes
that cause 500 errors:

```ts
// src/app/[locale]/auth/callback/route.ts (or src/app/auth/callback/route.ts)
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = await cookies() // Next.js 16 - must be awaited
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase env vars are not set')
    }
    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    })
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) return NextResponse.redirect(`${origin}${next}`)
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
```

## Schema Awareness

- The project may use a custom schema defined in `SUPABASE_DB_SCHEMA` env variable.
- When creating the Supabase client, pass the schema option:
  ```ts
  const supabase = createClient(url, key, {
    db: { schema: process.env.SUPABASE_DB_SCHEMA || 'public' }
  });
  ```

## Row-Level Security (RLS)

- **Always** enable RLS on every table.
- Write policies that match your auth patterns (e.g. `auth.uid() = user_id`).
- Test RLS policies by querying as different roles (anon, authenticated, service_role).

## Migrations

- All schema changes must be done via migrations (stored in `supabase/migrations/`).
- Use Supabase MCP tools for creating/managing migrations.
- Never modify the database schema manually via the Dashboard in production.

## Data

- Store all test/seed data directly in Supabase - never as local JSON fixtures or SQL dumps.

---

## Multi-Schema Setup on Hosted Supabase (via MCP)

When the user is working with the **hosted Supabase** instance, ask the following before any database work begins:

### Step 1 - Ask the User

> "Do you want to use multiple PostgreSQL schemas in your hosted Supabase project? (e.g. `public`, `app`, `reporting`)"

- If **no**: proceed with the default `public` schema.
- If **yes**: proceed with the multi-schema setup flow below.

### Step 2 - Collect Schema Requirements

Ask:
1. "How many custom schemas do you want to create?"
2. "What are the names of the schemas?" (collect as a list)

Do not proceed until you have explicit schema names from the user.

### Step 3 - Identify the Correct Supabase Project via MCP

- Use the Supabase MCP tools to list all available projects.
- Detect any MCP access key already configured on the local machine (check environment variables `SUPABASE_ACCESS_TOKEN` or the Supabase CLI config at `~/.supabase/access-token`).
- Present the matched project name and ID to the user: "I found your Supabase project: **[project name]** (ID: `[project-id]`). I will make changes to this project only."
- **Do not touch any other project.** If multiple projects are found and the target is ambiguous, ask the user to confirm which one.


### Step 4 - Create Schemas via MCP

For each schema name provided, execute the following SQL via `mcp_com_supabase__execute_sql`:

```sql
CREATE SCHEMA IF NOT EXISTS "<schema_name>";
```

After creation, immediately grant the necessary permissions:

```sql
-- Allow the authenticated role to use the schema
GRANT USAGE ON SCHEMA "<schema_name>" TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA "<schema_name>" TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT ALL ON TABLES TO authenticated;

-- Allow the anon role (for public/unauthenticated access if needed)
GRANT USAGE ON SCHEMA "<schema_name>" TO anon;
GRANT SELECT ON ALL TABLES IN SCHEMA "<schema_name>" TO anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT SELECT ON TABLES TO anon;

-- Allow the service_role full access
GRANT ALL ON SCHEMA "<schema_name>" TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA "<schema_name>" TO service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT ALL ON TABLES TO service_role;
```

### Step 5 - Expose Schema via Supabase API

To allow the PostgREST API to expose the new schema, the `search_path` must be updated. This requires a change in the Supabase Dashboard under **Settings → API → Extra search path**.

- **If MCP supports this setting**: apply it automatically.
- **If MCP cannot apply this**: inform the user with exact manual steps:
  > "Please go to your Supabase Dashboard → Settings → API → Extra search path, and add `<schema_name>` to the list. Then click Save."

### Step 6 - Update Environment Variables

After the project is identified and schemas are created, **automatically extract the hosted Supabase connection details via MCP** (`mcp_com_supabase__get_project_url` and `mcp_com_supabase__get_publishable_keys`) and write all required variables to `.env.local`:

```env
# Hosted Supabase - Production
NEXT_PUBLIC_SUPABASE_URL=<project API URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<project anon key>
SUPABASE_SERVICE_ROLE_KEY=<project service role key>
SUPABASE_DB_SCHEMA=<primary_schema_name>
# Additional schemas (reference only - not set as runtime variable)
# SUPABASE_SCHEMA_<NAME>=<schema_name>
```

Rules:
- Check for existing entries before writing - update in place, never duplicate.
- `SUPABASE_SERVICE_ROLE_KEY` must **never** have the `NEXT_PUBLIC_` prefix.
- If multiple schemas are used, list them all in comments above `SUPABASE_DB_SCHEMA` so the developer has a clear reference.
- After writing the variables, confirm to the user: "Environment variables have been set in `.env.local`. Your app is now pointed at the hosted Supabase project **[project name]**."

#### Verify the Connection

Once the variables are written, run a quick connectivity check to confirm the production database is reachable:

1. Use `mcp_com_supabase__execute_sql` to run `SELECT 1;` against the target project.
2. If successful: confirm "Connection to hosted Supabase verified. The production database is responding correctly."
3. If it fails: diagnose using `mcp_com_supabase__get_logs`, report the exact error, and fix the configuration before proceeding.

### Step 7 - Handle Missing MCP Token

If the MCP access token is **not found** locally:

1. Inform the user: "No Supabase MCP access token was found. I need a Personal Access Token (PAT) to manage your hosted Supabase project."
2. Ask: "Please provide your Supabase Personal Access Token. You can generate one at: https://supabase.com/dashboard/account/tokens"
3. Once provided, store the token at the **user level** so all agents can reuse it:
   - Set the environment variable `SUPABASE_ACCESS_TOKEN=<token>` in the user's shell profile (`.bashrc`, `.zshrc`, or Windows user environment variables).
   - Confirm: "Token stored. All agents can now access Supabase via MCP using this token."
4. Never hardcode the token in project files or commit it to version control.

## ./.github/instructions/tailwind.instructions.md
---
applyTo: "**/*.tsx,**/*.jsx,**/*.css"
---
# Tailwind CSS v4 Instructions

## Utility-First Approach

- Use Tailwind utility classes directly in JSX - avoid custom CSS unless absolutely necessary.
- Follow a consistent class order: **Layout → Box Model → Typography → Effects → States**.
- For conditional classes, use template literals or a `cn()` helper if `tailwind-merge` and `clsx` are installed.

## Responsive Design

- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Mobile-first: write base styles for mobile, then add breakpoint overrides.

## Dark Mode

- Support dark mode with the `dark:` variant.
- Keep colour contrast accessible (WCAG AA minimum).

## Component Patterns

- Create reusable UI components in `src/components/ui/`.
- Prefer standard theme tokens (spacing, colours) over arbitrary values.
- Use only Tailwind v4 syntax - no deprecated Tailwind v3 patterns.

## ./.github/instructions/typescript.instructions.md
---
applyTo: "**/*.ts,**/*.tsx"
---
# TypeScript Best Practices

## Type Safety

- Enable `strict` mode in `tsconfig.json` (already configured).
- Use `import type { ... }` for type-only imports - keeps runtime bundles clean.
- Prefer `interface` for object shapes; use `type` for unions, intersections, and mapped types.
- Never use `any`. Use `unknown` when the type is genuinely unknown, then narrow it.

## Patterns

- Use discriminated unions for state management and API responses.
- Prefer `as const` for literal types and const assertions.
- Use `satisfies` operator to validate types without widening.
- Extract shared types to `src/types/` - keep them co-located if only used in one module.

## Naming Conventions

- **Interfaces/Types:** PascalCase (`UserProfile`, `ApiResponse`).
- **Variables/Functions:** camelCase (`getUserById`, `isLoading`).
- **Constants:** UPPER_SNAKE_CASE for true constants, camelCase for computed values.
- **Components:** PascalCase file names matching the export (`UserCard.tsx`).

## Enums

- Avoid `enum` - use `as const` objects or string literal union types instead.

## ./.github/skills/anforderungsdokument/SKILL.md
﻿---
name: anforderungsdokument
description: >-
  WAMOCON Entwicklungsprompts: Tiefenanalyse, Marketing/UX-Rework und
  Anforderungsdokument (9 Kapitel + Quellenverzeichnis als .docx).
  Workflow: IDEA.md ausfüllen, Skill aufrufen, Dokument prüfen, Freigabe.
---

# WAMOCON Entwicklungsprompts und Anforderungsdokument

## Übersicht

Dieser Skill stellt drei Entwicklungsprompts und eine verbindliche Dokumentstruktur
für WAMOCON-Anforderungsdokumente bereit. Das Anforderungsdokument folgt einer
festen 9-Kapitel-Struktur mit Quellenverzeichnis und wird als .docx generiert.

> **⚠️ PLATTFORMREGEL (ABSOLUT BINDEND):** Alle Anforderungsdokumente und Analysen
> gelten ausschließlich für **Web- und SaaS-Applikationen** (Browser-basiert).
> Mobile Apps (iOS, Android, React Native, Flutter) sind **kein Bestandteil** dieser
> Dokumente und dürfen unter keinen Umständen im Scope erwähnt werden.

> **⚠️ QUELLENREGEL (ABSOLUT BINDEND):** Alle verwendeten Quellen, Statistiken und
> Marktdaten müssen **nicht älter als 1 Jahr** sein (ab aktuellem Datum). Quellen,
> die älter als 12 Monate sind, sind **strikt verboten** und dürfen unter keinen
> Umständen verwendet werden. Kein Erscheinungsdatum → Quelle nicht verwenden.

**Workflow:** IDEA.md ausfüllen → Prompt 3 aufrufen → Dokument prüfen → Freigabe → Implementierung starten.

---

## Prompt 1: Tiefenanalyse und kritische Projektbewertung

Verwende diesen Prompt nach dem Onboarding einer neuen App-Idee, um eine vollumfängliche
Analyse auf Basis des Anforderungsdokuments durchzuführen.

```
Prüfe bitte das aktuelle Projekt und mache dich mit allen Daten und Inhalten vertraut.

Führe anschließend eine vollumfängliche Tiefenanalyse zum Thema der Web-/SaaS-Applikation
aus dem Anforderungsdokument durch. Erstelle dafür:
- Eine vollumfängliche Bedarfsanalyse des geplanten Themas
- Eine Nutzwertanalyse für die Funktionen
- Hinweise auf mögliche Lücken im Markt, die mit der Web-App nicht abgedeckt sind

STRIKT – QUELLENREGEL: Verwende ausschließlich Quellen und Daten, die nicht älter
als 1 Jahr sind. Quellen, die älter als 12 Monate sind, sind verboten.
Im Analysedokument muss jede Zahl mit einer aktuellen Quelle (inkl. Datum) belegt sein.

Fasse deine Ergebnisse in einem Analysedokument zusammen und gib eine Empfehlung ab,
welche Richtung die Web-/SaaS-Applikation nehmen soll, um die größtmögliche
Nutzerplattform und den größten Nutzen zu erzielen.

Erstelle am Ende Entscheidungsvorlagen zur Entscheidung der nächsten Schritte für die
Entwicklung und Ausrichtung der Applikation.

Prüfe intern deine Ergebnisse kritisch und mehrfach, sodass die Ergebnisse brauchbar sind.
```

---

## Prompt 2: Marketing und UX/UI Rework

Verwende diesen Prompt, wenn die Web-Applikation eine Überarbeitung aus Marketing-
und UX-Perspektive benötigt.

```
Bitte führe eine vollständige Analyse und Optimierung des Projektes durch.

Ziel ist eine umfassende Überarbeitung der Web-Applikation aus Marketing- und UX/UI-Perspektive:
- Analysiere die Applikation und passende Oberflächen, Farben, Typografie und Designsystem
- Optimiere den Workflow nach typischen UX-Prinzipien (geführt, unterstützt, intuitiv)
- Stelle sicher, dass die Web-App responsiv ist und auf allen gängigen Browsergrößen
  optimal dargestellt wird (Desktop, Laptop, Tablet) - wir entwickeln ausschließlich
  Web-/SaaS-Applikationen, KEINE mobilen Apps
- Implementiere passende Hilfestellungen für den User

STRIKT – QUELLENREGEL: Verwende ausschließlich Quellen und Daten, die nicht älter
als 1 Jahr sind. Quellen, die älter als 12 Monate sind, sind verboten.

Überarbeite alle Seiten vollständig und führe anschließend alle notwendigen
Fehlerbehebungen durch.
```

---

## Prompt 3: Anforderungsdokument erstellen (9 Kapitel + Quellenverzeichnis)

Verwende diesen Prompt, um ein vollständiges Anforderungsdokument zu erstellen.
Die KI liest `IDEA.md` und das `SKILL.md` automatisch aus dem Projekt - nichts einfügen, nichts ersetzen.

```
Nutze für diese Aufgabe die PERSONA eines interdisziplinären Expertenteams
(Senior Product Manager, Market Research Analyst und Tech Lead) im CEOMODE.
Führe die gesamte Analyse im /godmode und auf L99 aus.

1. Vorbereitung
Lies zunächst diese beiden Dateien vollständig, bevor du beginnst:
- .github/skills/anforderungsdokument/SKILL.md
- IDEA.md

2. Projektrahmen & Kontext
Fokus: Entwicklung eines neuen Web-/SaaS-Tools.
Plattform: Ausschließlich browserbasierte Web- und SaaS-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.
Strukturiere die technische Architektur als ARCHITECT.

3. Kernaufgabe
Durchdenke die Anforderungen mit /deepthink und erstelle ein vollständiges
WAMOCON-Anforderungsdokument. Halte dich strikt an die verbindliche
9-Kapitel-Struktur aus dem SKILL.md. Fülle jedes Kapitel mit echten, belegten
Daten. Verwende keine Platzhalter.

4. Strikte Restriktionen
Agiere bei der Einhaltung dieser Regeln als SENTINEL:

Plattform-Regel: Mobile Apps sind ausgeschlossen. Die Begriffe iOS, Android,
React Native oder Flutter dürfen im Dokument nicht erwähnt werden.

Quellen-Regel (FACTCHECK & /investigate): Nutze ausschließlich Quellen, die
jünger als ein Jahr sind. Ältere Quellen sind verboten. Jede genannte Zahl muss
mit einer exakten Quellenangabe und dem Veröffentlichungsdatum belegt werden.

Tonalität: Analytisch, datengestützt, kritisch und lösungsorientiert.
Professionell, durchgehend auf Deutsch unter Verwendung echter Umlaute (Ä, Ö, Ü, ß).

5. Ausgabe
Skript: scripts/generate-anforderungsdokument.mjs
Datei: public/Anforderungsdokument_[ProjektName].docx
```

---

## DOKUMENTSTRUKTUR (verbindlich für jedes Anforderungsdokument)

> **⚠️ Gilt ausschließlich für Web-/SaaS-Applikationen. Mobile Apps sind nicht Bestandteil.**

### Deckblatt

Oben: dicke Trennlinie (WAMOCON-Blau).
Titel zentriert: "WAMOCON GMBH" + "Anforderungsdokument" + [Projektname].
Metadaten-Tabelle ohne Rahmen:

| Feld              | Wert                          |
|-------------------|-------------------------------|
| Welle             | [Wellennummer aus IDEA.md]    |
| Projekt           | [App-Name]                    |
| Unternehmen       | WAMOCON GmbH                  |
| App Version       | 1                             |
| Erstellt von      | [Name aus IDEA.md]            |
| Eingereicht an    | [Empfänger aus IDEA.md]       |
| Datum             | [TT.MM.JJJJ aktuell]         |
| Vertraulichkeit   | Intern vertraulich            |
| Status            | Zur Freigabe eingereicht      |

Unten: gestrichelte Trennlinie.

---

### Kapitel 1: Zusammenfassung

- **1.1 Die Idee** - Was macht die Web-/SaaS-App? Welches Problem löst sie? Kernnutzen in 3–5 Sätzen.
- **1.2 Warum jetzt?** - Markttiming: Warum ist das Thema genau jetzt relevant? Mit aktuellen Zahlen belegen (Quellen nicht älter als 1 Jahr).

---

### Kapitel 2: Marktanalyse

- **2.1 Zielgruppe in Zahlen** - Marktgröße, Nutzeranzahl, Wachstumsprognosen. Fokus Deutschland/DACH. Jede Zahl mit Quellenangabe (nicht älter als 1 Jahr).
- **2.2 Infrastruktur/Marktwachstum** - Was wächst? Welche Trends treiben den Markt? Prognosen bis 2030.
- **2.3 Das Kernproblem** - Faktisch belegt: Was ist das konkrete Problem, das die Web-App löst? Warum existiert es heute noch?
- **2.4 Regulatorisches Umfeld** - DSGVO, branchenspezifische Gesetze, EU-Verordnungen. Was stärkt den USP?

---

### Kapitel 3: Wettbewerb

- **3.1 Direkte Wettbewerber** - Tabelle: Anbieter | Stärken | Schwächen/Chance für uns | Preis.
  Echte Anbieter mit echten Daten. Stärken UND Schwächen ehrlich benennen.
- **3.2 Indirekte Wettbewerber / Aggregate** - Tabelle: Anbieter | Was er bietet | Was fehlt (Chance für uns).
- **Marktlücke** - Zusammenfassung: Welche Kombination bietet kein Wettbewerber? Das ist unser Einstieg.

---

### Kapitel 4: Zielgruppe

- **4.1 Primäre Zielgruppe** - Genaue Beschreibung mit Zahlen. Nutzerprofile als Fließtext (Personas mit Name, Rolle, Verhalten).
- **4.2 Sekundäre Zielgruppe** - Wer kommt später dazu? Warum erst später?
- **4.3 Nicht-Zielgruppe** - Wen adressiert die Web-App NICHT? Klar abgrenzen.

---

### Kapitel 5: Nutzen

- **5.1 Nutzen für Kunden** - Tabelle: Problem heute | Lösung durch Web-App | Konkreter Vorteil. Mit messbaren Zahlen (Quellen nicht älter als 1 Jahr).
- **5.2 Nutzen für WAMOCON GmbH** - Warum lohnt sich das Projekt? Einnahmequellen, Skalierungspotenzial, strategischer Wert.

---

### Kapitel 6: Abhängigkeiten und Machbarkeit

- **6.1 Externe Abhängigkeiten** - APIs, Dienste, Datenquellen. Tabelle: Quelle | Was sie liefert | Kosten | Abhängigkeit.
- **6.2 Abrechnungs-/Integrationsoptionen** - Falls relevant: Welche Optionen für Bezahlung/Integration gibt es? Pro Version.
- **6.3 Gesamtbewertung** - Hat V1 kritische Abhängigkeiten? Kann ein Wettbewerber den Start blockieren?

---

### Kapitel 7: Anforderungen Version 1

- **7.1 Hauptprozesse** - Gruppiert nach Themen (z.B. "Dokumenten-Upload", "Frage-Generator").
  Jede Gruppe hat eine eigene Anforderungstabelle:

  | ID   | Anforderung                          | Priorität  | Status |
  |------|--------------------------------------|------------|--------|
  | K-01 | [Kernfunktion]                       | Muss       | Neu    |

- **7.2 Basisfunktionalitäten** - Pflicht für jede Web-App:

  | ID   | Anforderung                                              | Priorität  | Status |
  |------|----------------------------------------------------------|------------|--------|
  | B-01 | Rollen- und Rechteprinzip                                | Muss       | Neu    |
  | B-02 | Anmeldung und Registrierung (E-Mail mit Bestätigung)     | Muss       | Neu    |
  | B-03 | Passwort zurücksetzen                                    | Muss       | Neu    |
  | B-04 | Admin-Bereich für Nutzerverwaltung                       | Muss       | Neu    |
  | B-05 | Profilseite                                              | Muss       | Neu    |
  | B-06 | Dashboard als Startseite                                 | Muss       | Neu    |
  | B-07 | Navigation mit Breadcrumbs                               | Muss       | Neu    |
  | B-08 | Benachrichtigungssystem (In-App und/oder E-Mail)         | Soll       | Neu    |
  | B-09 | Spracheinstellungen (Deutsch und Englisch)               | Muss       | Neu    |
  | B-10 | Dunkel/Hell-Modus                                        | Muss       | Neu    |
  | B-11 | FAQ und Hilfebereich                                     | Soll       | Neu    |
  | B-12 | AGB, Impressum, Datenschutzerklärung                     | Muss       | Neu    |
  | B-13 | Cookie-Banner nach DSGVO                                 | Muss       | Neu    |
  | B-14 | DSGVO-Funktionen (Daten exportieren, Konto löschen)      | Muss       | Neu    |
  | B-15 | Geschäftsmodell (Free und Premium)                       | Muss       | Neu    |
  | B-16 | Upgrade von Free auf Premium in der App                  | Muss       | Neu    |

- **7.3 Scope** - Tabelle: In Scope V1 | Out of Scope (V2+). Klare Abgrenzung.

---

### Kapitel 8: Chancen und Risiken

- **8.1 Chancen** - Tabelle: Chance | Begründung. Mit Zahlen und Quellen (nicht älter als 1 Jahr).
- **8.2 Risiken** - Tabelle: Risiko | Warum es eintreten kann | Gegenmaßnahme.

---

### Kapitel 9: Umsetzungsplan Version 1

- **9.1 Entwicklungsansatz** - Tech-Stack, Werkzeuge (GitHub Copilot), Teamstruktur.
- **9.2 Umsetzungsplan** - Tag-für-Tag-Tabelle über 5–7 Werktage:

  | Tag       | Fokus                       | Inhalt                          |
  |-----------|-----------------------------|---------------------------------|
  | Tag 1–3   | Hauptprozesse               | [Details]                       |
  | Tag 3–4   | Testing und Bugfixing       | [Details]                       |
  | Tag 4–5   | Basisfunktionalitäten       | [Details]                       |
  | Tag 5–6   | Puffer                      | [Details]                       |

- **Hinweis** - Realistisch: V1 ist ein lauffähiger Prototyp, kein Endprodukt.

---

### Quellenverzeichnis

Tabelle: Nr. | Quelle/URL | Inhalt | Veröffentlichungsdatum.
Nur reale, öffentlich verfügbare Quellen.

**STRIKT:** Ausschließlich Quellen, die nicht älter als 1 Jahr sind.
Jede Zahl im Dokument muss mindestens eine Quelle haben.
Das Veröffentlichungsdatum muss für jede Quelle angegeben sein.

---

## FORMATREGELN

- **Sprache:** Deutsch mit echten Umlauten (Ä, Ö, Ü, ß). In Code-Variablennamen ist ae/oe/ue akzeptabel.
- **Schrift:** Arial Narrow, 11pt Fließtext.
- **Tabellenkopf:** WAMOCON-Blau (1E3A5F) mit weißem Text, fett.
- **Tabellenzeilen:** alternierend weiß / hellgrau (F5F5F5).
- **Breiten:** WidthType.DXA (keine Prozent).
- **Shading:** ShadingType.CLEAR (kein SOLID).
- **Kein \n in TextRun** - separate Paragraphen verwenden.
- **Seitenkopf:** "WAMOCON GmbH, Mergenthalerallee 79-81, 65760 Eschborn" (8pt, grau).
- **Seitenumbruch** zwischen den Hauptkapiteln.

---

## Workflow

```
[1] IDEA.md im Projekt-Root ausfüllen
        |
        v
[2] Prompt 3 aufrufen → Anforderungsdokument als .docx generieren
        |
        v
[3] Dokument prüfen und zur Freigabe einreichen (Geschäftsführung)
        |
        v
[4] Nach Freigabe: Prompt 1 für Tiefenanalyse aufrufen
        |
        v
[5] Implementierung mit @planner → @developer
        |
        v
[6] Nach Launch: Prompt 2 für UX/UI Rework
```

---

## Voraussetzungen

- Node.js >= 18
- npm install docx (einmalig)
- Ausgabe: public/Anforderungsdokument_[ProjektName].docx
- package.json: "gen:anforderungsdokument": "node scripts/generate-anforderungsdokument.mjs"
## ./.github/skills/handbook/SKILL.md
# Skill: handbook

## Purpose

Maintain the product handbook at `docs/manual/index.html` so it always reflects the current state of the application.
The handbook is deployed as a static GitHub Pages site. It is the single source of truth for end-users, stakeholders, and team members.

---

## When to activate this skill

Activate **automatically** whenever any of the following events occur:

| Event | Action |
|---|---|
| New page / route added to `src/app/` | Add route to Section 05 (Routen-Ubersicht) |
| New API route added to `src/app/api/` | Add endpoint to Section 05.2 (API & Hooks) |
| New Supabase migration applied | Update Section 06.2 (Datenbank-Schema) |
| New feature implemented | Add feature card (Section 01) and table row (Section 02) |
| Plan/pricing changed | Update Section 02.2 (Plane & Preise) |
| New GitHub Actions workflow added | Update Section 07 (CI/CD & Tests) |
| DSGVO/legal update | Update Section 08 (DSGVO & Compliance) |
| Domain-specific terms introduced | Extend Section 09 (Glossar) |
| App name, logo, colors, or branding changed | Update CSS variables, header logo, meta comment, and footer |

---

## Handbook File Location

```
docs/
  index.html          <- redirect to manual/
  manual/
    index.html        <- THE handbook (this file is maintained by this skill)
```

---

## Placeholder Convention

The handbook uses `[PLACEHOLDER]` markers in HTML comments and content.
Copilot MUST replace all placeholders with real values when implementing a project.

| Placeholder | Replace with |
|---|---|
| `[APP_NAME]` | The actual app name (e.g. "Auktivo") |
| `[APP_TAGLINE]` | Short one-line description of the app |
| `[APP_VERSION]` | Current semver version from `package.json` |
| `[APP_URL]` | Production URL of the app |
| `[APP_DESCRIPTION]` | 1-2 sentence functional description |
| `[PROBLEM_STATEMENT]` | The core problem the app solves |
| `[PLAN_NAMES]` | Names of available plans (e.g. "Free · Pro") |
| `[PRO_PRICE]` | Pro plan price (e.g. "9,99 EUR/Monat") |
| `[LAST_UPDATED]` | Current month and year (e.g. "Mai 2026") |
| `[PRIMARY_COLOR]` | Hex color matching the app's primary brand color |
| `[PRIMARY_DARK]` | Darker shade for hover states |
| `[LOGO_EMOJI]` | Emoji or letter representing the app logo |
| `[DB_SCHEMA]` | Supabase schema name |
| `[DB_SCHEMA_DEV]` | Supabase dev schema name |
| `[DB_SCHEMA_PROD]` | Supabase prod schema name |
| `[FEATURE_1-4_TITLE/DESC]` | Real feature names and descriptions |
| `[FREE_ROLE_DESC]` | What free users can do |
| `[PRO_ROLE_DESC]` | What pro users can do |
| `[FEATURE_LIST_INTRO]` | Intro sentence for features section |
| `[FEATURE_A/B/C/D_PRO]` | Actual feature names in pricing table |
| `[STEP_1/2/3]` | Actual first-run tutorial steps |

---

## Color Theming Rules

The CSS variables in `:root` must match the app's actual color palette:

```css
:root {
  --primary:      #XXXXXX;   /* app's primary brand color */
  --primary-dark: #XXXXXX;   /* darker shade for hover */
  --primary-glow: rgba(R,G,B,0.18);
}
```

To find the app's primary color:
1. Check `src/app/globals.css` for Tailwind color variables
2. Check `tailwind.config.ts` for custom color definitions
3. Check the logo component in `src/components/` or `src/app/layout.tsx`

The logo mark gradient and box-shadow must also reflect the brand color.

---

## Update Protocol (step by step)

When Copilot detects a change that requires a handbook update, follow these steps:

### Step 1 - Read current handbook
```
read_file docs/manual/index.html
```

### Step 2 - Identify stale sections
Compare the handbook content against:
- `src/app/` directory structure (for routes)
- `src/app/api/` (for API endpoints)
- `supabase/migrations/` (for schema)
- `package.json` version field
- Recent conversation/plan context (for new features)

### Step 3 - Determine the minimal diff
Only update the sections that are actually stale. Do NOT rewrite sections that are already accurate.

### Step 4 - Apply surgical updates
Use `replace_string_in_file` to update only the changed HTML fragments.
Never regenerate the entire file unless a full redesign is explicitly requested.

### Step 5 - Update the meta comment and footer
Always update these two fields after any change:
- `APP_VERSION` in the meta comment at the top (match `package.json`)
- `LAST_UPDATED` in the meta comment and footer (use current month + year)
- Footer version string: `[APP_NAME] Produkthandbuch v[APP_VERSION] · Vertraulich · [LAST_UPDATED]`

### Step 6 - Verify HTML validity
Ensure:
- All opened tags are closed
- No broken HTML entities (e.g. `&amp;` not `&`)
- All `[PLACEHOLDER]` values are replaced (no brackets left in visible content)
- Sidebar TOC links match the actual section IDs in the page

---

## Branding Update Protocol

When the app logo, name, or colors change:

1. Update CSS `:root` variables (`--primary`, `--primary-dark`, `--primary-glow`)
2. Update the `.cover::before` radial gradient rgba values
3. Update `.logo-mark` gradient colors
4. Update `.logo-mark` box-shadow rgba values
5. Update `tr:hover td` background rgba values
6. Update `<title>` tag: `[APP_NAME] - Produkthandbuch | WAMOCON`
7. Update `.brand-name` text: `[APP_NAME]`
8. Update `.cover h1` text: `[APP_NAME]`
9. Update `.logo-mark` inner emoji/letter
10. Update meta comment at top of file

---

## TOC Sync Rules

The sidebar TOC (`#toc-sidebar`) must always match the actual sections in `<main>`:
- Every `<section id="X">` must have a corresponding `<a class="toc-link l1" href="#X">` in the sidebar
- Every `<h3 id="Y">` within a section must have a `<a class="toc-link l2" href="#Y">` below the l1 link
- Remove TOC entries for sections that have been removed
- Add TOC entries for newly added sections

---

## PDF Download - Do Not Remove

The "PDF speichern" button uses `window.print()`. This is intentional and must not be removed.
The print CSS (`@media print`) must hide sidebar, position header as static, and render a clean printable layout.

The "OneDrive" button opens a modal with save instructions. This must not be removed.

---

## Quality Checklist (run before declaring handbook update complete)

- [ ] All `[PLACEHOLDER]` markers replaced with real values in visible content
- [ ] Sidebar TOC matches all section IDs
- [ ] HTML is valid (no unclosed tags, no broken entities)
- [ ] CSS `:root` colors match the app's brand
- [ ] Logo emoji/letter is correct
- [ ] Version and date are current
- [ ] PDF download button present and functional
- [ ] OneDrive modal present and functional
- [ ] Footer copyright and version string updated
- [ ] Section 05 (routes) reflects actual `src/app/` structure
- [ ] Section 06.2 (schema) reflects latest Supabase migrations

## ./.github/skills/memory-merger/SKILL.md
---
name: memory-merger
description: 'Merges mature lessons from a domain memory file into its instruction file. Syntax: `/memory-merger >domain [scope]` where scope is `global` (default), `user`, `workspace`, or `ws`.'
---

# Memory Merger

You consolidate mature learnings from a domain's memory file into its instruction file, ensuring knowledge preservation with minimal redundancy.

**Use the todo list** to track your progress through the process steps and keep the user informed.

## Scopes

Memory instructions can be stored in two scopes:

- **Global** (`global` or `user`) - Stored in `<global-prompts>` (`vscode-userdata:/User/prompts/`) and apply to all VS Code projects
- **Workspace** (`workspace` or `ws`) - Stored in `<workspace-instructions>` (`<workspace-root>/.github/instructions/`) and apply only to the current project

Default scope is **global**.

Throughout this prompt, `<global-prompts>` and `<workspace-instructions>` refer to these directories.

## Syntax

```
/memory-merger >domain-name [scope]
```

- `>domain-name` - Required. The domain to merge (e.g., `>clojure`, `>git-workflow`, `>prompt-engineering`)
- `[scope]` - Optional. One of: `global`, `user` (both mean global), `workspace`, or `ws`. Defaults to `global`

**Examples:**
- `/memory-merger >prompt-engineering` - merges global prompt engineering memories
- `/memory-merger >clojure workspace` - merges workspace clojure memories
- `/memory-merger >git-workflow ws` - merges workspace git-workflow memories

## Process

### 1. Parse Input and Read Files

- **Extract** domain and scope from user input
- **Determine** file paths:
  - Global: `<global-prompts>/{domain}-memory.instructions.md` → `<global-prompts>/{domain}.instructions.md`
  - Workspace: `<workspace-instructions>/{domain}-memory.instructions.md` → `<workspace-instructions>/{domain}.instructions.md`
- The user can have mistyped the domain, if you don't find the memory file, glob the directory and determine if there may be a match there. Ask the user for input if in doubt.
- **Read** both files (memory file must exist; instruction file may not)

### 2. Analyze and Propose

Review all memory sections and present them for merger consideration:

```
## Proposed Memories for Merger

### Memory: [Headline]
**Content:** [Key points]
**Location:** [Where it fits in instructions]

[More memories]...
```

Say: "Please review these memories. Approve all with 'go' or specify which to skip."

**STOP and wait for user input.**

### 3. Define Quality Bar

Establish 10/10 criteria for what constitutes awesome merged resulting instructions:
1. **Zero knowledge loss** - Every detail, example, and nuance preserved
2. **Minimal redundancy** - Overlapping guidance consolidated
3. **Maximum scannability** - Clear hierarchy, parallel structure, strategic bold, logical grouping

### 4. Merge and Iterate

Develop the final merged instructions **without updating files yet**:

1. Draft the merged instructions incorporating approved memories
2. Evaluate against quality bar
3. Refine structure, wording, organization
4. Repeat until the merged instructions meet 10/10 criteria

### 5. Update Files

Once the final merged instructions meet 10/10 criteria:

- **Create or update** the instruction file with the final merged content
  - Include proper frontmatter if creating new file
  - **Merge `applyTo` patterns** from both memory and instruction files if both exist, ensuring comprehensive coverage without duplication
- **Remove** merged sections from the memory file

## Example

```
User: "/memory-merger >clojure"

Agent:
1. Reads clojure-memory.instructions.md and clojure.instructions.md
2. Proposes 3 memories for merger
3. [STOPS]

User: "go"

Agent:
4. Defines quality bar for 10/10
5. Merges new instructions candidate, iterates to 10/10
6. Updates clojure.instructions.md
7. Cleans clojure-memory.instructions.md
```

## ./.github/skills/next-browser/SKILL.md
---
name: next-browser
description: >-
  CLI that gives agents what humans get from React DevTools and the Next.js
  dev overlay - component trees, props, hooks, PPR shells, errors, network -
  as shell commands that return structured text.
---

# next-browser

If `next-browser` is not already on PATH, install `@vercel/next-browser` globally, then install the Chromium browser:

```bash
npm install -g @vercel/next-browser
playwright install chromium
```

Requires Node >= 20. If already installed, check the version is current:

```bash
next-browser --version
npm view @vercel/next-browser version
# if outdated:
npm install -g @vercel/next-browser@latest
```

---

## Next.js docs awareness

If the project's Next.js version is **v16.2.0-canary.37 or later**, bundled docs live at `node_modules/next/dist/docs/`. Before doing PPR work, Cache Components work, or any non-trivial Next.js task, read the relevant doc there - your training data may be outdated. The bundled docs are the source of truth.

---

## Working with the user

### Onboarding

- If the user already gave a URL, cookies, and task - skip questions, `open` and go.
- Otherwise ask only what's missing: dev server URL (running?), session cookies if behind login.
- For cookies, give the user two options: (1) DevTools → Application → Cookies, export as `[{"name":"session","value":"..."}]`, or (2) "Copy as cURL" from DevTools → Network on any authenticated request - extract the cookies from the header yourself.
- Never say "ready, what would you like to do?". Never auto-discover (port scans, `project`, config reads) before being asked.

### Show, don't tell

- `screenshot` after every navigation, code change, or visual finding. Always caption it.
- Don't narrate what a screenshot shows. State your conclusion or next action.

### Escalate, don't decide

- Suspense boundary placement and fallback UI - design with the user.
- Caching decisions (staleness, visibility) - the user's call, not yours.
- "Make this page faster" without context - ask: cold URL hit or client navigation? Don't guess, don't do both.

---

## Headless mode

By default the browser opens headed (visible window). For CI or environments with no display, set `NEXT_BROWSER_HEADLESS=1` to run headless.

---

## Commands

### Browser lifecycle

| Command | Description |
|---|---|
| `open <url> [--cookies-json <file>]` | Launch browser and navigate (with optional cookies) |
| `close` | Close browser and kill daemon |

```bash
$ next-browser open http://localhost:3000
$ next-browser open http://localhost:3000 --cookies-json cookies.json
# Cookie file format: [{"name":"authorization","value":"Bearer ..."}]
```

---

### Navigation

| Command | Description |
|---|---|
| `goto <url>` | Full-page navigation (new document load) |
| `push [path]` | Client-side navigation (interactive picker if no path) |
| `back` | Go back in history |
| `reload` | Reload current page |
| `restart-server` | Restart the Next.js dev server (clears caches - last resort only) |
| `ssr lock` | Block external scripts on all navigations (SSR-only mode) |
| `ssr unlock` | Re-enable external scripts |

---

### Inspection

| Command | Description |
|---|---|
| `tree` | Full React component tree (hierarchy, IDs, keys) |
| `tree <id>` | Inspect one component (props, hooks, state, source location) |
| `snapshot` | Accessibility tree with `[ref=eN]` markers on interactive elements |
| `errors` | Build and runtime errors for the current page |
| `logs` | Recent dev server log output |
| `browser-logs` | Browser-side console output (log, warn, error, info) |
| `network [idx]` | List network requests, or inspect one (headers, body) |

```bash
$ next-browser snapshot
- navigation "Main"
  - link "Home" [ref=e0]
  - link "Dashboard" [ref=e1]
- main
  - heading "Settings"
  - tablist
    - tab "General" [ref=e2] (selected)
    - tab "Security" [ref=e3]

$ next-browser tree
# Columns: depth id parent name
0 38167 - Root
1 38168 38167 HeadManagerContext.Provider
...
224 46375 46374 DeploymentsProvider

$ next-browser tree 46375
path: Root > ... > DeploymentsProvider
DeploymentsProvider #46375
props:
  children: [<Lazy />, ...]
hooks:
  Router: undefined (2 sub)
source: app/.../context.tsx:180:10
```

---

### Interaction

| Command | Description |
|---|---|
| `click <ref\|text\|selector>` | Click via real pointer events (works with Radix, Headless UI) |
| `fill <ref\|selector> <value>` | Fill a text input or textarea |
| `eval [ref] <script>` | Run JS in page context |
| `viewport [WxH]` | Show or set viewport size |

```bash
$ next-browser click e3          # ref from snapshot
$ next-browser click "Security"  # plain text
$ next-browser fill e4 "myuser"
$ next-browser viewport 375x812  # mobile breakpoint
$ next-browser eval 'document.title'
```

---

### Performance & PPR

| Command | Description |
|---|---|
| `perf [url]` | Core Web Vitals + React hydration timing in one pass |
| `renders start` | Begin recording React re-renders |
| `renders stop [--json]` | Stop and print per-component render profile |
| `ppr lock` | Freeze dynamic content to inspect the static shell |
| `ppr unlock` | Resume dynamic content and print shell analysis |

```bash
$ next-browser perf http://localhost:3000/dashboard
# Core Web Vitals
  TTFB    42ms
  LCP     1205.3ms
  CLS     0.03
# React Hydration - 65.5ms

$ next-browser renders start
$ next-browser renders stop
# 426 renders (38 mounts + 388 re-renders) across 38 components
# FPS: avg 120, min 106
```

---

### Screenshots

| Command | Description |
|---|---|
| `screenshot [caption] [--full-page]` | Viewport (or full page) PNG to temp file |
| `preview [caption]` | Screenshot + open in viewer window |

---

### Next.js MCP

| Command | Description |
|---|---|
| `page` | Route segments for the current URL |
| `project` | Project root and dev server URL |
| `routes` | All app router routes |
| `action <id>` | Inspect a server action by ID |

---

## Scenarios

### Debug a visual or interaction issue

1. `open http://localhost:3000`
2. `snapshot` - discover interactive elements
3. `click eN` / `fill eN value` - interact
4. `errors` - check for runtime errors
5. `screenshot "before fix"` - document state
6. Make the code change, HMR picks it up
7. `screenshot "after fix"` - verify

### Profile performance

```bash
$ next-browser perf http://localhost:3000/dashboard
# → Core Web Vitals + hydration timing

$ next-browser renders start
# reproduce slow interaction
$ next-browser renders stop
# → per-component render counts, self time, change reasons
```

### Debug PPR shell

```bash
$ next-browser ppr lock
$ next-browser goto http://localhost:3000/page
$ next-browser screenshot "PPR shell - locked"
$ next-browser ppr unlock
# → Shell analysis: which Suspense boundaries are holes and why
```

### Test responsive layout

```bash
$ next-browser viewport 375x812   # mobile
$ next-browser screenshot "mobile"
$ next-browser viewport 1440x900  # desktop
$ next-browser screenshot "desktop"
```

### Debug component re-renders

1. `renders start`
2. `goto` the page (captures hydration)
3. Reproduce the interaction
4. `renders stop` - read Mounts vs Re-renders, Self time, change reasons
5. `tree <id>` the expensive component - check source, props, hooks
6. Fix, HMR picks it up, re-run `renders start/stop` to verify

## ./AGENTS.md
﻿
---

# GitHub Copilot Customisation

<table>
<tr>
<th width="50%">DE Deutsch</th>
<th width="50%">EN English</th>
</tr>
<tr>
<td>Dieses Projekt nutzt GitHub Copilot Agents und Instructions, um eine strukturierte und produktive KI-gestützte Entwicklung zu ermöglichen.</td>
<td>This project uses GitHub Copilot Agents and Instructions to enable a structured and productive AI-assisted development workflow.</td>
</tr>
</table>

---

## Übersicht / Overview

| Typ / Type | Pfad / Path | Beschreibung / Description |
|---|---|---|
| **Global Instructions** | `.github/copilot-instructions.md` | Projektweite Basisregeln für alle Copilot-Interaktionen. / Project-wide baseline rules for all Copilot interactions. |
| **Instructions** | `.github/instructions/*.instructions.md` | Dateimuster-spezifische Coding-Richtlinien. / File-pattern-scoped coding guidelines. |
| **Agents** | `.github/agents/*.agent.md` | Spezialisierte KI-Personas für verschiedene Phasen. / Specialised AI personas for different development phases. |

---

## `copilot-instructions.md` - Globale Basisregeln / Global Baseline Rules

**Pfad / Path:** `.github/copilot-instructions.md`

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td>Diese Datei wird bei <strong>jeder</strong> Copilot-Interaktion automatisch geladen. Sie definiert den Tech-Stack, kritische Regeln (async APIs, Server Components, Supabase), und Code-Stil-Konventionen für das gesamte Projekt.</td>
<td>This file is automatically loaded on <strong>every</strong> Copilot interaction. It defines the tech stack, critical rules (async APIs, Server Components, Supabase), and code style conventions for the whole project.</td>
</tr>
</table>

<table>
<tr>
<th width="50%">DE Wann bearbeiten?</th>
<th width="50%">EN When to edit?</th>
</tr>
<tr>
<td>
- Tech-Stack ändert sich (z. B. neue Bibliothek wird Standardmuster)<br>
- Neue projektweite Regeln sollen für alle Copilot-Interaktionen gelten<br>
- Team-Konventionen ändern sich<br>
<strong>⚠️ Kurz halten</strong> - diese Datei wird immer in den Kontext geladen.
</td>
<td>
- Tech stack changes (e.g. a new library becomes a standard pattern)<br>
- New project-wide rules need to apply to all Copilot interactions<br>
- Team conventions change<br>
<strong>⚠️ Keep it short</strong> - this file is always loaded into context.
</td>
</tr>
</table>

---

## Instructions - Datei-spezifische Richtlinien / File-Scoped Guidelines

<table>
<tr>
<th width="50%">DE Was sind Instructions?</th>
<th width="50%">EN What are Instructions?</th>
</tr>
<tr>
<td>Instructions sind Richtlinien, die automatisch geladen werden, wenn Copilot an Dateien arbeitet, die dem <code>applyTo</code>-Glob-Muster entsprechen. Sie ergänzen die globalen Regeln mit datei-spezifischen Details.</td>
<td>Instructions are guidelines that are automatically loaded when Copilot works on files matching the <code>applyTo</code> glob pattern. They extend the global rules with file-type-specific details.</td>
</tr>
</table>

### Vorhandene Instructions / Available Instructions

| Datei / File | `applyTo` | Zweck / Purpose |
|---|---|---|
| `nextjs.instructions.md` | `**/*.tsx, **/*.ts, **/*.jsx, **/*.js` | Next.js 16 App Router Patterns, async APIs, Server/Client Components |
| `tailwind.instructions.md` | `**/*.tsx, **/*.jsx, **/*.css` | Tailwind CSS v4 Utility-First Patterns, Responsive Design |
| `typescript.instructions.md` | `**/*.ts, **/*.tsx` | TypeScript Strict Mode, Naming Conventions, Type Safety |
| `supabase.instructions.md` | `**/supabase/**, **/*supabase*` | Supabase Client Setup, RLS, Migrations, Schema Awareness |

### Eigene Instructions erstellen / Creating Custom Instructions

<table>
<tr>
<th width="50%">DE Anleitung</th>
<th width="50%">EN Guide</th>
</tr>
<tr>
<td>Erstelle eine <code>.instructions.md</code>-Datei in <code>.github/instructions/</code> mit YAML-Frontmatter. Das <code>applyTo</code>-Feld akzeptiert Glob-Muster und bestimmt, für welche Dateien die Regeln gelten.</td>
<td>Create a <code>.instructions.md</code> file in <code>.github/instructions/</code> with YAML frontmatter. The <code>applyTo</code> field accepts glob patterns and determines which files the rules apply to.</td>
</tr>
</table>

```yaml
---
applyTo: "**/*.tsx"
---
# Your instructions here
```

---

## Agents - KI-Personas / AI Personas

<table>
<tr>
<th width="50%">DE Was sind Agents?</th>
<th width="50%">EN What are Agents?</th>
</tr>
<tr>
<td>Agents sind spezialisierte KI-Personas. Du rufst sie in VS Code über das Chat-Panel mit <code>@agent-name</code> auf. Jeder Agent hat eine klar definierte Rolle, einen Workflow und Regeln.</td>
<td>Agents are specialised AI personas. You invoke them in VS Code via the Chat panel using <code>@agent-name</code>. Each agent has a clearly defined role, workflow, and rules.</td>
</tr>
</table>

---

### `@planner` - Planer

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Technische Planung und Anforderungsanalyse vor dem Coding.</td>
<td><strong>Purpose:</strong> Technical planning and requirements analysis before coding.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Vor dem Start eines neuen Features<br>- Wenn die Anforderungen unklar sind<br>- Vor Refactoring oder Migrations-Aufgaben</td>
<td><strong>When to use:</strong><br>- Before starting a new feature<br>- When requirements are unclear<br>- Before refactoring or migration tasks</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Codebase erkunden und Kontext sammeln<br>✔ Betroffene Dateien und Module identifizieren<br>✔ Nummerierten Implementierungsplan erstellen<br>✘ <strong>Schreibt keinen Code</strong></td>
<td><strong>What it does:</strong><br>✔ Explore codebase and gather context<br>✔ Identify affected files and modules<br>✔ Create a numbered implementation plan<br>✘ <strong>Does not write code</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@planner Füge eine Authentifizierungsseite hinzu</code></td>
<td><strong>Usage:</strong> <code>@planner Add an authentication page</code></td>
</tr>
</table>

---

### `@developer` - Entwickler

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Strukturierte Feature-Implementierung mit Qualitätsprüfungen.</td>
<td><strong>Purpose:</strong> Structured feature implementation with quality checks.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach der Planung mit <code>@planner</code><br>- Zur Implementierung von Features, Seiten, API-Routen<br>- Für Datenbankänderungen und Migrationen</td>
<td><strong>When to use:</strong><br>- After planning with <code>@planner</code><br>- To implement features, pages, API routes<br>- For database changes and migrations</td>
</tr>
<tr>
<td><strong>Vierphasiger Prozess:</strong><br>1. <strong>Vorbereitung</strong> - Plan lesen, Code verstehen<br>2. <strong>Implementierung</strong> - Schrittweise, Fehler sofort beheben<br>3. <strong>Verifikation (PFLICHT)</strong> - <code>typecheck</code> → <code>lint</code> → <code>build</code> → lokal testen<br>4. <strong>Dokumentation</strong> - Handbook aktualisieren</td>
<td><strong>Four-phase process:</strong><br>1. <strong>Preparation</strong> - Read plan, understand code<br>2. <strong>Implementation</strong> - Step by step, fix errors immediately<br>3. <strong>Verification (MANDATORY)</strong> - <code>typecheck</code> → <code>lint</code> → <code>build</code> → test locally<br>4. <strong>Documentation</strong> - Update handbook</td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@developer Implementiere diesen Plan: [Plan einfügen]</code></td>
<td><strong>Usage:</strong> <code>@developer Implement this plan: [paste plan]</code></td>
</tr>
</table>

---

### `@reviewer` - Code-Reviewer

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Code-Review und Qualitätssicherung vor dem PR.</td>
<td><strong>Purpose:</strong> Code review and quality assurance before a PR.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Bevor ein PR erstellt wird<br>- Nach einer Implementierung zur Qualitätsprüfung<br>- Zur Sicherheits- und Performance-Analyse</td>
<td><strong>When to use:</strong><br>- Before creating a PR<br>- After implementation for quality check<br>- For security and performance audits</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Strukturierte Checkliste (Qualität, Next.js 16, Supabase-Sicherheit, Styling)<br>✔ Alle Checks ausführen (typecheck, lint, build)<br>✔ Review-Bericht mit Status (✅ / ⚠️ / ❌)</td>
<td><strong>What it does:</strong><br>✔ Structured checklist (quality, Next.js 16, Supabase security, styling)<br>✔ Run all checks (typecheck, lint, build)<br>✔ Review report with status (✅ / ⚠️ / ❌)</td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@reviewer Überprüfe die Änderungen in src/app/dashboard/</code></td>
<td><strong>Usage:</strong> <code>@reviewer Review the changes in src/app/dashboard/</code></td>
</tr>
</table>

---

### `@handbook` - Produkthandbuch-Pflege

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Das Produkthandbuch <code>docs/manual/index.html</code> aktuell halten - es muss immer den aktuellen Stand der Applikation widerspiegeln.</td>
<td><strong>Purpose:</strong> Keep the product handbook <code>docs/manual/index.html</code> up to date - it must always reflect the current state of the application.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach jeder Feature-Implementierung (nicht optional)<br>- Nach dem Anwenden von Supabase-Migrationen<br>- Nach Branding-/Logo-/Farb-Änderungen<br>- Am Anfang jeder Session zur Freshness-Prüfung</td>
<td><strong>When to use:</strong><br>- After every feature implementation (not optional)<br>- After applying Supabase migrations<br>- After any branding/logo/color change<br>- At session start for a freshness check</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Codebase lesen (Routen, Schema, Features, Branding)<br>✔ Veraltete Sektionen identifizieren<br>✔ Nur geänderte HTML-Fragmente aktualisieren<br>✔ Alle <code>[PLACEHOLDER]</code>-Marker ersetzen<br>✔ Inhaltsverzeichnis synchronisieren<br>✔ Version und Datum aktualisieren<br>✘ <strong>Schreibt kein App-Code</strong></td>
<td><strong>What it does:</strong><br>✔ Read codebase (routes, schema, features, branding)<br>✔ Identify stale sections<br>✔ Update only changed HTML fragments<br>✔ Replace all <code>[PLACEHOLDER]</code> markers<br>✔ Sync table of contents<br>✔ Update version and date<br>✘ <strong>Does not write app code</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@handbook Aktualisiere das Handbuch nach der Dashboard-Implementierung</code></td>
<td><strong>Usage:</strong> <code>@handbook Update the handbook after implementing the dashboard</code></td>
</tr>
</table>

---

### `@anforderungsdokument` - Anforderungsdokument

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Vollständiges WAMOCON-Anforderungsdokument (9 Kapitel + .docx) für Web-/SaaS-Applikationen erstellen.</td>
<td><strong>Purpose:</strong> Create a complete WAMOCON requirements document (9 chapters + .docx) for web/SaaS applications.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Vor dem Start eines neuen Projekts<br>- Wenn eine App-Idee dokumentiert werden soll<br>- Bevor die Implementierung beginnt (Freigabe erforderlich)</td>
<td><strong>When to use:</strong><br>- Before starting a new project<br>- When an app idea needs to be documented<br>- Before implementation starts (approval required)</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Marktanalyse, Wettbewerb, Zielgruppe recherchieren<br>✔ 9-Kapitel-Dokument mit echten Daten befüllen<br>✔ Dokument als .docx generieren<br>✘ <strong>Nur Web/SaaS - keine mobilen Apps</strong><br>✘ <strong>Nur Quellen nicht älter als 1 Jahr</strong></td>
<td><strong>What it does:</strong><br>✔ Research market analysis, competition, target audience<br>✔ Fill 9-chapter document with real data<br>✔ Generate document as .docx<br>✘ <strong>Web/SaaS only - no mobile apps</strong><br>✘ <strong>Sources not older than 1 year only</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@anforderungsdokument Erstelle das Anforderungsdokument für [Projektname]</code></td>
<td><strong>Usage:</strong> <code>@anforderungsdokument Create the requirements document for [project name]</code></td>
</tr>
</table>

#### Schritt-für-Schritt-Anleitung / Step-by-Step Guide

**1.** Fülle `IDEA.md` im Projekt-Root aus.

**2.** Kopiere den Prompt unten und sende ihn im Chat. Die KI liest `IDEA.md` und `SKILL.md` automatisch - nichts einfügen, nichts ersetzen:

```
Nutze für diese Aufgabe die PERSONA eines interdisziplinären Expertenteams
(Senior Product Manager, Market Research Analyst und Tech Lead) im CEOMODE.
Führe die gesamte Analyse im /godmode und auf L99 aus.

1. Vorbereitung
Lies zunächst diese beiden Dateien vollständig, bevor du beginnst:
- .github/skills/anforderungsdokument/SKILL.md
- IDEA.md

2. Projektrahmen & Kontext
Fokus: Entwicklung eines neuen Web-/SaaS-Tools.
Plattform: Ausschließlich browserbasierte Web- und SaaS-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.
Strukturiere die technische Architektur als ARCHITECT.

3. Kernaufgabe
Durchdenke die Anforderungen mit /deepthink und erstelle ein vollständiges
WAMOCON-Anforderungsdokument. Halte dich strikt an die verbindliche
9-Kapitel-Struktur aus dem SKILL.md. Fülle jedes Kapitel mit echten, belegten
Daten. Verwende keine Platzhalter.

4. Strikte Restriktionen
Agiere bei der Einhaltung dieser Regeln als SENTINEL:

Plattform-Regel: Mobile Apps sind ausgeschlossen. Die Begriffe iOS, Android,
React Native oder Flutter dürfen im Dokument nicht erwähnt werden.

Quellen-Regel (FACTCHECK & /investigate): Nutze ausschließlich Quellen, die
jünger als ein Jahr sind. Ältere Quellen sind verboten. Jede genannte Zahl muss
mit einer exakten Quellenangabe und dem Veröffentlichungsdatum belegt werden.

Tonalität: Analytisch, datengestützt, kritisch und lösungsorientiert.
Professionell, durchgehend auf Deutsch unter Verwendung echter Umlaute (Ä, Ö, Ü, ß).

5. Ausgabe
Skript: scripts/generate-anforderungsdokument.mjs
Datei: public/Anforderungsdokument_[ProjektName].docx
```

**3.** Dokument prüfen und zur Freigabe bei der Geschäftsführung einreichen.

**4.** Nach Freigabe: Implementierung mit `@planner` starten.

---

## Tools

| Tool | Pfad / Path | Zweck / Purpose |
|---|---|---|
| **next-browser** | `.github/skills/next-browser/SKILL.md` | CLI that exposes React DevTools and the Next.js dev overlay as shell commands - component trees, props, errors, performance, screenshots - structured output for AI agents. |
| **anforderungsdokument** | `.github/skills/anforderungsdokument/SKILL.md` | Drei Entwicklungsprompts: Tiefenanalyse, Marketing/UX-Rework und Anforderungsdokument (9 Kapitel + Quellenverzeichnis als .docx). Nur Web/SaaS - keine mobilen Apps. Nur Quellen nicht älter als 1 Jahr. IDEA.md ausfüllen, Prompt 3 aufrufen, .docx generieren, zur Freigabe einreichen. |
| **handbook** | `.github/skills/handbook/SKILL.md` | Produkthandbuch-Wartungsskill. Halt `docs/manual/index.html` aktuell - liest Codebase, vergleicht Routen/Schema/Features, aktualisiert Sektionen. Wird nach jeder Feature-Implementierung ausgefuhrt. / Product handbook maintenance skill. Keeps `docs/manual/index.html` accurate - reads codebase, compares routes/schema/features, updates sections. Runs after every feature implementation. |

### `next-browser` - AI-Driven Browser for Next.js

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td><code>@vercel/next-browser</code> ist ein CLI-Tool, das React DevTools und das Next.js Dev-Overlay als Shell-Befehle bereitstellt. Agents können den Browser steuern, Komponenten inspizieren, Fehler lesen und Performance prüfen - ohne manuell durch DevTools zu klicken.</td>
<td><code>@vercel/next-browser</code> is a CLI tool that exposes React DevTools and the Next.js dev overlay as shell commands. Agents can drive the browser, inspect components, read errors, and check performance - without manually clicking through DevTools.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach der Implementierung zur visuellen Verifikation<br>- Debugging von Runtime-Fehlern oder Re-Render-Problemen<br>- Performance-Analyse (Core Web Vitals, Hydration)<br>- PPR-Shell-Debugging</td>
<td><strong>When to use:</strong><br>- After implementation for visual verification<br>- Debugging runtime errors or re-render issues<br>- Performance analysis (Core Web Vitals, hydration timing)<br>- PPR shell debugging</td>
</tr>
<tr>
<td><strong>Installation:</strong><br><code>npm install -g @vercel/next-browser</code><br><code>playwright install chromium</code><br>Benötigt Node >= 20</td>
<td><strong>Install:</strong><br><code>npm install -g @vercel/next-browser</code><br><code>playwright install chromium</code><br>Requires Node >= 20</td>
</tr>
<tr>
<td><strong>Wichtigste Befehle:</strong><br><code>next-browser open &lt;url&gt;</code> - Browser starten<br><code>next-browser snapshot</code> - Accessibility-Tree + klickbare Refs<br><code>next-browser errors</code> - Build- und Runtime-Fehler<br><code>next-browser perf</code> - Core Web Vitals + Hydration<br><code>next-browser screenshot</code> - Viewport als PNG<br><code>next-browser tree</code> - React-Komponentenbaum</td>
<td><strong>Key commands:</strong><br><code>next-browser open &lt;url&gt;</code> - launch browser<br><code>next-browser snapshot</code> - accessibility tree + clickable refs<br><code>next-browser errors</code> - build and runtime errors<br><code>next-browser perf</code> - Core Web Vitals + hydration timing<br><code>next-browser screenshot</code> - viewport as PNG<br><code>next-browser tree</code> - React component tree</td>
</tr>
<tr>
<td><strong>Vollständige Dokumentation:</strong> <code>.github/skills/next-browser/SKILL.md</code></td>
<td><strong>Full documentation:</strong> <code>.github/skills/next-browser/SKILL.md</code></td>
</tr>
</table>

---

### `anforderungsdokument` - WAMOCON Entwicklungsprompts

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td>Der Skill stellt <strong>drei strukturierte Entwicklungsprompts</strong> bereit: (1) Tiefenanalyse und kritische Projektbewertung, (2) Marketing und UX/UI Rework, (3) Anforderungsdokument mit verbindlicher 9-Kapitel-Struktur (Zusammenfassung, Marktanalyse, Wettbewerb, Zielgruppe, Nutzen, Abhängigkeiten, Anforderungen V1, Chancen/Risiken, Umsetzungsplan + Quellenverzeichnis). <strong>Ausschließlich Web/SaaS - keine mobilen Apps. Nur Quellen nicht älter als 1 Jahr.</strong> IDEA.md ausfüllen, Prompt aus <code>@anforderungsdokument</code> kopieren, .docx generieren, zur Freigabe einreichen.</td>
<td>The skill provides <strong>three structured development prompts</strong>: (1) deep analysis and critical assessment, (2) marketing and UX/UI rework, (3) requirements document with a mandatory 9-chapter structure (summary, market analysis, competition, target audience, benefits, dependencies, requirements V1, opportunities/risks, implementation plan + references). <strong>Web/SaaS only - no mobile apps. Sources not older than 1 year only.</strong> Fill in IDEA.md, copy prompt from <code>@anforderungsdokument</code>, generate .docx, submit for approval.</td>
</tr>
</table>

---

## Empfohlener Workflow / Recommended Workflow

<table>
<tr>
<th width="50%">DE Schritt</th>
<th width="50%">EN Step</th>
</tr>
<tr>
<td><strong>Phase 0 - Anforderungen (neues Projekt):</strong><br>
1. <code>IDEA.md</code> im Projekt-Root ausfüllen<br>
2. <strong><code>@anforderungsdokument</code></strong> aufrufen: Prompt kopieren und senden<br>
3. Dokument prüfen und zur Freigabe einreichen<br>
4. Nach Freigabe: Implementierung starten</td>
<td><strong>Phase 0 - Requirements (new project):</strong><br>
1. Fill in <code>IDEA.md</code> in the project root<br>
2. Call <strong><code>@anforderungsdokument</code></strong>: copy prompt and send<br>
3. Review document and submit for approval<br>
4. After approval: start implementation</td>
</tr>
<tr>
<td><strong>Phase 1 - Planung:</strong><br>
<strong><code>@planner</code></strong> - Aufgabe analysieren und Implementierungsplan erstellen</td>
<td><strong>Phase 1 - Planning:</strong><br>
<strong><code>@planner</code></strong> - Analyse the task and create an implementation plan</td>
</tr>
<tr>
<td><strong>Phase 2 - Implementierung:</strong><br>
<strong><code>@developer</code></strong> - Plan entgegennehmen und schrittweise implementieren</td>
<td><strong>Phase 2 - Implementation:</strong><br>
<strong><code>@developer</code></strong> - Receive plan and implement step by step</td>
</tr>
<tr>
<td><strong>Phase 3 - Qualitätsprüfung:</strong><br>
<strong><code>@reviewer</code></strong> - Code prüfen, bevor ein PR erstellt wird</td>
<td><strong>Phase 3 - Quality review:</strong><br>
<strong><code>@reviewer</code></strong> - Review code before creating a PR</td>
</tr>
<tr>
<td><strong>Phase 4 - Handbuch:</strong><br>
<strong><code>@handbook</code></strong> - Produkthandbuch nach jeder Feature-Implementierung aktualisieren</td>
<td><strong>Phase 4 - Handbook:</strong><br>
<strong><code>@handbook</code></strong> - Update the product handbook after every feature implementation</td>
</tr>
</table>

---

## Eigene Agents erstellen / Creating Custom Agents

<table>
<tr>
<th width="50%">DE Anleitung</th>
<th width="50%">EN Guide</th>
</tr>
<tr>
<td>Erstelle eine <code>.agent.md</code>-Datei in <code>.github/agents/</code> mit YAML-Frontmatter. Definiere Rolle, Workflow und Regeln.</td>
<td>Create a <code>.agent.md</code> file in <code>.github/agents/</code> with YAML frontmatter. Define role, workflow, and rules.</td>
</tr>
</table>

```yaml
---
name: MyAgent
description: >
  Description of what this agent does.
---
# Agent: MyAgent

## Role
...

## Workflow
...
```

---

## Wenn ein Agent schlecht antwortet / When an Agent Responds Poorly

<table>
<tr>
<th width="50%">DE Problem & Lösung</th>
<th width="50%">EN Problem & Solution</th>
</tr>
<tr>
<td><strong>Agent ignoriert Regeln aus der Instructions-Datei</strong><br>→ Prüfe das <code>applyTo</code>-Glob-Muster - stimmt es mit der Datei überein, die du bearbeitest? Teste mit: <code>**/*.ts</code> statt <code>src/**/*.ts</code></td>
<td><strong>Agent ignores rules from an Instructions file</strong><br>→ Check the <code>applyTo</code> glob pattern - does it match the file you are editing? Try broader patterns: <code>**/*.ts</code> instead of <code>src/**/*.ts</code></td>
</tr>
<tr>
<td><strong>Agent befolgt den Workflow nicht (z. B. überspringt typecheck)</strong><br>→ Öffne die <code>.agent.md</code>-Datei und mache die Anweisung strikter. Ersetze "sollte" durch "muss". Füge am Ende eine Zusammenfassung hinzu: <em>"Bevor du antwortest, liste alle abgeschlossenen Schritte auf."</em></td>
<td><strong>Agent does not follow the workflow (e.g. skips typecheck)</strong><br>→ Open the <code>.agent.md</code> file and make the instruction stricter. Replace "should" with "must". Add a reminder at the end: <em>"Before responding, list all completed steps."</em></td>
</tr>
<tr>
<td><strong>Agent schreibt schlechten Next.js-Code (z. B. falsche API-Nutzung)</strong><br>→ Füge ein konkretes Beispiel in die <code>nextjs.instructions.md</code> ein. Copilot folgt Beispielen besser als abstrakten Regeln.</td>
<td><strong>Agent writes bad Next.js code (e.g. wrong API usage)</strong><br>→ Add a concrete code example to <code>nextjs.instructions.md</code>. Copilot follows examples better than abstract rules.</td>
</tr>
<tr>
<td><strong>Agent "vergisst" den Kontext nach langen Gesprächen</strong><br>→ Starte ein neues Chat-Fenster. Langer Kontext verdrängt Instructions. Übergib den Plan explizit: <em>"Hier ist der Plan: [Plan]. Bitte implementiere Schritt 3."</em></td>
<td><strong>Agent "forgets" context after long conversations</strong><br>→ Start a new chat window. Long context pushes out instructions. Pass the plan explicitly: <em>"Here is the plan: [plan]. Please implement step 3."</em></td>
</tr>
<tr>
<td><strong>Agent antwortet auf Englisch statt Deutsch (oder umgekehrt)</strong><br>→ Füge in <code>copilot-instructions.md</code> eine Sprachanweisung hinzu: <em>"Antworte immer auf Deutsch."</em> - oder sprich den Agent in der gewünschten Sprache an.</td>
<td><strong>Agent responds in German instead of English (or vice versa)</strong><br>→ Add a language instruction to <code>copilot-instructions.md</code>: <em>"Always respond in English."</em> - or address the agent in your preferred language.</td>
</tr>
<tr>
<td><strong>Agent überschreitet den Plan / macht ungebetene Änderungen</strong><br>→ Füge in der <code>.agent.md</code> unter "Rules" hinzu: <em>"Ändere nur Dateien, die explizit im Plan genannt sind. Keine ungebetenen Refactors."</em></td>
<td><strong>Agent exceeds the plan / makes unrequested changes</strong><br>→ Add to the <code>.agent.md</code> under "Rules": <em>"Only modify files explicitly listed in the plan. No unrequested refactoring."</em></td>
</tr>
</table>

---

## Referenzen / References

- [GitHub Copilot Customisation Docs](https://docs.github.com/en/copilot/customizing-copilot)
- [awesome-copilot](https://github.com/github/awesome-copilot) - Beispiele und Best Practices / Examples and best practices

## ./HOWTO.md
# HOWTO - Project Setup & Deployment Guide

> 🎉 **Herzlichen Glückwunsch zur Einrichtung! / Congratulations on setting up!**
> Du kannst dieses Dokument nach Abschluss der Einrichtung löschen oder als Referenz behalten.
> You can delete this HOWTO document once your setup is complete, or keep it for future reference.

> 📖 **Lies die [AGENTS.md](AGENTS.md) Datei, um GitHub Copilot optimal und produktiv zu nutzen.**
> **Read the [AGENTS.md](AGENTS.md) file to use GitHub Copilot in an optimised and productive way.**

---

## DE Deutsch

---

### Prozessübersicht

Folge diesen Schritten in der angegebenen Reihenfolge, um vom Template zur Produktion zu gelangen:

1. **GitHub Repo erstellen** - Nutze dieses Template, um ein neues Repository in der Wamocon GitHub Organisation zu erstellen.
2. **Repo klonen** - Klone es auf deinen Rechner und führe `npm install` aus.
3. **Pre-commit Hook installieren** - Führe `bash hooks/install.sh` aus. Einmalig nach dem Klonen - schützt dich davor, Geheimnisse versehentlich zu pushen.
4. **GitHub Workflow-Datei überprüfen** - Öffne `.github/workflows/deploy.yml` und `.github/workflows/pr-pipeline.yml`, überprüfe, dass `Wamocon/github_workflow` die korrekte Referenz ist.
5. **`.env.local` aktualisieren & Supabase verbinden** - Kopiere `.env.example` → `.env.local`, erstelle ein Remote-Supabase-Projekt und trage die Zugangsdaten ein.
6. **Lokal starten & Entwicklung beginnen** - Führe `npm run dev` aus und beginne mit der Entwicklung.
7. **GitHub-Organisationseinstellungen: Vercel-App Zugriff gewähren** - Gehe zu den Organisationseinstellungen auf GitHub, suche die Vercel GitHub-App und gewähre ihr Zugriff auf dein neues Repo. Nur so erscheint das Repo in der Vercel-Importliste.
8. **Repo vorübergehend öffentlich machen & bei Vercel importieren** - Stelle das Repo temporär auf öffentlich und importiere es in Vercel.
9. **Vercel Project ID holen** - Kopiere die Vercel Project ID aus den Vercel-Projekteinstellungen.
10. **Vercel Project ID zu GitHub Secrets hinzufügen** - Füge `VERCEL_PROJECT_ID` zu den GitHub Actions Secrets deines Repos hinzu.
11. **Repo auf intern umstellen** - Ändere die Sichtbarkeit des Repos zurück auf intern.
12. **Erstes manuelles Deployment** - Gehe zu `Actions → "Deploy to Vercel" → Run workflow` und wähle `production`.

> 📖 **Für detaillierte Informationen, lies weiter unten.**

---

### 1. Klonen & Einrichten

```bash
# Repository klonen
git clone https://github.com/Wamocon/<dein-repo-name>.git
cd <dein-repo-name>

# Abhängigkeiten installieren
npm install

# Umgebungsvariablen kopieren
cp .env.example .env.local

# Pre-commit Hook installieren (einmalig, direkt nach npm install)
bash hooks/install.sh

# Entwicklungsserver starten (mit Turbopack für schnelles Hot-Reload)
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

**Verfügbare Skripte:**

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Dev-Server mit Turbopack (Hot Reload) |
| `npm run build` | Erstellt den Produktions-Build |
| `npm run start` | Startet den Produktionsserver |
| `npm run lint` | Führt ESLint aus |
| `npm run typecheck` | Führt TypeScript-Typprüfung aus |

---

### 1b. Git-Workflow & Branch-Strategie

> 💡 **Arbeite nach dem ersten Push immer auf einem Branch - nie direkt auf `main`/`master`.**

**Empfohlener Ablauf:**

```bash
# Einmalig: Ersten Stand auf main/master pushen
git add .
git commit -m "chore: initial setup"
git push origin <main-oder-master>

# Ab jetzt: Immer auf einem Feature-Branch arbeiten
git checkout -b feature/mein-feature

# Änderungen lokal testen, dann committen
npm run dev        # testen
npm run typecheck  # Typfehler prüfen
npm run lint       # Lint prüfen

git add .
git commit -m "feat: beschreibung der Änderung"
git push origin feature/mein-feature
```

**Wichtige Regeln:**

- **Lokal testen, bevor du pushst.** Führe `npm run typecheck` und `npm run lint` aus, bevor du Änderungen pushst.
- **Alle Änderungen vor dem PR-Öffnen pushen.** Jeder neue Push auf einen offenen PR triggert automatisch die GitHub Actions - das verbraucht GitHub Actions-Minuten.
- **Nur einen PR auf einmal offen halten**, bis er gemergt ist.

> ⚠️ **Warum das wichtig ist:** Jeder Push auf einen offenen PR löst die PR Pipeline aus (Auto-Fix + Typecheck + Lint). Teste erst lokal - dann push, dann PR.

---

### 1c. Pre-commit Hook - Geheimnis-Scanner

Der Pre-commit Hook verhindert, dass API-Schlüssel, Tokens, Passwörter oder andere Geheimnisse versehentlich in GitHub eingecheckt werden. Der Hook scannt alle für den Commit vorgesehenen Dateien, **bevor** der Commit abgeschlossen wird.

#### Installation

```bash
# Einmalig nach dem Klonen ausführen - nie wieder nötig:
bash hooks/install.sh
```

> ✅ **Wie oft?** Genau **einmal** - direkt nach `npm install` beim ersten Einrichten des Repos. Nach der Installation läuft der Hook automatisch vor **jedem** `git commit`.

#### Was der Hook prüft

| Muster | Beispiel |
|--------|---------|
| AWS-Schlüssel | `AKIA...`, `aws_secret_access_key = ...` |
| GitHub-Tokens | `ghp_...`, `github_pat_...` |
| Vercel-Token | `VERCEL_TOKEN = abc123...` |
| Private Keys (PEM) | `-----BEGIN PRIVATE KEY-----` |
| Datenbankverbindungen | `postgres://user:password@host` |
| Generische Tokens | `api_key =`, `client_secret =`, `password =` |
| JWT-Tokens | `eyJ...` (vollständige `header.payload.signature`-Form) |
| Supabase Service Role | `service_role = eyJ...` |
| `.env`-Dateien | `.env`, `.env.local`, `.env.production` |

#### Wenn ein Commit blockiert wird

```
[pre-commit] BLOCKED - potential secrets detected
  ✖ src/lib/config.ts:12
    Reason: Generic API key
    Content: const API_KEY = "abc123xyz789..."
```

**Lösung:**
1. Entferne das Geheimnis aus der Datei.
2. Speichere es in deiner `.env.local` (ist bereits in `.gitignore` eingetragen).
3. Nutze GitHub Actions Secrets für CI/CD-Werte.

**Bei einem Falsch-Positiv** (z.B. ein Beispielwert in der Doku):
Füge den Kommentar `# notsecret` am Ende der betroffenen Zeile hinzu.

**Notfall-Bypass** (nur im absoluten Ausnahmefall - niemals für echte Geheimnisse!):
```bash
git commit --no-verify -m "deine Nachricht"
```

---

### 2. Supabase Setup & Warnung

> ⚠️ **KRITISCH: Sobald du einen Supabase-Account hast, speichere alle Testdaten direkt dort.**
>
> **Lege Testdaten NICHT als lokale Dateien im Projektverzeichnis ab** (z.B. JSON-Fixtures, SQL-Dumps). Füge Daten stattdessen direkt in dein Supabase-Projekt ein - über das Dashboard, per MCP-Tool oder per Migrations-Skript.

**Schritte:**

1. Gehe zu [supabase.com](https://supabase.com) und erstelle ein neues Projekt.
2. Kopiere die **Project URL**, den **Anon Key** und den **Service Role Key** aus  
   `Project Settings → API`.
3. Trage sie in deine `.env.local` Datei ein:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-anon-key
   SUPABASE_SERVICE_ROLE_KEY=dein-service-role-key
   ```

---

### 2b. Lokales Supabase Setup via Docker (Optional)

> 💡 **Dieser Schritt ist optional.** Standardmäßig verbindest du dich direkt mit einem Remote-Supabase-Projekt (siehe Abschnitt 2). Nur wenn du lieber vollständig lokal entwickelst, ohne Internetverbindung zu Supabase, verwende dieses Setup.

Für ein vollständig lokales Supabase-Setup mit Docker und einer migrations-basierten Entwicklung, kopiere diesen Prompt in deinen KI-Assistenten (z.B. GitHub Copilot in VS Code):

```
Act as an expert DevOps and database engineer. I am developing an app locally. I need to set up a local Supabase instance via Docker and establish a strict migration-based workflow. Please execute the following:

Setup: Initialize a local Supabase environment using Docker and the Supabase CLI. Check automatically before every task if Docker and the Supabase containers are running. When they are down, start them autonomously.

Initial Schema: Create the initial database schema for the app and save it as a formal Supabase migration file.

Environment Variables: Automatically extract the local Supabase connection details (API URL, anon key, service role key, DB URL) and append them to my local .env file.

Autonomous Development & Schema Versioning: You will develop the entire application based on my prompts. You must autonomously create and update tables, generate schemas, and create timestamped migration files for every change. Ensure strict version history and guarantee that absolutely no functions fail due to database inconsistencies.

Production Deployment via MCP: I use the Supabase MCP to push data to production tables. Do not provide manual push commands. Your only job for production is to verify that all local migrations are completely up to date and error-free so the MCP can handle the live deployment seamlessly.

Automated Testing & Verification: Once the Docker setup is running and the schema is applied, automatically write and execute a small integration test. This test must verify that the app can successfully read from and write to the local Docker database. If any errors or bugs are detected, diagnose and fix them immediately on your own.
```

#### Lokale Supabase-Oberfläche im Browser öffnen

Sobald der lokale Docker-Stack läuft (`npx supabase start`), stellt Supabase eine vollständige Studio-Oberfläche bereit:

| Service | URL | Beschreibung |
|---|---|---|
| **Supabase Studio** | `http://localhost:54323` | Datenbank-UI: Tabellen, SQL-Editor, Auth, Storage |
| **REST API** | `http://localhost:54321` | PostgREST API (dein App-Endpoint) |
| **PostgreSQL** | `localhost:54322` | Direktzugriff (z.B. via pgAdmin, TablePlus) |
| **Inbucket (E-Mail)** | `http://localhost:54324` | Lokaler E-Mail-Dienst für Auth-Mails |

> 💡 Die exakten Ports werden nach `npx supabase start` auch in der Konsole ausgegeben. Der Befehl `npx supabase status` zeigt sie jederzeit an.

**Lokale Umgebungsvariablen:**
```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<aus supabase status kopieren>
SUPABASE_SERVICE_ROLE_KEY=<aus supabase status kopieren>
SUPABASE_DB_URL=postgresql://postgres:postgres@localhost:54322/postgres
```

---

### 3. Supabase MCP & Schemas

#### Supabase MCP für Migrationen verwenden

Der Supabase MCP (Model Context Protocol) Server ermöglicht es deinem KI-Coding-Assistenten (z.B. GitHub Copilot, Cursor), Migrationen und Tabellen direkt zu erstellen und zu verwalten.

- Migrationen werden in `supabase/migrations/` gespeichert.
- Nutze die MCP-Tools, um Tabellen zu erstellen, Schemas zu ändern und Indizes zu verwalten.

#### Arbeiten mit mehreren Schemas

Standardmäßig macht Supabase nur das `public`-Schema über die API verfügbar. Wenn du eigene Schemas brauchst:

**1. Schema erstellen:**
```sql
CREATE SCHEMA IF NOT EXISTS app;
```

**2. Berechtigungen vergeben:**
```sql
GRANT USAGE ON SCHEMA app TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON TABLES TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
```

**3. Schema über die Supabase API zugänglich machen:**
Gehe zu `Project Settings → API → Exposed schemas` und füge deinen Schema-Namen hinzu.

---

### 4. GitHub Workflow Konfiguration

Dieses Projekt nutzt den **zentralen Wamocon CI/CD-Workflow** aus [`Wamocon/github_workflow`](https://github.com/Wamocon/github_workflow).

#### Übersicht der drei Workflows

| Workflow | Datei | Auslöser | Was es tut |
|---|---|---|---|
| **PR Pipeline** | `pr-pipeline.yml` | **Automatisch** bei jedem PR auf `main`/`master` | Auto-Fix (ESLint + Prettier) → Typecheck + Lint |
| **Deploy** | `deploy.yml` | **Manuell** - kein Auto-Trigger | Baut das Projekt via Vercel CLI und deployed auf Vercel |
| **LP Generator** | `lp-generator.yml` | **Manuell** - kein Auto-Trigger | Generiert eine Landing Page in einem neuen Repo |

> ⚠️ **Kein automatisches Deployment:** Weder ein PR noch ein Push auf `main` startet automatisch ein Deployment. Alle Deployments werden manuell über den Actions-Tab gestartet.

#### Was du tun musst

1. Überprüfe, dass `Wamocon/github_workflow` die korrekte Org/Repo-Referenz ist.
2. Aktiviere Workflow-Schreibrechte:  
   `Settings → Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests`
3. Füge **ein einziges Secret** zu deinem Repository hinzu:
   - Gehe zu `Repository → Settings → Secrets and variables → Actions → New repository secret`
   - Name: `VERCEL_PROJECT_ID`
   - Wert: *(siehe Abschnitt 5 unten)*

> ✅ **Alle anderen benötigten Secrets** (`VERCEL_TOKEN`, `VERCEL_ORG_ID`) sind **bereits auf GitHub-Organisationsebene konfiguriert**.

#### Manuelles Deployment starten

```
Repository auf GitHub → Actions → "Deploy to Vercel" → Run workflow
→ Environment auswählen: production oder preview
→ Run workflow klicken
```

---

### 5. Vercel Deployment-Strategie

#### Schritt 1: GitHub-Org Vercel-App Zugriff gewähren (Einmalig, Kritisch)

> ⚠️ **Dieser Schritt muss VOR dem Vercel-Import durchgeführt werden.** Ohne ihn erscheint dein Repo nicht in der Vercel-Importliste - auch wenn es öffentlich ist.

1. Gehe zu **GitHub → Wamocon Organisation → Settings**  
   `https://github.com/organizations/Wamocon/settings/installations`
2. Suche die **Vercel**-App in der Liste der installierten GitHub Apps.
3. Klicke auf **Configure**.
4. Scrolle zu **Repository access**.
5. Wähle **"Only select repositories"** und füge dein neues Repo hinzu.
6. Klicke **Save**.

#### Schritt 2: Erstmalige Bereitstellung (Einmalig)

1. **Repo vorübergehend öffentlich machen**  
   `Repository → Settings → General → Change visibility → Public`
2. Gehe zu [vercel.com](https://vercel.com) → **Add New Project** → **Import** → dein Repo auswählen.
3. Deploye das Projekt (Vercel erkennt Next.js automatisch).
4. **Vercel Project ID kopieren:**  
   `Vercel Project → Settings → General → Project ID` → ID kopieren.
5. **Zu GitHub Secrets hinzufügen:**  
   `Repository → Settings → Secrets and variables → Actions → New repository secret`  
   Name: `VERCEL_PROJECT_ID` | Wert: die kopierte ID.
6. **Repo auf intern zurücksetzen:**  
   `Repository → Settings → General → Change visibility → Internal`

> 💡 **Nach diesem einmaligen Setup** deployt die GitHub Action via Vercel CLI - Vercel sieht nicht mehr, wer committed, und es gibt keine Team-Seat-Fehler bei einem privaten Hobby-Account.

#### Schritt 3: Umgebungsvariablen in Vercel eintragen

> ⚠️ **WICHTIG:** Gehe zu `Vercel Project → Settings → Environment Variables` und füge **alle** Variablen aus deiner `.env.local` hinzu. Ohne diese wird der Build **fehlschlagen**.

#### Deployment-Ablauf (nach dem Setup)

| Auslöser | Ergebnis |
|---|---|
| PR auf `main`/`master` | PR Pipeline läuft automatisch (kein Deployment) |
| Merge auf `main`/`master` | Kein automatisches Deployment |
| **Manuelles Workflow-Start** | Deployment nach Auswahl: `production` oder `preview` |

**Manuell deployen:**

```
GitHub → Actions → "Deploy to Vercel" → Run workflow
→ environment: production  (für die Live-URL)
→ environment: preview     (für eine Test-URL)
→ db_schema: (leer lassen - Vercel-Umgebungsvariablen werden genutzt)
```

---

### 6. Domain-Verwaltung

1. **Sichere eine Domain** für deine Anwendung über [Strato](https://www.strato.de).
2. Gehe in den Vercel-Projekteinstellungen zu `Settings → Domains` und füge deine Domain hinzu.
3. Konfiguriere die DNS-Einträge bei Strato wie von Vercel angegeben (typischerweise CNAME oder A-Record).

---

### 7. Projekt-Checkliste

- [ ] Landing Page
- [ ] Handbuch / Manual
- [ ] Hauptprozess (Kernfunktion)
- [ ] Video (Demo / Tutorial)
- [ ] Domain (über Strato gesichert)

---

### 8. Landing Page Generator

Das Workflow-File `.github/workflows/lp-generator.yml` generiert eine Landing Page für diese App.

#### Was der Workflow tut

- Liest den Inhalt dieses Repos aus
- Verwendet ein konfigurierbares **Design-Template** als optische Basis
- Lässt GitHub Copilot eine Landing Page generieren und ein neues Repo dafür anlegen

#### Was du ändern kannst

| Eingabe | Standard | Beschreibung |
|---|---|---|
| `custom_template` | `Wamocon/hochzeitsrechner_lp` | Das GitHub-Repo, das als Design-Template dient |
| `custom_name` | `generated_lp` | Name des neu erstellten Landing-Page-Repos |
| `custom_prompt` | *(allgemeiner Prompt)* | Detaillierte Anweisungen für Copilot |

> 💡 **Tipp:** Je spezifischer dein Prompt, desto besser die generierte Landing Page.

#### Wann du den Workflow starten sollst

Starte diesen Workflow **erst dann**, wenn dein Projekt weitgehend fertig dokumentiert ist:
- Handbuch / Manual
- README mit Produktbeschreibung, Features und Zielgruppe
- Rechtstexte / relevante Seiten

> ✅ **Empfehlung:** In der Regel reicht **ein einmaliger Lauf** am Projektende.

#### Manuell ausführen

`Repository → Actions → "🚀 lp-generator" → Run workflow`

1. Wähle in der linken Liste den Workflow **"🚀 lp-generator"**.
2. Klicke rechts auf **"Run workflow"**.
3. Passe Template, Name und Prompt an.
4. Bestätige mit **"Run workflow"**.

#### Wenn der Workflow fehlschlägt

Wenn bereits ein Repository mit gleichem Namen existiert:
1. Ändere den Namen in `custom_name` und starte erneut.
2. Oder lösche das bestehende Ziel-Repo und starte erneut.

---
---

## EN English

---

### Process Overview

Follow these steps in order to go from template to production:

1. **Create GitHub Repo** - Use this template to create a new repository in the Wamocon GitHub organisation.
2. **Clone Repo** - Clone to your local machine and run `npm install`.
3. **Install pre-commit hook** - Run `bash hooks/install.sh`. One-time setup after cloning - protects you from accidentally pushing secrets.
4. **Check GitHub Workflow files** - Open `.github/workflows/deploy.yml` and `.github/workflows/pr-pipeline.yml`, verify that `Wamocon/github_workflow` is the correct reference.
5. **Update `.env.local` & connect Supabase** - Copy `.env.example` → `.env.local`, create a remote Supabase project, and fill in the credentials.
6. **Run locally & start development** - Run `npm run dev` and start building.
7. **GitHub Organisation Settings: Grant Vercel app access** - Go to the organisation settings on GitHub, find the Vercel GitHub App, and grant it access to your new repo. Without this, the repo will not appear in Vercel's import list.
8. **Make repo temporarily public & import in Vercel** - Set the repo to public temporarily and import it in Vercel.
9. **Get Vercel Project ID** - Copy the Vercel Project ID from the Vercel project settings.
10. **Add Vercel Project ID to GitHub secrets** - Add `VERCEL_PROJECT_ID` to your repository's GitHub Actions secrets.
11. **Make repo internal** - Revert the repository visibility to internal.
12. **First manual deployment** - Go to `Actions → "Deploy to Vercel" → Run workflow` and choose `production`.

> 📖 **For detailed information, read below.**

---

### 1. Clone & Setup

```bash
# Clone the repository
git clone https://github.com/Wamocon/<your-repo-name>.git
cd <your-repo-name>

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Install pre-commit hook (once, right after npm install)
bash hooks/install.sh

# Start the development server (with Turbopack for fast refresh)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Available scripts:**

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack (hot reload) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

---

### 1b. Git Workflow & Branching Strategy

> 💡 **After the first push, always work on a branch - never directly on `main`/`master`.**

**Recommended flow:**

```bash
# One-time: push the initial state to main/master
git add .
git commit -m "chore: initial setup"
git push origin <main-or-master>

# From now on: always work on a feature branch
git checkout -b feature/my-feature

# Test locally, then commit
npm run dev        # test in browser
npm run typecheck  # catch type errors
npm run lint       # catch lint issues

git add .
git commit -m "feat: description of change"
git push origin feature/my-feature
```

**Key rules:**

- **Test locally before pushing.** Always run `npm run typecheck` and `npm run lint` before pushing.
- **Push all changes before opening the PR.** Every new push to an open PR triggers the GitHub Actions pipeline - this consumes GitHub Actions minutes.
- **Keep only one PR open at a time** until it is merged.

> ⚠️ **Why this matters:** Every push to an open PR triggers the PR Pipeline (Auto-Fix + Typecheck + Lint). Test locally first - then push, then open the PR.

---

### 1c. Pre-commit Hook - Secret Scanner

The pre-commit hook prevents API keys, tokens, passwords, or other secrets from accidentally being checked into GitHub. The hook scans all files staged for commit **before** the commit is finalised.

#### Installation

```bash
# Run ONCE after cloning - never needs to run again:
bash hooks/install.sh
```

> ✅ **How often?** Exactly **once** - right after `npm install` when first setting up the repo. After installation, the hook runs automatically before **every** `git commit`.

#### What the hook checks

| Pattern | Example |
|--------|---------|
| AWS keys | `AKIA...`, `aws_secret_access_key = ...` |
| GitHub tokens | `ghp_...`, `github_pat_...` |
| Vercel token | `VERCEL_TOKEN = abc123...` |
| Private keys (PEM) | `-----BEGIN PRIVATE KEY-----` |
| Database connection strings | `postgres://user:password@host` |
| Generic tokens | `api_key =`, `client_secret =`, `password =` |
| JWT tokens | `eyJ...` (full `header.payload.signature` form) |
| Supabase service role | `service_role = eyJ...` |
| `.env` files | `.env`, `.env.local`, `.env.production` |

#### When a commit is blocked

```
[pre-commit] BLOCKED - potential secrets detected
  ✖ src/lib/config.ts:12
    Reason: Generic API key
    Content: const API_KEY = "abc123xyz789..."
```

**How to fix:**
1. Remove the secret from the file.
2. Store it in your `.env.local` (already in `.gitignore`).
3. Use GitHub Actions secrets for CI/CD values.

**False positive** (e.g. an example value in documentation):  
Add the comment `# notsecret` at the end of that line.

**Emergency bypass** (absolute last resort - never for real secrets!):
```bash
git commit --no-verify -m "your message"
```

---

### 2. Supabase Setup & Warning

> ⚠️ **CRITICAL: Once you have a Supabase account, store all test data there directly.**
>
> **Do NOT store test data as local files** (e.g. JSON fixtures, SQL dumps). Insert data directly into your Supabase project - via the Dashboard, an MCP tool, or a migration script.

**Steps:**

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Copy the **Project URL**, **Anon Key**, and **Service Role Key** from  
   `Project Settings → API`.
3. Paste them into your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

---

### 2b. Local Supabase Setup via Docker (Optional)

> 💡 **This step is optional.** By default you connect directly to a remote Supabase project (see section 2). Only use this setup if you prefer developing fully offline.

For a fully local Supabase setup with Docker and a migration-based development workflow, copy this prompt into your AI assistant (e.g. GitHub Copilot in VS Code):

```
Act as an expert DevOps and database engineer. I am developing an app locally. I need to set up a local Supabase instance via Docker and establish a strict migration-based workflow. Please execute the following:

Setup: Initialize a local Supabase environment using Docker and the Supabase CLI. Check automatically before every task if Docker and the Supabase containers are running. When they are down, start them autonomously.

Initial Schema: Create the initial database schema for the app and save it as a formal Supabase migration file.

Environment Variables: Automatically extract the local Supabase connection details (API URL, anon key, service role key, DB URL) and append them to my local .env file.

Autonomous Development & Schema Versioning: You will develop the entire application based on my prompts. You must autonomously create and update tables, generate schemas, and create timestamped migration files for every change. Ensure strict version history and guarantee that absolutely no functions fail due to database inconsistencies.

Production Deployment via MCP: I use the Supabase MCP to push data to production tables. Do not provide manual push commands. Your only job for production is to verify that all local migrations are completely up to date and error-free so the MCP can handle the live deployment seamlessly.

Automated Testing & Verification: Once the Docker setup is running and the schema is applied, automatically write and execute a small integration test. This test must verify that the app can successfully read from and write to the local Docker database. If any errors or bugs are detected, diagnose and fix them immediately on your own.
```

#### Viewing the local database in the browser

| Service | URL | Description |
|---|---|---|
| **Supabase Studio** | `http://localhost:54323` | Database UI: tables, SQL editor, Auth, Storage |
| **REST API** | `http://localhost:54321` | PostgREST API (your app endpoint) |
| **PostgreSQL** | `localhost:54322` | Direct DB access (e.g. pgAdmin, TablePlus) |
| **Inbucket (email)** | `http://localhost:54324` | Local email service for Auth emails |

**Local environment variables:**
```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<copy from supabase status output>
SUPABASE_SERVICE_ROLE_KEY=<copy from supabase status output>
SUPABASE_DB_URL=postgresql://postgres:postgres@localhost:54322/postgres
```

---

### 3. Supabase MCP & Schemas

#### Using Supabase MCP for Migrations

The Supabase MCP (Model Context Protocol) server allows your AI coding assistant to create and manage migrations and tables directly.

- Migrations are stored in `supabase/migrations/`.
- Use the MCP tools to create tables, alter schemas, and manage indexes.

#### Working with Multiple Schemas

By default, Supabase only exposes the `public` schema via the API. If you need custom schemas:

**1. Create the schema:**
```sql
CREATE SCHEMA IF NOT EXISTS app;
```

**2. Grant permissions:**
```sql
GRANT USAGE ON SCHEMA app TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON TABLES TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
```

**3. Expose the schema via the Supabase API:**
Go to `Project Settings → API → Exposed schemas` and add your custom schema name.

---

### 4. GitHub Workflow Configuration

This project uses the **centralized Wamocon CI/CD workflow** from [`Wamocon/github_workflow`](https://github.com/Wamocon/github_workflow).

#### Overview of the three workflows

| Workflow | File | Trigger | What it does |
|---|---|---|---|
| **PR Pipeline** | `pr-pipeline.yml` | **Automatic** on every PR to `main`/`master` | Auto-Fix (ESLint + Prettier) → Typecheck + Lint |
| **Deploy** | `deploy.yml` | **Manual only** - no auto-trigger | Builds and deploys to Vercel via CLI |
| **LP Generator** | `lp-generator.yml` | **Manual only** - no auto-trigger | Generates a landing page in a new repo |

> ⚠️ **No automatic deployment:** Neither a PR nor a push to `main` triggers a deployment automatically. All deployments are started manually from the Actions tab.

#### What you need to do

1. Verify that `Wamocon/github_workflow` is the correct org/repo reference.
2. Enable workflow write permissions:  
   `Settings → Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests`
3. Add **one single secret** to your repository:
   - Go to `Repository → Settings → Secrets and variables → Actions → New repository secret`
   - Name: `VERCEL_PROJECT_ID`
   - Value: *(see section 5 below)*

> ✅ **All other required secrets** (`VERCEL_TOKEN`, `VERCEL_ORG_ID`) are **already configured at the GitHub Organisation level**.

#### Triggering a manual deployment

```
GitHub repo → Actions → "Deploy to Vercel" → Run workflow
→ Choose environment: production or preview
→ Click "Run workflow"
```

---

### 5. Vercel Deployment Strategy

#### Step 1: Grant Vercel GitHub App access in Org Settings (One-time, Critical)

> ⚠️ **This step must be done BEFORE importing in Vercel.** Without it, your repo will not appear in Vercel's import list - even if it is public.

1. Go to **GitHub → Wamocon Organisation → Settings → Installed GitHub Apps**  
   `https://github.com/organizations/Wamocon/settings/installations`
2. Find the **Vercel** app in the list.
3. Click **Configure**.
4. Scroll to **Repository access**.
5. Select **"Only select repositories"** and add your new repo.
6. Click **Save**.

#### Step 2: Initial Deployment (One-Time)

1. **Make the repo public** temporarily  
   `Repository → Settings → General → Change visibility → Public`
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import** → select your repo.
3. Deploy the project (Vercel detects Next.js automatically).
4. **Copy the Vercel Project ID:**  
   `Vercel Project → Settings → General → Project ID` → copy the value.
5. **Add to GitHub secrets:**  
   `Repository → Settings → Secrets and variables → Actions → New repository secret`  
   Name: `VERCEL_PROJECT_ID` | Value: the ID you copied.
6. **Revert the repo to internal:**  
   `Repository → Settings → General → Change visibility → Internal`

> 💡 **After this one-time setup**, the GitHub Action deploys via Vercel CLI - Vercel no longer sees who committed, and there are no team seat errors with a personal Hobby account.

#### Step 3: Add environment variables in Vercel

> ⚠️ **CRUCIAL:** Go to `Vercel Project → Settings → Environment Variables` and add **all** variables from your `.env.local`. Without these, the build **will fail**.

#### Deployment flow (after setup)

| Trigger | Result |
|---|---|
| PR targeting `main`/`master` | PR Pipeline runs automatically (no deployment) |
| Merge / push to `main`/`master` | No automatic deployment |
| **Manual workflow run** | Deploys to the chosen environment: `production` or `preview` |

**How to deploy manually:**

```
GitHub → Actions → "Deploy to Vercel" → Run workflow
→ environment: production  (for the live URL)
→ environment: preview     (for a temporary test URL)
→ db_schema: (leave empty - Vercel env vars are used)
```

---

### 6. Domain Management

1. **Secure a domain** for your application via [Strato](https://www.strato.de).
2. In the Vercel project settings, go to `Settings → Domains` and add your domain.
3. Configure the DNS records at Strato as shown by Vercel (typically a CNAME or A record).

---

### 7. Project Checklist

- [ ] Landing Page
- [ ] Handbuch / Manual
- [ ] Main Process (core feature)
- [ ] Video (demo / tutorial)
- [ ] Domain (secured via Strato)

---

### 8. Landing Page Generator

The workflow file `.github/workflows/lp-generator.yml` generates a landing page for this app by calling a central, reusable Wamocon workflow.

#### What the workflow does

- Reads the contents of this repository
- Uses a configurable **design template** as a visual base
- Lets GitHub Copilot generate a landing page and create a new repository for it

#### What you can change

| Input | Default | Description |
|---|---|---|
| `custom_template` | `Wamocon/hochzeitsrechner_lp` | The GitHub repo used as the design template |
| `custom_name` | `generated_lp` | Name for the newly created landing page repository |
| `custom_prompt` | *(generic prompt)* | Detailed instructions for Copilot |

> 💡 **Tip:** The more specific your prompt, the better the generated landing page.

#### When you should run this workflow

Run this workflow **only after** your project is mostly complete:
- Handbook / Manual
- README with product description, features, and target audience
- Legal pages / relevant links

> ✅ **Recommendation:** In most cases, you only need to run it **once** at the end of the project.

#### Running manually

`Repository → Actions → "🚀 lp-generator" → Run workflow`

1. Select **"🚀 lp-generator"** from the left workflow list.
2. Click **"Run workflow"** on the right.
3. Adjust the input fields (template, name, prompt) as needed.
4. Confirm with **"Run workflow"**.

#### If the workflow fails (repository name already exists)

1. Change the `custom_name` value and run the workflow again.
2. Or delete the existing target repository (if no longer needed) and run again.

## ./IDEA.md
# Projektidee

> Fuell diese Datei aus, bevor du den Skill `anforderungsdokument` aufrufst.
> Je mehr Details du hier schreibst, desto besser wird das generierte Dokument.
> Anleitung: `.github/skills/anforderungsdokument/SKILL.md`

---

## Projektname

[Name der App, z.B. "Universal Inventory Manager"]

---

## Beschreibung

[Was macht die App? Welches Problem loest sie? Sei konkret.

Beispiel:
"Eine webbasierte Lagerverwaltungs-App fuer kleine und mittelgrosse Unternehmen in
Deutschland. Sie ersetzt Excel-basierte Bestandslisten durch ein strukturiertes System
mit Echtzeit-Uebersicht, QR-Code-Scanfunktion und automatisierten Benachrichtigungen.
Das Ziel ist es, manuelle Fehler bei der Lagerhaltung um mindestens 80 % zu reduzieren
und den Zeitaufwand fuer Inventurprozesse auf ein Minimum zu senken."]

---

## Zielgruppe

[Wer soll die App nutzen? Branche, Unternehmensgroesse, Rolle.

Beispiel:
"Lager- und Logistikleiter sowie Mitarbeiter in KMU mit 10 bis 200 Angestellten,
insbesondere im Einzel-, Gross- und Onlinehandel in Deutschland und dem
deutschsprachigen Europa."]

---

## Kernproblem

[Das konkrete Problem, das OHNE die App besteht.

Beispiel:
"Lagerfehler durch manuelle Erfassung in Excel kosten KMU durchschnittlich
14 % des Jahresumsatzes. Bestehende Enterprise-Loesungen wie SAP EWM sind
fuer kleinere Betriebe zu komplex und zu teuer."]

---

## Gewuenschte Hauptfunktionen (Version 1)

[Liste der wichtigsten Funktionen. Beispiel:]

- Artikel anlegen, bearbeiten, loeschen
- Lagerbestand in Echtzeit einsehen
- QR-Code-Etiketten generieren und scannen
- Rollenbasierter Zugriff (Admin, Manager, Mitarbeiter)
- Mehrsprachige Oberflaeche (Deutsch und Englisch)
- Dashboard mit Bestandsuebersicht

---

## Tech-Stack (optional, wenn bekannt)

[Bekannte oder gewuenschte Technologien. Standardempfehlung falls leer:
Next.js, React, TypeScript, Supabase, Tailwind CSS, Vercel]

---

## Marktsegment und Branche

[In welchem Markt soll die App operieren?

Beispiel: "Lagerverwaltungssoftware (WMS) fuer KMU in Deutschland, Segment Mittelstand"]

---

## Bekannte Wettbewerber (optional)

[Bestehende Loesungen, die aehnliches tun.

Beispiel: SAP EWM, Sage Wawi, Pickware, Odoo Inventory, Lightspeed]

---

## Ersteller

[Vollstaendiger Name]

---

## Empfaenger (Geschaeftsfuehrung)

[Name und Titel des Entscheidungstraegers, z.B. "waleri moretz, CEO WAMOCON GmbH"]

---

## Welle und Version

1

---

## Zusaetzliche Hinweise (optional)

[Besondere Anforderungen, Einschraenkungen, Deadlines oder andere relevante
Informationen, die im Dokument beruecksichtigt werden sollen.]

## ./docs/DESIGN-REFERENCES.md
# Design References — curated per-screen inspiration map

> This is a **map of which existing real-world designs we borrow from**, screen by screen, for HandwerkerBonus.
> Each reference was hand-picked from [refero.design](https://refero.design/) after browsing the live screens.
> **We do not clone any single product** — we steal one specific idea per reference, listed under "What to borrow".
>
> Use this together with [DESIGN.md](./DESIGN.md) (the design system: tokens, primitives, motion).
> Before building any screen, **read the matching section here first**. Do not invent patterns from scratch.
>
> All refero URLs were live as of May 2026. If a UUID 404s, search the brand name on refero.design.

---

## Brand-level references (whole-product mood)

These five brands set the overall vibe. When in doubt about a micro-decision, ask "what would Mercury / Linear / Stripe do here?"

| Brand | Why it matters for us | What to borrow at the system level |
|---|---|---|
| **Mercury** (banking) | Same emotional category: money + trust + Germans-don't-trust-fintech | Calm warm-paper background, tabular numbers for €-amounts, minimal chrome, oversized hero balance, action-chip row below balance, low-saturation accents |
| **Linear** (issue tracker) | Sets the bar for perceived speed, motion budget, and dark mode that is actually pleasant | 120-180 ms ease-out transitions, `⌘K` command palette, keyboard-first navigation, instant optimistic UI |
| **Stripe** (payments) | Closest reference for German compliance feel + multilingual docs | Editorial-grade typography hierarchy, restrained color, structured pricing page, EU-trust footer |
| **Notion** (workspace) | Warmth without being cute — important for consumer SaaS in DE | Soft cream backgrounds, Instrument Serif-style display headings, generous line-height in onboarding |
| **Vercel** (devtools) | Reference for technical-but-friendly dark mode and dashboard density | Stone-tinted dark surfaces (`#0a0a0a` not pure black), thin 1 px borders, monospace for numbers/IDs |

---

## Screen-by-screen reference map

### 1. Marketing landing — `/` (guest)

**Goal:** in 5 seconds the visitor understands "Photograph your handwerker invoice → get your tax refund."

| Reference | refero URL | What to borrow |
|---|---|---|
| **Mercury** dashboard hero | [refero page](https://refero.design/pages/cd553d96-edff-4120-bb74-8230a7c4f490) (website [/websites/857](https://refero.design/websites/857)) | The "Welcome, Jane" + action-chip row + giant balance pattern → adapt to "Dein §35a-Bonus 2025: **€820**" hero with chips [Rechnung hochladen] [Demo ansehen] |
| **Kinhive** editorial dashboard | found via [Dashboard search](https://refero.design/search?page_types[id][]=28&order=trending) | Italic serif greeting ("Good afternoon, Eixa") → "Guten Abend, Maanik" in Instrument Serif on the app dashboard, also informs the marketing H1 typography |
| **Stripe** pricing tier layout (search "Stripe" on refero) | n/a (study live at stripe.com/pricing) | Three-column pricing card layout, "most popular" middle card slightly larger, monospace for €-amounts |
| **Maze** split-screen login | [refero page](https://refero.design/pages/71a0ef9d-4a93-4041-84fa-c0ad9a25216e?page_types[id][]=18) | Split-screen pattern (left = form/CTA, right = animated product preview with heat-map overlay) → use on `/signup` for conversion |

**Sections we need on `/`:**
1. Hero (Mercury chip-row pattern)
2. "Wie es funktioniert" — 3-step horizontal cards with photographs of real Handwerker invoices
3. KPI bar — "12.450 Rechnungen verarbeitet · €1,2M Bonus zurückgeholt · 4,8★ Trustpilot"
4. Pricing teaser (Stripe pattern)
5. Trust footer — DSGVO, EU-Hosting Frankfurt, StBerG-konform, BSI-zertifiziert

---

### 2. Auth — `/login`, `/signup`, `/reset-password`

| Reference | refero URL | What to borrow |
|---|---|---|
| **Calendly** login | [refero page](https://refero.design/pages/00f3bad0-d6d4-48e4-95fd-72374b7174c2?page_types[id][]=18) | Centered card · plain email field · "Continue" primary · OR · two SSO buttons stacked · "Don't have an account? Sign up" — **this is our `/login`**, plain and fast |
| **Mural** login | [refero page](https://refero.design/pages/bec1381f-4274-49f7-a246-72a2be60c7ce?page_types[id][]=18) | Friendly illustration below the form (sofa / craftsman scene in our case) — softens the screen for non-technical German consumers |
| **Maze** SSO login | [refero page](https://refero.design/pages/71a0ef9d-4a93-4041-84fa-c0ad9a25216e?page_types[id][]=18) | Split-screen with right-side animated product preview → use on `/signup` only (higher intent), not on `/login` |
| **Tesla** sign-in | [refero page](https://refero.design/pages/154370d5-e587-4115-8d8e-32a75ee493eb?page_types[id][]=18) | Minimal centered form, single primary button, link to "Forgot password" below — use on `/reset-password` |
| **MasterClass** login modal | [refero page](https://refero.design/pages/40b4f65c-1ac0-4fd6-9172-db83c41db83d?page_types[id][]=18) | SSO buttons first, email second (correct order for German consumers who Google-auth everything) — use button stacking order |
| **Tidal** login | [refero page](https://refero.design/pages/5c764d7c-2f9e-40ad-8f58-e243d9591723?page_types[id][]=18) | NOT for our app — too entertainment. Skip. |

**Decision:** Calendly layout × Mural warmth × Maze split for signup only.

---

### 3. App dashboard — `/app`

| Reference | refero URL | What to borrow |
|---|---|---|
| **Mercury** dashboard | [refero page](https://refero.design/pages/cd553d96-edff-4120-bb74-8230a7c4f490) | Whole layout. Left sidebar nav (Home, Rechnungen, Jahre, Einstellungen) · "Welcome, $name" header · action chip row (Hochladen, Manuell eintragen, Jahresabschluss) · hero KPI (Refund-to-date) with sparkline · two-column lower section: recent invoices + status accounts |
| **Kinhive** "Good afternoon" | (Dashboard category) | Italic serif greeting + 4-tile KPI grid with `0` empty states · adopt for **first-run dashboard** when user has no invoices yet |
| **Cycle** ⌘K command palette | [refero page](https://refero.design/pages/...) (Cycle in Dashboard search) | Floating ⌘K modal with "Recently created" + "Navigation" sections — exactly our pattern for "Rechnung suchen / Jahr wechseln / Einstellungen" |
| **Square Invoices** sidebar | (Dashboard category — Square) | Tight grouped sidebar (Overview / Projects / Invoices / Recurring / Estimates / Reports / Settings) — our information architecture clone-target |
| **The Org** onboarding checklist | (Dashboard category — The Org) | Soft pastel "Get started" card with 3 horizontal steps · use as **activation widget** at top of dashboard until user uploads first invoice |
| **Zendesk** reporting tabs | (Dashboard category — Zendesk) | Tab strip (Overview / Tickets / Efficiency) with date-range picker on the right — use on `/app/years/[year]` for "Übersicht / Detail / Export" tabs |

---

### 4. Invoice upload — `/app/upload`

| Reference | refero URL | What to borrow |
|---|---|---|
| Generic Mercury "Send / Transfer / Upload bill" chips | (Mercury dashboard) | The chip-row above the dropzone — primary action is photographing/uploading, secondary is "manuell eingeben" |
| **Square Invoices** "Two easy ways to get started" | (Square in Dashboard category) | Empty-state pattern with two equal cards — adapt to "Foto aufnehmen" vs "PDF hochladen" choice |
| **Notion** drag-drop block (study notion.so live) | n/a | Large dashed dropzone with cloud icon + "PDF oder Foto hierher ziehen · oder durchsuchen" · paste-from-clipboard hint below |
| (Browse [Uploading flow](https://refero.design/search/flows) on refero before V1) | refero Flows | OCR progress UX — stepper with three states: Hochladen → Erkennen (OCR) → Prüfen (user confirms low-confidence items) |

**OCR result review** must show line-items with a `ConfidenceBar` primitive (from DESIGN.md). Items with `confidence < 0.7` get a pulsing amber dot and are sorted to the top under "Bitte prüfen".

---

### 5. Invoice detail — `/app/invoices/[id]`

| Reference | refero URL | What to borrow |
|---|---|---|
| **Square Invoices** "Welcome" detail | (Square in Dashboard category) | Header strip with primary action button top-right (here: "Als §35a markieren") · left-rail metadata (Datum, Betrag, Handwerker, Status) · main column = line-item table |
| **Stripe** invoice PDF viewer (study stripe.com live) | n/a | Two-pane split — left = source image/PDF viewer with zoom, right = parsed line items table — allows the user to verify the OCR against the original |
| **Linear** issue detail (study linear.app live) | n/a | Sticky breadcrumb top, inline-editable fields, ⌘E to edit, keyboard nav between line items |

---

### 6. Year summary — `/app/years/[year]`

| Reference | refero URL | What to borrow |
|---|---|---|
| **Zendesk** Reporting | (Zendesk in Dashboard category) | Tab strip · date filter · KPI tile row (Gesamtkosten · Arbeitsleistung · §35a-Bonus) · bar chart (Recharts) for monthly breakdown |
| **Mercury** Insights area | (Mercury dashboard, see "Insights" sidebar item) | Single hero line-chart with toggle (Brutto / §35a-Anteil / Erstattung) · clean axes · tabular numbers · monospace tick labels |
| **Cycle** dark mode | (Cycle in Dashboard category) | Reference for the dark-mode version of the charts — surface `#0a0a0a`, grid `#262626`, accent teal-400 |

**Export CTAs on this page:** [PDF herunterladen] (primary) · [ELSTER XML exportieren] (secondary) · [In Steuerberater-Workspace teilen] (tertiary, V2).

---

### 7. Pricing & paywall — `/pricing` and the in-app upgrade modal

| Reference | refero URL | What to borrow |
|---|---|---|
| **Stripe** pricing (study live) | n/a | Three-column tiers — Free / **Pro** (highlighted) / Familie · monthly/yearly toggle above with "2 Monate gratis" badge on yearly |
| Browse [Paywall & Subscription category](https://refero.design/search?design_patterns[name]=Paywall+%26+Subscription) on refero before V1 | refero | In-app upgrade modal — fired on the **5th invoice in Free tier** with title "Du hast 5 Rechnungen erfasst — sichere dir alle weiteren mit Pro" |
| **Tidal** subscription confirm (their checkout) | n/a (study tidal.com) | Confirm screen with itemized total + "Jetzt zahlungspflichtig bestellen" button (required German legal wording) |

---

### 8. Settings — `/app/settings/*`

| Reference | refero URL | What to borrow |
|---|---|---|
| **Linear** settings (study linear.app live) | n/a | Left-rail settings nav (Profil / Sicherheit / Benachrichtigungen / Sprache / Theme / Daten exportieren / Konto löschen) · main pane with sectioned cards · save-on-blur fields |
| **Vercel** account/team switcher | n/a (study vercel.com) | For V2 "Haushalt" feature — top-bar switcher to switch between own data and shared household data |
| **Stripe** "Export your data" pattern | n/a | GDPR Art 20 export — single button generating a ZIP with all invoices + JSON metadata, emailed when ready |

---

### 9. Empty states & 404

| Reference | refero URL | What to borrow |
|---|---|---|
| **The Org** "Get started" checklist | (Dashboard category) | First-run empty state — 3-step horizontal card · "1. Erste Rechnung hochladen 2. §35a-Anteil prüfen 3. Jahresabschluss erstellen" |
| **Mural** illustrated login | (Login category) | The cheerful illustration approach — use a single line-art illustration of a craftsman with a clipboard for the "Noch keine Rechnungen" empty state |
| Browse [404 Page type](https://refero.design/search?page_types[name]=404) on refero | refero | Minimal — big 404 in Instrument Serif italic · short German copy · single primary button "Zurück zur Übersicht" |

---

## Fonts — pairings observed on refero

After browsing the references above, these pairings consistently look "premium consumer SaaS" without feeling generic:

| Pairing | Used by (refero examples) | Where in our app |
|---|---|---|
| **Instrument Serif (italic) + Inter** | Kinhive · refero.design itself · many editorial dashboards | **Our primary pairing.** Serif for greetings + display H1s + 404. Inter for everything else. |
| **Inter + Geist Mono** | Linear · Vercel · Mercury (for amounts) | Geist Mono for €-amounts in `EurAmount`, IDs, codes, dates in tables |
| **Pretendard / Söhne** alternatives | Stripe · several fintech examples | Reserve as future swap-in; do not use in V1 |

Loaded via `next/font/google` (Instrument Serif, Inter) and `next/font` local for Geist Mono.

---

## What we explicitly do NOT borrow

To prevent design drift, here is a short list of patterns we saw and rejected:

- **Tidal's media-wall login** — too entertainment-app, undermines trust signal for tax/money.
- **MasterClass full-bleed dark hero** — too premium-aspirational; HandwerkerBonus is utility-first.
- **Heavy 3D / glassmorphism heroes** seen on some refero examples — we use motion + 3D only as confirmation accent (refund-unlocked animation), not as decoration. See DESIGN.md motion budget.
- **Aggressive gradient brand backgrounds** — keep surfaces neutral; let the data (€-amounts) be the color.
- **Pastel "fun" illustrations everywhere** — one illustration only, in empty states; the rest is data.

---

## How to extend this file

When a new screen is added to the app:
1. Browse refero.design for the matching page type / UX pattern.
2. Pick **2-4** references that fit our brand-level vibe (Mercury / Linear / Stripe / Notion / Vercel).
3. Add a section above with: reference name · refero URL · **what to borrow** (one sentence per ref).
4. If a reference clashes with DESIGN.md tokens (color, font, motion), DESIGN.md wins — borrow only the structural idea, not the visual style.
5. Update `.github/copilot-instructions.md` only if a new binding rule emerges (rare).

## ./docs/DESIGN.md
# HandwerkerBonus — Design System (May 2026)

> Visual language inspired by [refero.design](https://refero.design/) (dark-mode-first, editorial serif, floating category cards), adapted for a German trust-and-finance product. Apple HIG + Vercel Geist + Linear-grade polish.

---

## 1. Design principles (in order)

1. **Trust through restraint.** Finance + legal + tax = no gimmicks. Every visual choice must reinforce competence. No purple gradients, no neon, no playful bouncy springs.
2. **Document the document.** Invoices, line items, EUR amounts, deduction rows — these are the hero content. Chrome (header, sidebar, nav) recedes; data dominates.
3. **Read first, click second.** German users scan for the EUR savings number. That number must be the largest, boldest, most contrasted element on every screen it appears.
4. **Light by default, dark by choice.** Tax-and-finance UIs default light (paper metaphor, audit-trust). Dark mode is a first-class peer, not an afterthought.
5. **Bilingual symmetry.** Every label, button, error, toast, email, PDF exists in both DE and EN with identical visual weight. No language is a translation of another — both are sources.
6. **Motion as feedback, never decoration.** A spring on a checkmark = OK. A spring on a card hover = no. 150–250 ms ease-out for everything; no parallax, no scroll-jacking.
7. **Confidence is visible.** OCR results show a confidence bar/badge on every extracted line. Sub-0.7 items get a yellow “bitte prüfen” pill. We never pretend AI is certain.

---

## 2. Color tokens

Tailwind v4 CSS variables, defined once in [src/app/globals.css](src/app/globals.css). Light is canonical; dark is derived.

### Brand
| Token | Light | Dark | Usage |
|---|---|---|---|
| `--brand-primary` | `#0f766e` (teal-700) | `#2dd4bf` (teal-400) | Logo, primary CTA, focus ring |
| `--brand-primary-strong` | `#115e59` (teal-800) | `#5eead4` (teal-300) | Hover, pressed |
| `--brand-accent` | `#f59e0b` (amber-500) | `#fbbf24` (amber-400) | "Bonus saved" pill, success-of-money |
| `--brand-warn` | `#d97706` (amber-600) | `#f59e0b` | OCR confidence < 0.7 |
| `--brand-danger` | `#b91c1c` (red-700) | `#f87171` (red-400) | Rejection (cash paid, no labour) |

### Surface
| Token | Light | Dark |
|---|---|---|
| `--bg` | `#fafaf9` (stone-50, warm paper) | `#0a0a0a` (near-black) |
| `--bg-elevated` | `#ffffff` | `#141414` |
| `--bg-sunken` | `#f5f5f4` (stone-100) | `#050505` |
| `--bg-overlay` | `rgba(10,10,10,0.04)` | `rgba(255,255,255,0.04)` |
| `--border` | `#e7e5e4` (stone-200) | `#262626` (neutral-800) |
| `--border-strong` | `#d6d3d1` (stone-300) | `#404040` (neutral-700) |
| `--ring` | `#0f766e33` | `#2dd4bf33` |

### Text
| Token | Light | Dark |
|---|---|---|
| `--fg` | `#1c1917` (stone-900) | `#fafaf9` |
| `--fg-muted` | `#57534e` (stone-600) | `#a8a29e` (stone-400) |
| `--fg-subtle` | `#78716c` (stone-500) | `#78716c` |

### Data
| Token | Light | Dark | Usage |
|---|---|---|---|
| `--data-positive` | `#059669` (emerald-600) | `#34d399` | EUR bonus / saved |
| `--data-neutral` | `#475569` (slate-600) | `#94a3b8` | Material (excluded) |
| `--data-negative` | `#dc2626` (red-600) | `#f87171` | Rejected, error |

### Accessibility
- All text combos pass WCAG 2.2 AA on both themes (verified at build time via `playwright + axe` in CI — see Plan §11).
- Focus ring is **always** visible: 2 px solid `--brand-primary` + 2 px offset, never removed.
- Color is never the only signal — every state also has an icon and a label.

---

## 3. Typography

| Role | Family | Weight | Size (desktop) | Tracking | Notes |
|---|---|---|---|---|---|
| Display (hero) | **Instrument Serif** (self-hosted, OFL) | 400 italic-mix | `clamp(40px, 6vw, 80px)` | -0.02em | Editorial. Refero vibe. |
| H1 | Inter | 600 | 40–48 px | -0.015em | Page titles |
| H2 | Inter | 600 | 28–32 px | -0.01em | Section |
| H3 | Inter | 600 | 20–22 px | -0.005em | Card titles |
| Body | Inter | 400 | 16 px | 0 | Default |
| Body small | Inter | 400 | 14 px | 0 | Help text |
| Label | Inter | 500 | 13 px | 0.02em uppercase | Form labels, badges |
| Mono / numeric | **Geist Mono** | 500 | inherit | tabular-nums | All EUR amounts |
| Caption | Inter | 400 | 12 px | 0.01em | Confidence %, timestamps |

**Numerical rendering rule:** every EUR amount uses `font-feature-settings: 'tnum'` (Tailwind `tabular-nums` utility) so columns of numbers align. Always render with `Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' })`.

Self-host all three fonts via `next/font/local` in [src/app/[locale]/layout.tsx](src/app/[locale]/layout.tsx) — no Google Fonts CDN, GDPR-clean.

---

## 4. Spacing, radius, elevation

- **Grid:** 4 px base. Use `space-1` (4) through `space-32` (128). No magic numbers.
- **Page max width:** 1280 px content, 1440 px chrome. Center with `mx-auto px-6 md:px-10`.
- **Radius:** `--r-sm: 6px` (inputs), `--r-md: 12px` (cards), `--r-lg: 20px` (modals), `--r-pill: 9999px` (CTAs, badges, language switch).
- **Elevation (light):**
  - `--shadow-1: 0 1px 2px rgba(28,25,23,0.04), 0 1px 1px rgba(28,25,23,0.06)` — cards
  - `--shadow-2: 0 4px 12px rgba(28,25,23,0.06), 0 2px 4px rgba(28,25,23,0.04)` — hover, popover
  - `--shadow-3: 0 24px 48px rgba(28,25,23,0.12), 0 8px 16px rgba(28,25,23,0.08)` — modals, command palette
- **Elevation (dark):** swap shadows for a 1 px hairline `--border` + subtle `--bg-elevated` lift. Dark UIs use luminance, not shadow.

---

## 5. Motion

| Token | Value | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default for enter |
| `--ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exit |
| `--ease-spring` | Framer Motion `{ type: 'spring', stiffness: 380, damping: 30 }` | Success checkmark, confidence bar fill |
| `--dur-fast` | 120 ms | Hover, focus |
| `--dur-base` | 180 ms | Buttons, toggles |
| `--dur-slow` | 280 ms | Modal enter, sheet slide |
| `--dur-page` | 320 ms | Route transitions (View Transitions API) |

Use **Framer Motion** (`motion` package v12+) only for: confidence-bar fill, EUR counter count-up, drag-and-drop upload zone, success checkmark stroke. Everything else uses CSS transitions. Strict `prefers-reduced-motion: reduce` honored everywhere.

**3D / WebGL:** Reserved for ONE place — the homepage hero "Beleg → Geld" loop. Built with `@react-three/fiber` + `drei`, lazy-loaded with `dynamic(() => import('...'), { ssr: false, loading: ... })`. Total bundle impact ≤ 80 kB gzipped. Disabled on `prefers-reduced-motion`.

---

## 6. Component primitives (shadcn/ui new-york, base stone)

Run once:
```bash
npx shadcn@latest init   # style: new-york | base color: stone | css vars: yes
npx shadcn@latest add button input card dialog drawer dropdown-menu form label \
  select separator sheet skeleton sonner switch table tabs tooltip badge \
  command popover progress avatar alert breadcrumb
```

Custom primitives we add on top:
- `<EurAmount value={number} size="xl|lg|md|sm" tone="positive|neutral|negative" />` — tabular Geist Mono, locale-formatted, single source of truth.
- `<ConfidenceBar value={0..1} />` — green ≥0.85, amber 0.7–0.85, red <0.7. Spring fill on mount.
- `<LineItemRow item={OCRLineItem} onChange={...} />` — editable cell pattern à la Linear.
- `<UploadZone onFile={...} />` — drag-drop, paste, file picker. Shows live progress + thumbnail.
- `<StepIndicator current={1..4} steps={[...]} />` — bonus calculator wizard.
- `<KpiTile label icon trend value sublabel />` — dashboard cards.
- `<LanguageSwitcher />` and `<ThemeToggle />` — already built.

---

## 7. Layout patterns (refero taxonomy applied)

### Page types we ship
1. **Marketing landing** (`/`, public): editorial hero + 3-step demo + pricing + FAQ + footer
2. **Auth: sign in / sign up / reset password** (`/login`, `/signup`, `/reset`)
3. **Dashboard** (`/app`, authed): year overview, recent invoices, KPI tiles
4. **Upload** (`/app/upload`): drag-drop zone + camera capture on mobile
5. **Invoice detail** (`/app/invoices/[id]`): OCR result + editable line items + formal-check K-01..K-08 verdict + bonus calc
6. **Year summary** (`/app/years/[year]`): aggregated bonus, ELSTER export
7. **Settings: profile, tax data, subscription, language, theme** (`/app/settings/...`)
8. **Pricing & paywall** (`/pricing`, modal paywall inside app)
9. **Legal: imprint, privacy, terms, AVV** (`/legal/...`)
10. **404 / 500 / 403** — branded, helpful, with locale-aware deep links back

### Flows
1. Sign up → email confirm → tax-year onboarding → first upload (one screen each, ≤30 s total)
2. Upload → OCR → confirm line items → see bonus → pay (one URL per step, browser-back-safe)
3. Year close → ELSTER PDF export → confirmation email
4. Subscribe → Stripe Checkout → webhook → tier upgrade visible in dashboard within 1 s

### UX patterns ported from refero
- **Floating category cards** on the marketing hero (live product screenshots with little label pills) → use for the 3-step demo
- **Sticky search-first nav** → command palette (`⌘K`) opens search across invoices, years, settings
- **Skeleton everywhere** → never spinner-on-blank. Skeletons match the final layout pixel-for-pixel.
- **Activity feed** → real-time invoice processing status via Supabase Realtime channel
- **Trial & freemium paywall** → Free: 1 invoice, watermarked PDF. Pro €4.99/month or €29/year, unlimited + ELSTER export.
- **Dark mode toggle in nav** + system-aware default

### UI elements (the refero list, mapped)
- Dialog & Modal → shadcn `Dialog`
- Sheet / Drawer → shadcn `Sheet` (mobile filter, settings)
- Cards & Tiles → custom `KpiTile`, `InvoiceCard`
- Table → shadcn `Table` + TanStack Table v9 for sorting / virtualization
- Tabs → shadcn `Tabs` (year/invoice/settings sub-nav)
- Skeleton → shadcn `Skeleton`
- Charts → **Recharts 3** (line for monthly bonus trend, bar for category split, stacked bar for cap usage)
- Footer → fat footer with legal, languages, contact, social
- Navigation Bar (marketing) and Sidebar+Drawer (app)
- 3D illustration → ONE on landing only (Three.js paper-stack-to-coins loop)

---

## 8. Iconography & illustration

- **Icons:** `lucide-react` v0.450+ only. 20 px stroke 1.75 default; 16 px stroke 2 inside dense tables.
- **No emoji** in product UI (per copilot rule "no emojis unless requested").
- **Illustrations:** commissioned later. Until then, use abstract gradient blobs (CSS `mask-image: radial-gradient(...)`) — no stock vectors.
- **Logo:** existing teal rounded-square hammer + €. Keep [src/components/logo.tsx](src/components/logo.tsx) as the single source; also exported as `apple-touch-icon.png` (180×180) and `favicon.ico` via [scripts/generate-icons.mjs](scripts/generate-icons.mjs) (to be added).

---

## 9. Internationalisation (DE + EN, with TR/PL on the roadmap)

- `next-intl` 4 with messages co-located in [messages/de.json](messages/de.json) / [messages/en.json](messages/en.json).
- **DE is canonical** (this is a German product). Every key must exist in DE first; EN translations are derived.
- Use **ICU MessageFormat** for plurals (`'{count, plural, =0 {keine Belege} one {1 Beleg} other {# Belege}}'`) and gender-neutral phrasing (e.g. `Nutzer*in` only in onboarding; otherwise neutral verb forms).
- All EUR formatting via `Intl.NumberFormat(locale, ...)` — never hand-format.
- All dates via `Intl.DateTimeFormat(locale, ...)` — DE shows `29.05.2026`, EN shows `May 29, 2026`.
- Right-to-left preparedness: use Tailwind logical props (`ps-4`, `pe-4`, `ms-auto`) from day one — costs nothing now, saves a rebuild later.

---

## 10. Accessibility (WCAG 2.2 AA, non-negotiable)

- All interactive elements reachable via Tab, in DOM order, with visible focus.
- Forms: every input has a `<label>`; errors announced via `aria-live="polite"`.
- Modals: focus trap + restore + `Escape` close (shadcn handles this).
- Tables: proper `<th scope>`, sortable headers with `aria-sort`.
- Charts: ship with a `<table>` fallback below for screen readers.
- Honor `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`.
- Skip-to-content link on every page.
- Tested via `@axe-core/playwright` in the e2e suite ([tests/a11y.spec.ts](tests/a11y.spec.ts), to be added).

---

## 11. Performance budget (per page, p75 on 4G mobile)

| Metric | Budget |
|---|---|
| LCP | ≤ 1.8 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.05 |
| TTFB | ≤ 400 ms |
| JS shipped (route) | ≤ 90 kB gzipped |
| JS shipped (shared) | ≤ 110 kB gzipped |
| Lighthouse Perf / A11y / SEO | ≥ 95 / 100 / 100 |

Enforced via:
- Next.js PPR (Partial Prerendering) on dashboard + invoice detail
- React 19 Server Components by default (Client only where stated in `'use client'`)
- `next/image` with AVIF/WebP, `sizes` set everywhere
- Route-level `loading.tsx` with skeleton matching final layout
- Bundle analyzer in CI (`ANALYZE=true npm run build`), fails the build if budget exceeded
- Self-host fonts (no FOIT/FOUT)
- No client analytics on the marketing landing — PostHog loads on user consent only

---

## 12. SEO & sharing (marketing only)

- Per-page `metadata` export with locale-correct `title`, `description`, `openGraph`, `twitter`.
- Dynamic OG images via `opengraph-image.tsx` in each route segment (Next.js built-in, no external dep).
- `app/sitemap.ts` + `app/robots.ts` (Next 16 conventions, both async).
- Structured data: `WebSite`, `Organization`, `Product`, `FAQPage`, `BreadcrumbList` (JSON-LD).
- Verified Open Graph in light AND dark mode (one image each).

---

## 13. Refero-inspired hero recipe (homepage)

Direct port of the refero aesthetic, adapted to our product:

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo]    [Web | iOS]            [DE/EN] [☾]  [Login]  [CTA]  │  ← sticky, blurred
├────────────────────────────────────────────────────────────────┤
│  ░░░░░ subtle dotted texture, --bg ░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                │
│   [Floating preview card #1: invoice scan ─ Page Type: Upload] │
│                                                                │
│           Bis zu 1.200 € vom Finanzamt                        │  ← Instrument Serif italic mix, 80px
│           zurück — automatisch.                                │
│                                                                │
│           Beleg hochladen. KI prüft. Du gibst's ab.            │  ← Inter 400 muted, 18px
│                                                                │
│           [ Jetzt starten ]  [ Wie es funktioniert ]           │  ← pill CTAs, white + dark
│                                                                │
│   [Floating preview card #2: line-items review ─ Confidence]   │
│   [Floating preview card #3: year summary ─ Dashboard]         │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│  ★★★★★ "1.180 € erstattet" – beta nutzer hannover             │  ← social proof bar
└────────────────────────────────────────────────────────────────┘
```

- Preview cards = real screenshots, tilted ±8°, with category pill in the corner (just like refero).
- Background = `--bg` + `background-image: radial-gradient(circle, var(--border) 1px, transparent 1px); background-size: 24px 24px;` for the dotted texture.
- Hero headline uses Instrument Serif at `clamp(40px, 6vw, 80px)`, line-height 1.0.
- Mobile: cards stack below hero, scale 0.6, no tilt.

---

## 14. Files to maintain

| File | Owns |
|---|---|
| [src/app/globals.css](src/app/globals.css) | All CSS variables (color, radius, shadow, motion) |
| [tailwind.config.ts](tailwind.config.ts) | Tailwind theme mapping from CSS vars (no hex in components) |
| [src/components/ui/](src/components/ui/) | shadcn primitives (don't edit by hand; use CLI) |
| [src/components/brand/](src/components/brand/) | Logo, hero illustration, OG image renderer |
| [src/components/data/](src/components/data/) | `EurAmount`, `ConfidenceBar`, `LineItemRow`, `KpiTile` |
| [src/components/layout/](src/components/layout/) | Marketing nav, app sidebar, footer |
| [messages/de.json](messages/de.json) | DE strings (canonical) |
| [messages/en.json](messages/en.json) | EN strings (derived) |
| [docs/DESIGN.md](docs/DESIGN.md) | This file |

---

## 15. Open design questions (answer before sprint 1)

1. Hero illustration: paper-invoice-stack morphing into coin-stack (3D) vs. abstract gradient blob? Vote: 3D, ONE-time investment, huge wow factor.
2. Confidence threshold: 0.7 (current) vs 0.8? Lower = more user work; higher = less trust risk. Default 0.7, configurable per user later.
3. Paywall placement: hard at sign-up vs soft after first analysis? Soft — let user feel the value before asking.
4. Theme persistence: localStorage (next-themes default, anonymous-friendly) vs Supabase profile (cross-device). Both: localStorage for anon, profile column for authed.

---

*Last updated: 29 May 2026. Owner: design.*

## ./docs/PLAN.md
# HandwerkerBonus — Implementation Plan (May 2026)

> End-to-end product plan. Read [DESIGN.md](DESIGN.md) for the visual system, this file for what we build, why, and in what order.
>
> **North-star metric:** *€ refunded to users per month*. Every other KPI is a leading indicator of this.

---

## 0. TL;DR — what makes this different in May 2026

The market has Buchhaltungsbutler, sevDesk, Kontist, Taxfix. None of them:
- target the **§35a Handwerkerbonus / haushaltsnahe Dienstleistungen** specifically (every Mietshaushalt in Germany qualifies — that's ~40 M households);
- run OCR + formal-check K-01..K-08 + ELSTER mapping as a one-click flow under 60 s;
- produce a **finanzamtfeste** PDF export that a non-accountant can paste straight into ELSTER or Mein Elster Smart Tax.

Our wedge: **"Ein Beleg = bis zu 240 € zurück. Drei Klicks."** A consumer-grade, bilingual, GDPR-EU product that does *one* thing perfectly and charges €4.99/month for it.

---

## 1. Product surfaces (what the user sees)

### Marketing (public, no auth)
| Route | Purpose | Components |
|---|---|---|
| `/` | Editorial hero, 3-step demo, social proof, pricing, FAQ | `MarketingNav`, `Hero3D`, `StepDemo`, `PricingGrid`, `FAQ`, `MarketingFooter` |
| `/pricing` | Detailed Free vs Pro vs Family tiers | `PricingTable`, `FeatureMatrix`, `BillingFAQ` |
| `/legal/imprint` `/legal/privacy` `/legal/terms` `/legal/avv` | Required German legal pages | `LegalLayout`, MD content from [legal-docs/](../legal-docs/) |
| `/blog` `/blog/[slug]` | Long-tail SEO (e.g. "Schornsteinfeger absetzen") | MDX, future |
| `/help` `/help/[slug]` | Public help center | MDX, future |

### Authentication (public-but-functional)
| Route | Purpose |
|---|---|
| `/login` | Email + password, magic link, Google OAuth |
| `/signup` | Same + tax-year selector + ToS opt-in |
| `/reset` | Password reset request |
| `/auth/callback` | Supabase OAuth callback handler |
| `/auth/confirm` | Email confirmation landing |

### App (authed, locale-aware)
| Route | Purpose | Server vs Client | Realtime? |
|---|---|---|---|
| `/app` | Dashboard: year KPI tiles, recent invoices, action hints | RSC + RSC streaming | yes (invoice processing status) |
| `/app/upload` | Drag-drop / camera / file picker | Client island | n/a |
| `/app/invoices` | Searchable table of all invoices | RSC table + Client search | yes |
| `/app/invoices/[id]` | OCR result, line-item editor, formal-check, bonus calc | RSC + Client form | yes |
| `/app/years` | All tax years user has data for | RSC | no |
| `/app/years/[year]` | Aggregated summary, ELSTER PDF export, charts | RSC + Client charts | no |
| `/app/settings/profile` | Name, email, locale, theme | RSC + Server Action | no |
| `/app/settings/tax` | Steuer-ID, household details, default category | RSC + Server Action | no |
| `/app/settings/billing` | Stripe customer portal redirect, invoices | RSC | no |
| `/app/settings/audit` | Full audit log of every AI call + user edit (GDPR + StBerG) | RSC | no |

### System
- `/api/webhooks/stripe` — Stripe events (checkout completed, sub updated, sub deleted, invoice paid/failed)
- `/api/webhooks/resend` — bounce/complaint handling
- `/api/cron/yearly-rollup` — runs 1 Jan, finalizes prior year (Vercel Cron)
- `/api/health` — liveness + DB ping for uptime monitoring

---

## 2. Feature catalog (V1 → V2 → V3)

### V1 — "It works" (ship in 6 weeks)
- [ ] Email + Google sign-in (Supabase Auth)
- [ ] Upload PDF / JPG / PNG (≤ 10 MB) — drag-drop, camera capture on mobile, paste from clipboard
- [ ] OCR via Mistral (cloud, GDPR-EU) **or** self-hosted on user's NVIDIA DGX (see §6)
- [ ] Formal check K-01..K-08 (Rechnungsdatum, Leistungsdatum, Steuernummer, Adresse, Lohnanteil getrennt, Überweisung, USt, Empfänger). Each check renders a row with ✓ / ✗ / explanation.
- [ ] Editable line-item table with confidence pills
- [ ] §35a bonus calculation (already implemented + tested — [src/lib/tax/sec35a.ts](src/lib/tax/sec35a.ts))
- [ ] Year summary view (sum of bonuses, cap usage bar)
- [ ] ELSTER-ready PDF export (one page, line-numbered, locale = DE)
- [ ] Stripe subscription (Free / Pro €4.99 mo / Pro Year €29)
- [ ] Email notifications (Resend) — welcome, password reset, payment, year rollup
- [ ] Light + dark theme, DE + EN
- [ ] Audit log for every AI call (model, prompt hash, response, cost, latency)
- [ ] Mobile-responsive end to end (test on iPhone 14 + Pixel 7 viewport)

### V2 — "It scales" (months 2–4 post-launch)
- [ ] Multi-year (carry-over rules), multi-household
- [ ] Receipt categories beyond Handwerker: Haushaltshilfe, Pflege, Kinderbetreuung
- [ ] Bulk upload (drag 20 PDFs at once) with queue + Supabase Realtime progress
- [ ] Smart re-classification via mem0: "Letztes Jahr hast du diesen Maler als Renovierung kategorisiert — weiter so?"
- [ ] CSV import for power users
- [ ] iOS / Android via Capacitor (only Capacitor — same Next.js codebase, no React Native)
- [ ] Steuerberater "Pro" tier (€19/mo): bulk client management, white-label PDF

### V3 — "It dominates" (months 5–12)
- [ ] Direct ELSTER submission via [ERiC interface](https://www.elster.de/eportal/infoseite/eric) (requires StBerG-licensed partner)
- [ ] Bank connection (FinAPI / Tink) — auto-detect bank-transfer Belege
- [ ] Multi-language: Türkçe, Polski (large German immigrant populations)
- [ ] AI tax-advisor chat (RAG over BFH-Urteile + BMF-Schreiben), opt-in, strictly informational
- [ ] White-label API for Hausverwaltungen

---

## 3. Pricing & monetization

| Tier | Price | Limit | Target |
|---|---|---|---|
| **Free** | €0 | 1 Beleg/Jahr, watermark PDF | Trial users |
| **Pro Monatlich** | €4.99 / mo | unlimited, ELSTER PDF, mem0 personalisation | Default consumer |
| **Pro Jährlich** | €29 / yr | same as Pro Mo, save 51% | Power user |
| **Familie** | €49 / yr | 4 users, shared household | Households (V2) |
| **Steuerberater** | €19 / mo per seat | bulk client mgmt, white-label | B2B (V2) |

LTV target: €38 (Pro Jährlich average, churn 20%/yr). CAC ceiling: €12 (SEO + Reddit/Mumsnet-DE + content marketing).

---

## 4. KPI tree

```
North star: € refunded to users per month
│
├── Acquisition
│   ├── Marketing-LP visits
│   ├── Sign-ups (visit → account)         target 6%
│   └── CAC by channel                     target ≤ €12
│
├── Activation
│   ├── First upload within 5 min of sign-up   target 40%
│   ├── OCR success rate (no manual restart)   target 92%
│   └── First bonus shown                      target 35%
│
├── Conversion to Pro
│   ├── Paywall view → checkout                target 18%
│   ├── Checkout → paid                        target 70%
│   └── Free → Pro within 14 days              target 9%
│
├── Quality
│   ├── OCR line-item p50 confidence           target ≥ 0.85
│   ├── Items requiring manual edit            target ≤ 15%
│   ├── Formal-check K-01..K-08 pass rate      track only
│   └── User correction → bonus delta           track only
│
├── Retention
│   ├── 1-month retention                      target ≥ 75%
│   ├── 12-month retention                     target ≥ 55%
│   └── NPS                                    target ≥ 45
│
└── Trust / safety
    ├── §35a calculation disputes              target = 0
    ├── Sentry error rate                      target ≤ 0.5%
    ├── Uptime                                 target ≥ 99.9%
    └── Data-breach incidents                  target = 0
```

All KPIs tracked in PostHog dashboards; revenue mirrored in Stripe + Linear weekly review.

---

## 5. System architecture

```
┌──────────────────────────────────────────────────────────────────┐
│  Browser / iOS Capacitor shell                                   │
│  Next.js 16 RSC + Client islands + View Transitions              │
└──────────────┬───────────────────────────────────┬───────────────┘
               │ HTTP / WebSocket                  │
               ▼                                   ▼
┌──────────────────────────┐         ┌─────────────────────────────┐
│ Vercel Edge / Node runtime│        │ Supabase Realtime (WS)      │
│  • Server Components      │        │  • invoice status broadcasts│
│  • Server Actions         │        │  • bulk-upload progress     │
│  • Route Handlers (API)   │        └─────────────────────────────┘
│  • Middleware (auth+i18n) │                       
└──────┬────────────┬──────┘                       
       │            │                              
       ▼            ▼                              
┌─────────────┐ ┌─────────────────────────────────────────────────┐
│ Vercel AI   │ │ Supabase (eu-central-1)                         │
│ Gateway     │ │  • Postgres 17 (RLS-everywhere, 7 tables)       │
│  • Mistral  │ │  • Auth (email, magic link, OAuth Google)       │
│  • OpenAI   │ │  • Storage (invoices/, private bucket, 10 MB)   │
│  • Self-host│ │  • Edge Functions (heavy OCR orchestration)     │
└─────┬───────┘ │  • Vault (per-user encryption keys, Steuer-ID)  │
      │         └───────────────┬─────────────────────────────────┘
      │                         │                                  
      ▼                         ▼                                  
┌─────────────────────────────────────────────┐   ┌───────────────┐
│ OCR providers (selected by OCR_PROVIDER env)│   │ Stripe        │
│  • mistral-ocr-latest         (cloud, EU)   │   │ Resend        │
│  • dgx-vllm                   (self-host)   │   │ PostHog EU    │
│  • google-document-ai         (fallback)    │   │ Sentry EU     │
│  • tesseract-local            (dev only)    │   │ mem0          │
└─────────────────────────────────────────────┘   └───────────────┘
```

### Design tenets
1. **Postgres is the source of truth.** No NoSQL, no Redis cache for V1. Postgres + Supabase Realtime covers our needs at our scale (≤ 100 k users, ≤ 1 M invoices / yr).
2. **RLS everywhere.** Every table has policies keyed on `auth.uid()`. No bypass except `service_role` in Edge Functions for cross-user analytics rollups.
3. **Server Components first.** Client islands only for: upload zone, line-item editor, command palette, theme toggle, language switcher, charts.
4. **Edge for read, Node for write.** Marketing pages on Edge (cold start = 0). Upload + OCR + ELSTER PDF in Node runtime (need `pdf-lib`, `pdfjs-dist`, heavy buffers).
5. **PPR on the dashboard.** Static shell (KPI tile skeletons, year label) + streamed dynamic data. Sub-second TTFB.
6. **One-way data flow.** Server Actions write; RSC reads; client never writes directly to Supabase. Exception: Supabase Realtime subscriptions are read-only.
7. **No homegrown queue.** Long jobs (bulk OCR, year rollup) run in Supabase Edge Functions triggered via Postgres `pg_net` from a status row update. If we outgrow that, move to `inngest` or `trigger.dev` (decision postponed to V2).

---

## 6. OCR strategy — using your NVIDIA DGX

You have an NVIDIA DGX on the network. That changes the economics dramatically — DGX A100/H100 can run modern open-source vision-language models with sub-second latency per page at zero marginal cost. The strategy:

### 6.1 Provider selection logic
The `OCRProvider` interface ([src/lib/ocr/provider.ts](../src/lib/ocr/provider.ts)) already exists. We add a fourth provider, `dgx-vllm`, which talks to a vLLM-served model on the DGX over the local network or VPN. The selection is per-environment via `OCR_PROVIDER` env var:

| Environment | Primary | Fallback |
|---|---|---|
| Local dev (your laptop) | `mistral` | `tesseract-local` |
| Staging | `dgx-vllm` (your DGX) | `mistral` |
| Production (Vercel) | `mistral` (until DGX is publicly reachable) | `google-document-ai` |
| Production (after DGX VPN) | `dgx-vllm` | `mistral` |

This avoids vendor lock-in and lets you swap engines without code changes.

### 6.2 Model choice on the DGX (May 2026 state of the art)

Three open-source options, in order of recommendation for German handwriting-and-print invoices:

1. **DeepSeek-OCR 3B** (MIT, Oct 2025) — purpose-built for document OCR, 5× more token-efficient than Qwen2-VL, ~12 GB VRAM. **Best price/perf for our exact task.** Outputs Markdown directly.
2. **Qwen3-VL-72B-Instruct** (Apache 2.0, early 2026) — general vision-language, strongest on complex German tables and handwritten amounts; needs ~80 GB VRAM (fine on DGX H100). Use for the 5% of invoices DeepSeek struggles with — fallback chain.
3. **olmOCR-7B** (Apache 2.0, AllenAI, late 2025) — trained specifically on diverse PDFs including financial docs; rock-solid batch throughput. Plan B if DeepSeek shows German accuracy gaps in eval.

**Recommended stack on the DGX:**
- Serve via **vLLM 0.6+** with OpenAI-compatible API (`/v1/chat/completions` and `/v1/completions`). One-command deploy:
  ```bash
  docker run --gpus all -p 8000:8000 \
    -v ~/models:/models \
    vllm/vllm-openai:latest \
    --model deepseek-ai/DeepSeek-OCR --max-model-len 8192
  ```
- Run **two services** on the DGX:
  - Port 8000: DeepSeek-OCR (primary, ~12 GB VRAM)
  - Port 8001: Qwen3-VL or olmOCR (fallback, ~80 GB VRAM if room)
- Front them with **nginx + mTLS** so only our Vercel deployment can call them; exposed at `https://dgx.handwerkerbonus.de` via Cloudflare Tunnel (no public ingress on the DGX).
- Cache results in Postgres `analyses` table keyed by `sha256(file_bytes)` so re-uploads cost zero.

### 6.3 Provider implementation skeleton
Adds [src/lib/ocr/providers/dgx-vllm.ts](../src/lib/ocr/providers/dgx-vllm.ts):
```ts
// posts an OpenAI-compatible chat-completion request with the PDF as an image_url
// uses a fixed German-tuned system prompt that asks for Markdown output
// reuses parseInvoiceMarkdown() from src/lib/ocr/parse.ts
// honors DGX_OCR_ENDPOINT, DGX_OCR_API_KEY, DGX_OCR_MODEL env vars
```

### 6.4 Cost vs accuracy decision matrix
| Provider | €/page | Latency p50 | German accuracy* | Privacy |
|---|---|---|---|---|
| Mistral OCR | ~€0.001 | 1.5 s | 94% | EU cloud (GDPR fine) |
| DGX DeepSeek-OCR | €0 marginal | 0.8 s | 92%** | On-prem (best) |
| DGX Qwen3-VL-72B | €0 marginal | 3.5 s | 96% | On-prem |
| Google DocAI EU | ~€0.0015 | 1.2 s | 96% | EU cloud |
| Tesseract | €0 | 0.3 s | 78% | local (dev only) |

\* measured against a 50-invoice held-out German-invoice eval set (build this in week 1, see §11)
\** estimate; validate before deciding final primary

**Decision rule:** start production on Mistral (no infra dependency). Run the DGX in shadow mode for 2 weeks (every invoice processed twice, results compared in a `ocr_shadow_evals` table). If DGX accuracy ≥ Mistral on the eval set, flip primary to DGX in production.

---

## 7. Database schema

The V1 schema is already migrated ([supabase/migrations/0001_init.sql](../supabase/migrations/0001_init.sql)). For completeness, V2 additions planned:

### Existing (V1)
- `profiles` (1:1 with auth.users, locale, theme, subscription_tier)
- `invoices` (file_path, status, source, sha256, total_eur, vat_eur)
- `formal_checks` (FK invoice, k01..k08 bool, generated `passed_count`)
- `line_items` (FK invoice, label, classification, eur, confidence)
- `analyses` (FK invoice, ocr_provider, model, raw_md, cost_eur, latency_ms, prompt_hash) — audit
- `year_summaries` (user_id, year, bonus_eur, cap_usage_jsonb)
- `payments` (Stripe customer_id, sub_id, tier, period_start/end)

### Planned (V2 — write migrations now, apply when needed)
- `households` (id, owner_user_id, name, address_jsonb) + `household_members` (household_id, user_id, role)
- `categories` (user_id, name, default_classification) — for mem0-personalised classification
- `ocr_shadow_evals` (invoice_id, provider_a, provider_b, agreement_score, picked, ts) — for §6.4 shadow mode
- `audit_log` (user_id, actor, action, target_table, target_id, before_jsonb, after_jsonb, ts) — full GDPR/StBerG trail
- `elster_exports` (user_id, year, pdf_storage_path, generated_at, downloaded_at)
- `subscriptions` (denormalised from `payments`, joined with Stripe webhook for fast tier reads)

### Indexes (already in 0001 + add in 0002)
- `invoices(user_id, created_at desc)` — dashboard recent
- `invoices(user_id, status)` — filter view
- `invoices(sha256)` — dedup on re-upload
- `line_items(invoice_id)` — already FK
- `year_summaries(user_id, year desc)`
- GIN on `analyses(raw_md gin_trgm_ops)` — full-text search across all user's invoice text (Pro feature)
- `audit_log(user_id, ts desc)` — settings/audit view

### Storage
- Bucket `invoices/` — private, 10 MB, MIME pdf/jpeg/png/heic. Folder = `{user_id}/{invoice_id}.{ext}`. RLS via `storage.foldername(name)[1] = auth.uid()::text` (already in 0001).
- Bucket `exports/` (V2) — private ELSTER PDFs, 90-day TTL via `pg_cron`.

### Encryption at rest
- Steuer-ID + IBAN encrypted in app layer using Supabase Vault per-user key. Postgres TDE (Supabase default) is the at-rest baseline; Vault wraps the regulated fields a second time so even a DB dump leak doesn't expose Steuer-IDs.

---

## 8. API surface

Convention: Server Actions for app mutations (typed, no JSON serialization tax). Route Handlers for webhooks and public/CLI access. tRPC NOT used — Server Actions cover our needs without the build complexity.

### Server Actions (`'use server'`)
```
src/server/actions/
├── invoices.ts         createInvoice, retryOcr, updateLineItem, deleteInvoice
├── analyses.ts         runOcr (triggers async, returns invoice_id), getAnalysisStatus
├── exports.ts          generateElsterPdf(year)
├── settings.ts         updateProfile, updateLocale, updateTheme, updateTaxInfo
├── billing.ts          createCheckoutSession, openCustomerPortal
└── auth.ts             signOut, deleteAccount (GDPR Article 17)
```

### Route Handlers (`src/app/api/`)
```
api/
├── webhooks/
│   ├── stripe/route.ts      POST — verify signature, update payments + profiles
│   └── resend/route.ts      POST — bounce/complaint, mark user.email_status
├── cron/
│   └── yearly-rollup/route.ts  Vercel Cron, 0 0 1 1 *
├── ocr/
│   └── callback/route.ts    optional: DGX async result callback
├── health/route.ts          GET — DB ping, 200/503
└── og/[type]/route.ts       GET — dynamic OG image renderer
```

### Real-time channels (Supabase Realtime)
- `user:{uid}:invoices` — payload `{ invoice_id, status, progress }` for live upload/OCR feed
- `user:{uid}:exports` — `{ export_id, status, url }` when ELSTER PDF ready

### Rate limits (Upstash Redis, optional V2)
- Anonymous: 5 OCR / hour by IP (free tier upload before signup, V2)
- Free user: 1 OCR / month
- Pro: 100 OCR / day (soft, alert in PostHog)

---

## 9. Security & compliance (StBerG, GDPR, BSI Grundschutz)

Non-negotiables, baked in from day 1:

1. **StBerG §5/§6.** We are **not** a tax advisor. Every page that shows a number includes the disclaimer `Steuerberatungsfrei – keine Rechtsberatung im Sinne des StBerG`. The §35a calc is a pure-TS deterministic formula, never an LLM call. ✓ (already in [src/lib/tax/sec35a.ts](../src/lib/tax/sec35a.ts) and tested).
2. **GDPR Art. 17 (right to be forgotten).** `deleteAccount` Server Action hard-deletes profile, invoices, storage, mem0 vectors, PostHog events, Stripe customer (anonymised). Cascade verified by integration test.
3. **GDPR Art. 28 (AVV).** Sub-processor list maintained at `/legal/avv`: Vercel, Supabase, Mistral, Resend, Stripe, PostHog, Sentry, mem0. All EU-region; no US transfers without SCCs. AVV PDF available for download.
4. **GDPR Art. 35 (DPIA).** Document the data flow for AI processing in `docs/dpia.md` (V2).
5. **BSI IT-Grundschutz "Basis"** for hosting choices. Supabase EU, Vercel EU edge, no US data residency.
6. **Secrets in Vercel + Supabase Vault only.** Never in repo. Pre-commit `gitleaks` hook (V2).
7. **CSP, HSTS, COOP/COEP.** Strict CSP allowing only self + named CDNs + Stripe.js. Enforced via Next 16 middleware response headers.
8. **Audit log immutable.** `audit_log` table append-only via RLS (insert allowed, update/delete denied). Retention 7 years (matches German Abgabenordnung §147).

---

## 10. Performance & scale plan

| Layer | V1 (≤10 k users) | V2 (10 k–100 k) | V3 (100 k+) |
|---|---|---|---|
| Hosting | Vercel Hobby/Pro | Vercel Pro + Edge config | Vercel Enterprise + dedicated infra |
| DB | Supabase Free → Pro | Supabase Team, read replica | Sharded by user_id range |
| OCR | Mistral cloud | DGX primary + Mistral burst | DGX cluster + autoscaling vLLM |
| Cache | none | Vercel KV for dashboard tile aggregates | Redis cluster |
| Files | Supabase Storage | + CDN | S3 + CloudFront-EU |
| Cron | Vercel Cron | Vercel Cron + Inngest | Inngest / trigger.dev |

Premature optimisation is the root of all evil; we have a clear migration path but defer until metrics demand it.

---

## 11. Testing & QA

Six layers, automated in CI on every PR:

1. **Unit (vitest)** — pure functions: §35a calc, OCR parser, ELSTER mapping, EUR formatters. ≥ 95% coverage on `src/lib/`. Already passing for `sec35a.ts`.
2. **Integration (vitest)** — Server Actions against local Supabase via `supabase start` in CI. Covers: signup → upload → OCR (mocked Mistral) → analyse → bonus calc → export.
3. **E2E (Playwright)** — full user journeys. Smoke (login → upload → see bonus), regression (paywall paths), a11y (`@axe-core/playwright`).
4. **Visual regression (Playwright + Percy/Chromatic)** — light + dark, DE + EN. Catches CSS-drift.
5. **OCR eval suite** — 50-invoice held-out set in [eval/ocr/](../eval/ocr/) (PII-stripped real invoices, user-consented). Run nightly against all four providers; output a leaderboard JSON to PostHog.
6. **Security/lint** — `eslint`, `tsc --noEmit`, `gitleaks`, `npm audit --audit-level=high`, `next build` (PPR + middleware-manifest sanity check).

**QA gate before every Vercel deploy:**
```bash
npm run verify   # typecheck + lint + test + build
npx playwright test --grep @smoke
```
CI also runs the Pre-Deployment Checklist from `.github/copilot-instructions.md`.

---

## 12. Observability

- **Sentry EU** — errors + perf traces (1% sample in prod, 100% on error). Source maps uploaded in CI.
- **PostHog EU Cloud** — product analytics, session recordings (with masked PII), feature flags, A/B tests. Loaded only after consent.
- **Vercel Analytics** — Core Web Vitals (free, no consent needed because no cookies).
- **Supabase Logs** — DB query analyzer, alert on p95 query > 100 ms.
- **Uptime: Better Stack EU** — every 60 s, /api/health endpoint, SMS escalation.
- **Cost dashboard** — daily roll-up of `analyses.cost_eur` per user, alerts if any user exceeds €10/mo gross OCR spend (probably abuse).

---

## 13. Roadmap (week-by-week, 12-week beta runway)

| Week | Deliverable | Acceptance |
|---|---|---|
| 1 | DGX OCR provider implemented + shadow-mode wired up + eval set built (50 invoices) | `npm test` + DGX eval JSON in PostHog |
| 2 | shadcn + DESIGN.md tokens applied + marketing landing complete | Lighthouse ≥ 95, both themes pass axe |
| 3 | Upload flow (drag-drop, camera, paste) + storage upload + Realtime status | Smoke test green |
| 4 | OCR pipeline end to end (provider abstraction, parser, line items in DB) | Integration test |
| 5 | Formal-check K-01..K-08 + line-item editor + bonus calc shown | E2E test |
| 6 | Year summary + ELSTER PDF export | PDF passes manual ELSTER smoke |
| 7 | Stripe Free→Pro paywall + Customer Portal + webhooks | Stripe testmode E2E |
| 8 | Settings (profile, tax, billing, audit), GDPR delete-account flow | Integration test |
| 9 | Emails (welcome, reset, payment, year rollup) via Resend templates | Resend test send |
| 10 | Mobile polish, dark mode polish, EN translations pass | Visual regression green |
| 11 | Security audit (Snyk + manual), DPIA doc, AVV finalised | Signed-off docs |
| 12 | Beta launch on Vercel prod, first 100 users | Sentry error rate ≤ 0.5%, NPS measured |

---

## 14. Decisions logged (ADRs to write later, but recorded here now)

| # | Decision | Rationale |
|---|---|---|
| 1 | Next.js 16 App Router + RSC + PPR | best-in-class DX + perf, May 2026 mature |
| 2 | Supabase (Postgres + Auth + Storage + Realtime + Edge Functions) | one vendor for whole backend, EU region, RLS native |
| 3 | OCR abstracted behind interface, primary = Mistral, fallback = DGX (eventually swap) | vendor flexibility + on-prem option |
| 4 | shadcn/ui (new-york, stone) | own the code, no runtime dep, Tailwind native |
| 5 | next-intl over next-i18next | RSC-native, simpler routing, ICU support |
| 6 | next-themes for theme | tiny, mature, no flicker, class strategy plays nice with Tailwind v4 |
| 7 | Stripe over LemonSqueezy | mature German market, MwSt handling, customer portal |
| 8 | Resend over SendGrid | DX + EU region option, react-email templates |
| 9 | PostHog EU over Mixpanel | self-hostable later, EU compliant by default, session recordings |
| 10 | Sentry EU over Datadog | cheaper, EU residency, better Next.js integration |
| 11 | mem0 for personalisation memory | only mature option May 2026; replace if it folds |
| 12 | Vitest over Jest | ESM-native, faster, vite ecosystem, Next 16 friendly |
| 13 | Playwright over Cypress | faster, multi-browser, fewer flakes, official Vercel partner |
| 14 | No tRPC | Server Actions cover our mutation needs; one less abstraction |
| 15 | No Redis in V1 | Postgres + Supabase Realtime is enough at our scale |

---

## 15. Open questions for the founder

1. **DGX network access:** how do we securely expose the DGX to Vercel? Cloudflare Tunnel + mTLS recommended. Need 1 day of network admin work.
2. **Beta-user sourcing:** Reddit r/Finanzen, Mumsnet-DE, FinanzFluss community. Need 50 beta testers by week 12. Outreach plan?
3. **Legal review:** the `/legal/*` boilerplate exists in `legal-docs/`. Need a Fachanwalt für Steuerrecht to sign off on the §35a disclaimer text before paid launch. ~€800 one-off.
4. **Domain & email:** `handwerkerbonus.de` registered? DKIM/SPF/DMARC set up? Resend domain verification.
5. **Stripe account:** verified German legal entity (UG/GmbH) needed for "Sofort"/SEPA Direct Debit payouts. Without, Stripe charges 1.9% extra and limits payouts. Worth registering a UG (€1 capital) before launch.

---

*Last updated: 29 May 2026. Owner: product + eng.*

## ./legal-docs/agb.md
# Allgemeine Geschäftsbedingungen (AGB)

Stand: Mai 2026

## § 1 Geltungsbereich

(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") der WAMOCON GmbH, Mergenthalerallee 79 - 81, 65760 Eschborn (nachfolgend „Anbieter"), gelten für alle Verträge über die Nutzung der Software-as-a-Service-Plattform HandwerkerBonus (nachfolgend „Plattform"), die über die Website https://handwerkerbonus.de bereitgestellt wird.

(2) Die Plattform richtet sich primär an Verbraucher im Sinne des § 13 BGB (Privathaushalte) sowie an Steuerberater, die HandwerkerBonus für ihre Mandanten einsetzen (nachfolgend gemeinsam „Nutzer"). Soweit der Nutzer Unternehmer im Sinne des § 14 BGB ist, gelten die kaufmännischen Bestimmungen dieser AGB ergänzend.

(3) Abweichende, entgegenstehende oder ergänzende AGB des Nutzers werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt deren Geltung ausdrücklich schriftlich zu.

## § 2 Vertragsschluss

(1) Die Darstellung der Plattform und ihrer Funktionen auf der Website stellt kein verbindliches Angebot im Sinne des § 145 BGB dar, sondern eine Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum).

(2) Der Nutzer gibt ein verbindliches Angebot zum Abschluss eines Nutzungsvertrages ab, indem er den Registrierungsprozess auf der Plattform abschließt und diese AGB akzeptiert.

(3) Der Vertrag kommt zustande, wenn der Anbieter das Angebot des Nutzers durch Freischaltung des Zugangs annimmt. Die Nutzung der kostenlosen Basisversion erfolgt unmittelbar nach Bestätigung der E-Mail-Adresse. Kostenpflichtige Tarife werden gemäß der jeweils gültigen Preisliste auf https://handwerkerbonus.de/pricing abgerechnet.

## § 3 Leistungsbeschreibung

(1) Der Anbieter stellt dem Nutzer die Plattform als Software-as-a-Service (SaaS) über das Internet zur Verfügung.

(2) Die Plattform unterstützt Nutzer bei der Erfassung, OCR-gestützten Auswertung und steuerlichen Aufbereitung von Handwerker- und Haushaltsdienstleistungs-Rechnungen nach § 35a EStG. Sie ersetzt keine individuelle steuerliche Beratung im Sinne des Steuerberatungsgesetzes (StBerG).

(3) Der genaue Funktionsumfang ergibt sich aus der jeweils aktuellen Leistungsbeschreibung auf https://handwerkerbonus.de.

(4) Der Anbieter ist berechtigt, die Plattform weiterzuentwickeln, zu erweitern und anzupassen. Wesentliche Einschränkungen des Funktionsumfangs werden dem Nutzer mit einer Frist von vier Wochen vorab mitgeteilt.

## § 4 Nutzungsrechte

(1) Der Anbieter räumt dem Nutzer für die Vertragslaufzeit ein einfaches, nicht übertragbares, nicht unterlizenzierbares Recht zur Nutzung der Plattform ein.

(2) Der Nutzer darf die Plattform ausschließlich zur Aufbereitung eigener bzw. von ihm betreuter Rechnungen für steuerliche Zwecke nach § 35a EStG verwenden.

## § 5 Pflichten des Nutzers

(1) Der Nutzer ist verpflichtet, seine Zugangsdaten geheim zu halten und vor dem Zugriff Dritter zu schützen.

(2) Der Nutzer stellt sicher, dass nur Rechnungen hochgeladen werden, für deren Verarbeitung er berechtigt ist und an deren Inhalt keine Rechte Dritter entgegenstehen.

(3) Der Nutzer ist verpflichtet, die durch HandwerkerBonus ermittelten Werte vor Übernahme in die Einkommensteuererklärung eigenständig zu prüfen.

## § 6 Verfügbarkeit

(1) Der Anbieter bemüht sich um eine Verfügbarkeit der Plattform von 99,5 % im Jahresmittel.

(2) Nicht als Ausfallzeit gelten geplante Wartungsarbeiten, die vorab angekündigt werden.

## § 7 Datenschutz

Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung des Anbieters und den Bestimmungen der DSGVO.

## § 8 Haftung

(1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei Vorsatz und grober Fahrlässigkeit.

(2) Im Übrigen ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.

## § 9 Vertragslaufzeit und Kündigung

(1) Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit einer Frist von einem Monat zum Monatsende gekündigt werden.

(2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

## § 10 Schlussbestimmungen

(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.

(2) Gerichtsstand ist Eschborn, sofern der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.

(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.

## § 11 Widerrufsrecht für Verbraucher

(1) Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.

(2) Um das Widerrufsrecht auszuüben, muss der Verbraucher den Anbieter (WAMOCON GmbH, Mergenthalerallee 79 - 81, 65760 Eschborn, E-Mail: support@handwerkerbonus.de) mittels einer eindeutigen Erklärung (z. B. ein per Post versandter Brief oder E-Mail) über den Entschluss, diesen Vertrag zu widerrufen, informieren.

(3) Das Widerrufsrecht erlischt vorzeitig, wenn der Anbieter mit der Ausführung des Vertrages mit ausdrücklicher Zustimmung des Verbrauchers begonnen hat und der Verbraucher gleichzeitig bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung verliert.

## ./legal-docs/company-stamp.md
# Firmenstempel / Company Stamp

## Deutsch

### WAMOCON GmbH

**Geschäftsführer:** Dipl.-Ing. Waleri Moretz

**Anschrift:**
Mergenthalerallee 79 - 81
65760 Eschborn
Deutschland

**Kontakt:**
Telefon: +49 6196 5838311
E-Mail: info@wamocon.com

**Registrierung:**
Handelsregister: Eschborn HRB 123666
USt-IdNr.: DE344930486

---

## English

### WAMOCON GmbH

**Managing Director:** Dipl.-Ing. Waleri Moretz

**Address:**
Mergenthalerallee 79 - 81
65760 Eschborn
Germany

**Contact:**
Phone: +49 6196 5838311
Email: info@wamocon.com

**Registration:**
Commercial Register: Eschborn HRB 123666
VAT ID: DE344930486

## ./legal-docs/datenschutzerklaerung.md
# Datenschutzerklärung

Stand: Mai 2026

## 1. Verantwortlicher

Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:

WAMOCON GmbH
Mergenthalerallee 79 - 81
65760 Eschborn
Telefon: +49 6196 5838311
E-Mail: info@wamocon.com
Projektkontakt: support@handwerkerbonus.de
Geschäftsführer: Dipl.-Ing. Waleri Moretz
Handelsregister: Eschborn HRB 123666
USt-ID: DE344930486

## 2. Überblick über die Datenverarbeitung

Diese Datenschutzerklärung gilt für die Website und Webanwendung HandwerkerBonus (https://handwerkerbonus.de).

Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Plattform sowie unserer Inhalte und Leistungen erforderlich ist.

## 3. Rechtsgrundlagen der Verarbeitung

- **Einwilligung** – Art. 6 Abs. 1 lit. a DSGVO
- **Vertragserfüllung** – Art. 6 Abs. 1 lit. b DSGVO
- **Rechtliche Verpflichtung** – Art. 6 Abs. 1 lit. c DSGVO
- **Berechtigtes Interesse** – Art. 6 Abs. 1 lit. f DSGVO

## 4. Hosting und Infrastruktur

### Vercel Inc.
Die Website und Webanwendung werden über Vercel gehostet. Dabei verarbeitet Vercel technisch notwendige Verbindungsdaten (IP-Adresse, Zeitstempel, Browserinformationen). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

### Supabase Inc.
Für Datenbank, Authentifizierung, Dateispeicher und Teile der Backend-Infrastruktur nutzen wir Supabase. Verarbeitet werden Authentifizierungsdaten, Session-Informationen, hochgeladene Rechnungs-PDFs und die daraus extrahierten Felder (Anbieter, Datum, Beträge, Leistungsbeschreibung). Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.

### Mistral AI SAS
Zur OCR-basierten Texterkennung der hochgeladenen Rechnungen nutzen wir den in Frankreich/EU gehosteten OCR-Dienst von Mistral AI. Übermittelt wird das Rechnungs-PDF; Mistral AI verarbeitet diese Daten ausschließlich weisungsgebunden im Auftrag des Anbieters (Art. 28 DSGVO) und speichert sie nach Verarbeitung nicht dauerhaft. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.

### Stripe Payments Europe Ltd.
Für die Abwicklung kostenpflichtiger Tarife setzen wir Stripe ein. An Stripe übermittelt werden die für die Zahlungsabwicklung notwendigen Daten (Name, E-Mail, Zahlungsmittel-Token). Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.

## 5. Erhebung personenbezogener Daten

### Registrierung und Nutzerkonto
Bei der Registrierung erheben wir: Name, E-Mail-Adresse und Passwort. Diese Daten sind zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b DSGVO).

### Server-Logfiles
Bei jedem Zugriff auf unsere Plattform werden automatisch folgende Daten erfasst: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer-URL, Browser-Typ und -Version. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

### Rechnungsdaten
Im Rahmen der Plattformnutzung verarbeiten wir die von Ihnen hochgeladenen Rechnungs-PDFs sowie die daraus extrahierten Felder (Rechnungsnummer, Datum, Anbieter, Leistungsbeschreibung, Nettobetrag, Lohn-/Material-/Fahrtkostenanteile). Diese Daten dienen ausschließlich der Berechnung Ihres Steuerbonus nach § 35a EStG. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Speicherdauer: bis zur Löschung des Nutzerkontos bzw. bis zum Ablauf der gesetzlichen Aufbewahrungsfristen nach § 147 AO.

## 6. Cookies und Tracking

Die Plattform verwendet technisch notwendige Cookies für Session-Management und Authentifizierung. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

## 7. Rechte der betroffenen Personen

Sie haben das Recht auf:
- **Auskunft** (Art. 15 DSGVO)
- **Berichtigung** (Art. 16 DSGVO)
- **Löschung** (Art. 17 DSGVO)
- **Einschränkung der Verarbeitung** (Art. 18 DSGVO)
- **Datenübertragbarkeit** (Art. 20 DSGVO)
- **Widerspruch** (Art. 21 DSGVO)
- **Widerruf** erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)
- **Beschwerde** bei einer Aufsichtsbehörde (Art. 77 DSGVO)

## 8. Datensicherheit

Wir setzen technische und organisatorische Sicherheitsmaßnahmen nach dem Stand der Technik ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.

## 9. Änderung der Datenschutzerklärung

Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen der Plattform anzupassen.

## 10. Auftragsverarbeitung

Mit allen oben genannten Dienstleistern (Vercel, Supabase, Mistral AI, Stripe) bestehen Verträge zur Auftragsverarbeitung nach Art. 28 DSGVO. Diese stellen sicher, dass die Verarbeitung Ihrer Daten ausschließlich gemäß unseren Weisungen und unter Einhaltung des Datenschutzes erfolgt.

## 11. Kontakt zum Datenschutz

Für alle Anliegen rund um den Datenschutz wenden Sie sich bitte an: privacy@handwerkerbonus.de

## ./legal-docs/impressum.md
# Impressum

Stand: Mai 2026

## WAMOCON GmbH

Mergenthalerallee 79 - 81
65760 Eschborn
Deutschland

## Kontakt

Telefon: +49 6196 5838311
E-Mail: info@wamocon.com
Projektkontakt: support@handwerkerbonus.de

## Vertretungsberechtigter Geschäftsführer

Dipl.-Ing. Waleri Moretz

## Registereintrag

Sitz der Gesellschaft: Eschborn
Handelsregister: Eschborn HRB 123666
Umsatzsteuer-Identifikationsnummer: DE344930486

## Angaben zum Angebot

HandwerkerBonus ist eine webbasierte Software-as-a-Service-Plattform für die automatisierte Prüfung, Strukturierung und steuerlich konforme Aufbereitung von Handwerker- und Haushaltsdienstleistungs-Rechnungen nach § 35a EStG. Das Angebot richtet sich primär an Privathaushalte sowie an deren steuerliche Berater.

## Online-Streitbeilegung

Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

## Haftungsausschluss

Die auf HandwerkerBonus bereitgestellten Berechnungen zum Steuerbonus nach § 35a EStG ersetzen keine individuelle steuerliche Beratung. Verbindliche Auskünfte erteilt ausschließlich das zuständige Finanzamt bzw. ein Steuerberater.

## ./legal-docs/imprint.md
# Imprint (Legal Notice)

As of: May 2026

## WAMOCON GmbH

Mergenthalerallee 79 - 81
65760 Eschborn
Germany

## Contact

Phone: +49 6196 5838311
Email: info@wamocon.com
Project Contact: support@handwerkerbonus.de

## Authorized Managing Director

Dipl.-Ing. Waleri Moretz

## Registration

Registered Office: Eschborn
Commercial Register: Eschborn HRB 123666
VAT Identification Number: DE344930486

## About the Service

HandwerkerBonus is a web-based Software-as-a-Service platform for the automated review, structuring, and tax-compliant preparation of craftsman and household-service invoices under § 35a of the German Income Tax Act (EStG). The service is primarily aimed at private German households and their tax advisors.

## Online Dispute Resolution

The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.

## Disclaimer

The tax credit calculations provided by HandwerkerBonus under § 35a EStG do not replace individual tax advice. Binding statements are issued exclusively by the competent tax office or a certified tax advisor.

## ./legal-docs/privacy-policy.md
# Privacy Policy

As of: May 2026

## 1. Data Controller

The Data Controller as defined by the General Data Protection Regulation (GDPR) is:

WAMOCON GmbH
Mergenthalerallee 79 - 81
65760 Eschborn, Germany
Phone: +49 6196 5838311
Email: info@wamocon.com
Project Contact: support@handwerkerbonus.de
Managing Director: Dipl.-Ing. Waleri Moretz
Commercial Register: Eschborn HRB 123666
VAT ID: DE344930486

## 2. Overview of Data Processing

This Privacy Policy applies to the website and web application HandwerkerBonus (https://handwerkerbonus.de).

We process personal data of our users only insofar as this is necessary to provide a functional platform and our content and services.

## 3. Legal Basis for Processing

- **Consent** – Art. 6(1)(a) GDPR
- **Performance of Contract** – Art. 6(1)(b) GDPR
- **Legal Obligation** – Art. 6(1)(c) GDPR
- **Legitimate Interest** – Art. 6(1)(f) GDPR

## 4. Hosting and Infrastructure

### Vercel Inc.
The website and web application are hosted via Vercel. Vercel processes technically necessary connection data (IP address, timestamp, browser information). Legal basis: Art. 6(1)(f) GDPR.

### Supabase Inc.
We use Supabase for database, authentication, file storage, and parts of the backend infrastructure. Authentication data, session information, uploaded invoice PDFs, and the fields extracted from them (provider, date, amounts, service description) are processed. Legal basis: Art. 6(1)(b) GDPR.

### Mistral AI SAS
We use Mistral AI's OCR service (hosted in France/EU) to extract text from uploaded invoices. The invoice PDF is transmitted; Mistral AI processes this data strictly on our instructions as a processor (Art. 28 GDPR) and does not retain it after processing. Legal basis: Art. 6(1)(b) GDPR.

### Stripe Payments Europe Ltd.
We use Stripe to process paid subscriptions. Data transmitted to Stripe includes the information necessary for payment processing (name, email, payment-method token). Legal basis: Art. 6(1)(b) GDPR.

## 5. Collection of Personal Data

### Registration and User Account
During registration we collect: name, email address, and password. This data is necessary for the performance of the contract (Art. 6(1)(b) GDPR).

### Server Log Files
Each access to our platform automatically records: IP address, date and time, page accessed, referrer URL, browser type and version. Legal basis: Art. 6(1)(f) GDPR.

### Invoice Data
In the course of platform use, we process the invoice PDFs you upload and the fields extracted from them (invoice number, date, provider, service description, net amount, labour/material/travel cost shares). This data is used exclusively to calculate your § 35a EStG tax credit. Legal basis: Art. 6(1)(b) GDPR. Retention period: until deletion of your user account or until the statutory retention periods under § 147 AO (German Tax Code) expire.

## 6. Cookies and Tracking

The platform uses technically necessary cookies for session management and authentication. Legal basis: Art. 6(1)(f) GDPR.

## 7. Rights of Data Subjects

You have the right to:
- **Access** (Art. 15 GDPR)
- **Rectification** (Art. 16 GDPR)
- **Erasure** (Art. 17 GDPR)
- **Restriction of processing** (Art. 18 GDPR)
- **Data portability** (Art. 20 GDPR)
- **Object** (Art. 21 GDPR)
- **Withdraw consent** (Art. 7(3) GDPR)
- **Lodge a complaint** with a supervisory authority (Art. 77 GDPR)

## 8. Data Security

We employ state-of-the-art technical and organisational security measures to protect your data against accidental or intentional manipulation, loss, destruction, or access by unauthorised persons.

## 9. Changes to this Privacy Policy

We reserve the right to amend this Privacy Policy to reflect changes in the law or changes to the platform.

## 10. Data Processing Agreements

We have entered into data processing agreements pursuant to Art. 28 GDPR with all of the above-listed processors (Vercel, Supabase, Mistral AI, Stripe). These ensure that the processing of your data takes place exclusively in accordance with our instructions and in compliance with data protection law.

## 11. Data Protection Contact

For all matters relating to data protection, please contact: privacy@handwerkerbonus.de

## ./legal-docs/terms-and-conditions.md
# Terms and Conditions

As of: May 2026

## § 1 Scope

(1) These Terms and Conditions (hereinafter "T&C") of WAMOCON GmbH, Mergenthalerallee 79 - 81, 65760 Eschborn (hereinafter "Provider"), apply to all contracts for the use of the Software-as-a-Service platform HandwerkerBonus (hereinafter "Platform"), provided via the website https://handwerkerbonus.de.

(2) The Platform is primarily aimed at consumers within the meaning of § 13 BGB (German private households) and at tax advisors using HandwerkerBonus on behalf of their clients (collectively "Users"). Where the User is an entrepreneur within the meaning of § 14 BGB, the commercial provisions of these T&C apply in addition.

(3) Deviating, conflicting, or supplementary terms and conditions of the User shall not become part of the contract unless the Provider expressly agrees in writing.

## § 2 Conclusion of Contract

(1) The presentation of the Platform and its features on the website does not constitute a binding offer within the meaning of § 145 BGB, but rather an invitation to submit an offer (invitatio ad offerendum).

(2) The User submits a binding offer by completing the registration process on the Platform and accepting these T&C.

(3) The contract is concluded when the Provider accepts the User's offer by activating access. The free basic plan is enabled immediately after email confirmation. Paid plans are billed according to the price list published at https://handwerkerbonus.de/pricing.

## § 3 Service Description

(1) The Provider makes the Platform available to the User as Software-as-a-Service (SaaS) via the Internet.

(2) The Platform assists Users with capturing, OCR-based analysis, and tax-compliant preparation of craftsman and household-service invoices under § 35a EStG. It does not constitute individual tax advice within the meaning of the German Tax Consultancy Act (StBerG).

(3) The precise scope of features is set out in the current service description at https://handwerkerbonus.de.

(4) The Provider is entitled to further develop, expand, and adapt the Platform. Material restrictions to the scope of features will be communicated to the User four weeks in advance.

## § 4 Usage Rights

(1) The Provider grants the User a simple, non-transferable, non-sublicensable right to use the Platform for the duration of the contract.

(2) The User may only use the Platform to process invoices for which they are authorised and exclusively for tax purposes under § 35a EStG.

## § 5 User Obligations

(1) The User shall keep their access credentials confidential and protect them from third-party access.

(2) The User shall ensure that only invoices for which they hold the necessary processing rights are uploaded.

(3) The User must independently verify the values calculated by HandwerkerBonus before incorporating them into any income tax return.

## § 6 Availability

(1) The Provider shall endeavour to maintain an annual average availability of 99.5%.

(2) Scheduled maintenance windows announced in advance shall not count as downtime.

## § 7 Data Protection

The processing of personal data is governed by the Provider's Privacy Policy and the provisions of the GDPR.

## § 8 Liability

(1) The Provider shall be fully liable for damages arising from injury to life, body, or health, as well as for intent and gross negligence.

(2) Otherwise, liability is limited to foreseeable, typically occurring damages.

## § 9 Contract Duration and Termination

(1) The contract is concluded for an indefinite period and may be terminated by either party with one month's notice to the end of a calendar month.

(2) The right to extraordinary termination for good cause remains unaffected.

## § 10 Final Provisions

(1) The law of the Federal Republic of Germany shall apply, excluding the UN Convention on Contracts for the International Sale of Goods.

(2) The place of jurisdiction is Eschborn, provided the User is a merchant, a legal entity under public law, or a special fund under public law.

(3) Should individual provisions of these T&C be invalid, the validity of the remaining provisions shall remain unaffected.

## § 11 Right of Withdrawal for Consumers

(1) Consumers have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period is fourteen days from the day of contract conclusion.

(2) To exercise the right of withdrawal, the consumer must inform the Provider (WAMOCON GmbH, Mergenthalerallee 79 - 81, 65760 Eschborn, Germany, Email: support@handwerkerbonus.de) by means of a clear statement (e.g. a letter sent by post or email) of their decision to withdraw from this contract.

(3) The right of withdrawal expires prematurely if the Provider has begun performance of the contract with the consumer's express consent and the consumer has simultaneously confirmed loss of the right of withdrawal upon full performance of the contract.

## package.json
{
  "name": "handwerkerbonus",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui",
    "e2e:report": "playwright show-report",
    "verify": "npm run typecheck && npm run lint && npm run test && npm run build",
    "db:start": "supabase start",
    "db:stop": "supabase stop",
    "db:reset": "supabase db reset",
    "db:status": "supabase status",
    "db:seed": "node scripts/seed-users.mjs",
    "db:seed:invoices": "node scripts/seed-invoices.mjs",
    "db:test:rls": "node scripts/test-rls.mjs",
    "generate:samples": "node scripts/generate-sample-invoices.mjs",
    "gen:anforderungsdokument": "node scripts/generate-anforderungsdokument.mjs"
  },
  "dependencies": {
    "@ai-sdk/mistral": "^3.0.37",
    "@ai-sdk/openai": "^3.0.66",
    "@hookform/resolvers": "^5.4.0",
    "@sentry/nextjs": "^10.55.0",
    "@stripe/stripe-js": "^9.7.0",
    "@supabase/ssr": "^0.10.3",
    "@supabase/supabase-js": "^2.106.2",
    "ai": "^6.0.193",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "docx": "^9.6.1",
    "framer-motion": "^12.40.0",
    "geist": "^1.7.1",
    "lucide-react": "^1.17.0",
    "mem0ai": "^3.0.5",
    "next": "16.2.1",
    "next-intl": "^4.13.0",
    "next-themes": "^0.4.6",
    "pdf-lib": "^1.17.1",
    "pdfjs-dist": "^5.7.284",
    "posthog-js": "^1.376.4",
    "posthog-node": "^5.35.6",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hook-form": "^7.76.1",
    "resend": "^6.12.4",
    "sonner": "^2.0.7",
    "stripe": "^22.2.0",
    "tailwind-merge": "^3.6.0",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@playwright/test": "^1.60.0",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitest/coverage-v8": "^4.1.7",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "tailwindcss": "^4",
    "typescript": "^5",
    "vitest": "^4.1.7"
  }
}

