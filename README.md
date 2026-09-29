# web-dev-upskilling-lab

A complete, hands-on curriculum to take a beginner SWE to junior (and start of mid-level) capability in modern web development. Focus on **JavaScript**, **TypeScript**, and **React** using realistic, varied domains — no todo lists or shopping carts.

## Who This Is For

- Complete beginners who know basic programming concepts and want to learn web dev properly.
- Self-taught developers or career switchers who have gaps in fundamentals.
- Junior developers who want to solidify core skills and prepare for real work.
- Anyone who learns best by **building, breaking, testing, and fixing** rather than just watching videos.

## How to Study (Recommended Flow)

1. Read the lesson in order.
2. Run the example code and experiment ("Try changing this").
3. Read the line-by-line explanations and common mistakes.
4. Complete the mini challenge.
5. Move to the matching practice drill folder and implement the starter functions until tests pass.
6. Compare your solution to the provided solution only after attempting.
7. Repeat. Build the final projects at the end of each major section.

**Do not skip around too much early on.** Later lessons build directly on earlier ones.

## Repository Structure

```
web-dev-upskilling-lab/
├── README.md
├── package.json
├── .gitignore
├── tsconfig.json
├── vitest.config.js
├── javascript/
│   ├── 01-lesson/ ... 40 lessons (explanations + runnable examples + challenges)
│   └── examples/ (extra runnable demos)
├── typescript/
│   ├── 01-lesson/ ... 20 lessons (support ticket / recipe / event planner examples)
│   └── examples/
├── react/
│   ├── 01-lesson/ ... 20 lessons
│   └── examples/
├── practice/
│   ├── js/
│   │   ├── arrays/, objects/, functions/, closures/, async/, dom-browser/
│   ├── ts/
│   │   ├── types-basics/, generics/, narrowing/, utility-types/
│   └── react/
│       ├── components-props/, state-effects/, forms/, custom-hooks/
│   (each contains: README.md, starter.js|tsx, solution.js|tsx, expected-output.md, tests.js|test.tsx)
├── projects/
│   ├── movie-watchlist/          (Vanilla JS final project)
│   └── support-ticket-dashboard/ (React final project)
```

## How to Run Examples

- JavaScript lessons: `node javascript/XX-lesson/example.js`
- Many lessons contain self-contained runnable scripts.
- For aggregated JS examples: `npm run dev:js`
- TypeScript: compile or use `npx tsx typescript/XX-lesson/example.ts` (install tsx if desired)
- React lessons: Code examples are self-documenting. The final project is a full app.

## How to Run Tests

```bash
npm install
npm test                 # all tests (js + ts typecheck + react)
npm run test:js          # JS practice drills (node --test)
npm run test:ts          # TypeScript type checking
npm run test:react       # React component tests (vitest)
npm run typecheck        # Standalone TS type check
```

Tests are designed so:
- Running against **solution** files → all pass with green output.
- Running against **starter** files (before implementing) → clear, actionable failures.

## Starter / Solution Files

- `starter.*` = the file you edit. Functions are stubbed with clear "Implement this" comments or throw useful errors.
- `solution.*` = reference implementation. Study only after you have a working attempt or are stuck.
- `expected-output.md` = what correct behavior should produce (useful for manual verification).
- `tests.*` = automated verification. Run them early and often.

## Suggested 8-Week Upskilling Plan

**Week 1-2: JavaScript Fundamentals**
- Lessons 01-15 (vars → functions → arrays/objects basics)
- Complete corresponding practice/js/ drills
- Build small scripts for each topic

**Week 3: JS Intermediate + Core Web**
- Lessons 16-28 (loops, scope, async, fetch, DOM, events, localStorage)
- Practice closures, async, dom-browser

**Week 4: Advanced JS + Mini Project**
- Lessons 29-40 (closures, classes, modules, performance, security)
- Complete the Personal Movie Watchlist Dashboard in `projects/movie-watchlist`

**Week 5: TypeScript Basics**
- All 20 TS lessons + practice/ts/*
- Focus on narrowing, generics, utility types (huge for real jobs)

**Week 6-7: React**
- All 20 React lessons + practice/react/*
- Master hooks deeply: useState, useEffect, useReducer, custom hooks, Context

**Week 8: React Final Project + Integration**
- Build the Support Ticket Dashboard (full features + tests)
- Revisit weak areas from earlier weeks
- Add small extensions to projects (pagination, search, persistence)

## What "Junior Ready" Means (End of This Lab)

You can:
- Comfortably use modern JS (destructuring, spread, array methods, async/await, modules)
- Read and write basic-to-intermediate TypeScript without fear (interfaces, generics, utility types)
- Build small-to-medium React apps with controlled forms, effects, derived state, and accessible UI
- Write simple automated tests
- Debug using console, devtools, and test output
- Persist state (localStorage), fetch data, handle errors
- Understand performance footguns and basic security (XSS, sanitization)

## What "Mid-Level Ready" Starts to Mean

After this + real project experience:
- Design and refactor components/hooks for reusability
- Think in types (branded, discriminated unions, mapped types)
- Handle complex state (reducers, context, server state)
- Write meaningful tests and reason about edge cases
- Performance (memo, virtualization basics)
- Understand event loop, closures deeply
- Build full features end-to-end with validation + error states

## The Domains We Use (Varied & Realistic)

- **JavaScript**: Personal Movie Watchlist, recipe manager, workout tracker, budget, book library, travel itinerary, habit tracker, event planner.
- **TypeScript**: Support ticket system, recipe catalog, event planner.
- **React**: Support Ticket Dashboard (tickets, filters, forms, priorities, accessibility, state management variants).
- **Practice drills**: Mix of all of the above + custom realistic data operations.

No generic "todo" or "cart" examples.

## Final Projects

1. **javascript/projects/movie-watchlist** (or projects/movie-watchlist)
   - Full vanilla JS app: list movies, add via form (with validation), toggle watched, filter/search, stats, localStorage, simulated API fetch with error states.

2. **react final mini project** inside `projects/support-ticket-dashboard` or react/20
   - Ticket list + filters (status/priority)
   - Create form with controlled inputs + validation
   - Derived counts
   - Two implementations: useState + useReducer
   - Custom hook for localStorage persistence
   - Accessible markup
   - Full Vitest + React Testing Library tests

## System Design Deep Dives

See `system-design-deep-dives.md` for extensive ~50-paragraph architectural discussions that combine the Movie Watchlist, Support Ticket Dashboard, Habit/Finance Tracker, event systems, and cross-language patterns (React/TS, Python, .NET, Postgres). Covers data modeling, real-time, caching, search, multi-tenancy, background jobs, observability, and scaling.

## Running the Final Projects

```bash
# Movie watchlist (vanilla)
npm run start:movie-watchlist

# React dashboard - see its own package/README inside the folder
cd projects/support-ticket-dashboard
npm install
npm run dev
```

## Tips for Maximum Gain

- Type every example yourself — do not copy-paste.
- When a test fails, read the failure message fully before looking at solution.
- After finishing a drill, ask: "How would I extend this for real users?"
- Keep a "gotchas" notebook.
- Revisit hard lessons after doing the project.
- When comfortable, delete the solution temporarily and re-implement from memory.

## Quality Notes

This is a real curriculum:
- Every solution is complete, working code.
- Tests cover happy paths + edge cases (empty, null, duplicates, invalid, etc.).
- Explanations aim for clarity without hand-holding.
- Examples chosen to feel like things you might actually build or maintain on the job.

Start with Lesson 01. Good luck — you've got this.

---

Built as a focused, zero-fluff upskilling resource. Run the tests. Build the projects. Ship real skill.
