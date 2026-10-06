# web-dev-upskilling-lab

A complete, hands-on curriculum to take a beginner SWE to junior (and start of mid-level) capability in modern web development. Focus on **JavaScript**, **TypeScript**, and **React** using realistic, varied domains — no todo lists or shopping carts.

> **Standalone copy.** This repo is the `web-dev-upskilling-lab/` folder of
> [elirc/grok-tuts](https://github.com/elirc/grok-tuts), and the code was
> identical to that folder when checked on 2026-10-06. Where these docs mention
> the Python, SQL or .NET labs (for example the Habit/Finance Tracker in
> `system-design-deep-dives.md`), those live in grok-tuts. Doc fixes are made in
> both repos.

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

Counted on 2026-10-06:

```
web-dev-upskilling-lab/
├── README.md, interview-questions.md, system-design-deep-dives.md
├── package.json, tsconfig.json, vitest.config.js, vitest.setup.js
├── javascript/   44 lessons: 01-39 and 41-45 (there is no 40)
│                 example.js in all but 43 and 45
├── typescript/   22 lessons, example.ts in 01-21
├── react/        23 lessons, example.jsx in all but 20 (20 points at the final project)
├── practice/
│   ├── js/     arrays, objects, functions, closures, async, dom-browser
│   │           starter.js + solution.js + tests.js in each; README.md in
│   │           arrays/async/closures/dom-browser; expected-output.md in
│   │           arrays/functions/objects
│   ├── ts/     types-basics, generics, narrowing, utility-types
│   │           starter.ts + solution.ts + tests.ts (type-checked only, see below)
│   └── react/  components-props, state-effects, forms, custom-hooks
│               README.md + starter.tsx + solution.tsx + tests.test.tsx
└── projects/
    ├── movie-watchlist/          index.js + watchlist-data.json (Node script)
    └── support-ticket-dashboard/ src/ only, no package.json of its own
```

There are no `javascript/examples/`, `typescript/examples/` or `react/examples/`
folders, so `npm run dev:js` and `npm run dev:ts` fail as written.

## How to Run Examples

- JavaScript lessons: `node javascript/XX-lesson/example.js`. No install needed.
- TypeScript lessons: `npx tsx typescript/XX-lesson/example.ts` (downloads `tsx` on first use).
- React lessons: the `example.jsx` files are for reading. Nothing in the lab
  renders them on their own.

## How to Run Tests

```bash
npm install
npm test                 # all tests (js + ts typecheck + react)
npm run test:js          # JS practice drills (node --test)
npm run test:ts          # TypeScript type checking
npm run test:react       # React component tests (vitest)
npm run typecheck        # Standalone TS type check
```

What the tests actually check (verified 2026-10-06):

- **Every test file imports `./solution.*`, not `./starter.*`.** To test your own
  work, change the import line at the top of that drill's test file to
  `./starter.js` (or `./starter`), run it, and change it back before committing.
  The `test:learn` script doesn't do this: it runs `starter.js` files as test
  files, and they contain no tests.
- **JS drills run with no install:** `node --test practice/js/*/tests.js`. On
  2026-10-06 this reported `# pass 19`, `# fail 2`. The two failures are bugs in
  the lab, not in your setup: `practice/js/async/solution.js` declares
  `allSettledPolyfill` twice (lines 39 and 116), and
  `practice/js/functions/solution.js` declares `once` (lines 17 and 55) and
  `throttle` (lines 24 and 50) twice, so both files fail to load with
  `SyntaxError`. `practice/js/functions/starter.js` has the same two duplicates
  (`throttle` on lines 5 and 21, `once` on lines 6 and 19).
- **TS drills are type-checked, not executed.** `tests.ts` imports
  `./solution.js`, which doesn't exist until you compile, so `npm run test:ts` is
  just `tsc --noEmit`.
- **React drills and the dashboard** need `npm install`, then `npm run test:react`.

**First exercise: make the suite green.**
*Goal:* fix the two broken drills. Delete the second, duplicate declaration in
each file, after reading both versions and keeping the better one.
**Check:** `node --check practice/js/async/solution.js`,
`node --check practice/js/functions/solution.js` and
`node --check practice/js/functions/starter.js` print nothing, and
`node --test practice/js/*/tests.js` reports `# fail 0` (24 passing when
checked against a fixed copy).

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
- Lessons 29-39 and 41-45 (closures, classes, modules, event loop, performance, security, service workers, proxies, error handling)
- Complete the Personal Movie Watchlist Dashboard in `projects/movie-watchlist`

**Week 5: TypeScript Basics**
- All 22 TS lessons + practice/ts/*
- Focus on narrowing, generics, utility types (huge for real jobs)

**Week 6-7: React**
- All 23 React lessons + practice/react/*
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

1. **`projects/movie-watchlist`**
   - A Node script (`index.js`), not a browser app: it seeds a watchlist from a
     simulated API, adds and toggles movies, filters, prints stats, and saves to
     `watchlist-data.json` with `fs.writeFileSync` (it plays the role
     `localStorage` would in a browser).
   - Running it **rewrites `watchlist-data.json`**, so run
     `git checkout -- projects/movie-watchlist/watchlist-data.json` afterwards
     if you don't want that diff.

2. **`projects/support-ticket-dashboard`** (react/20 points here)
   - Ticket list with a **status** filter (there is no priority filter yet)
   - Create form with controlled inputs + validation (`components/TicketForm.tsx`)
   - Derived counts with `useMemo` (`SupportTicketDashboard.tsx:28-34`)
   - One implementation: list state in `useReducer` (`ticketReducer.ts`), form
     fields in `useState`
   - Custom `useLocalStorage` hook (`hooks/useLocalStorage.ts`)
   - Three render-only tests in `SupportTicketDashboard.test.tsx` (header,
     form controls, filter select). Nothing tests adding a ticket, changing
     status, or persistence yet.

**Extend the dashboard (Goal + Check).**
- *Goal:* a priority filter. **Check:** a new test renders three tickets with
  different priorities, picks `high`, and asserts only one row
  (`data-testid="ticket-<id>"`, `TicketList.tsx:22`) remains.
- *Goal:* delete tickets. The reducer already handles `DELETE`
  (`ticketReducer.ts:28-31`) but nothing dispatches it. **Check:** a test clicks
  a Delete button and the row disappears.
- *Goal:* label the status filter. The `<select>` at
  `SupportTicketDashboard.tsx:52` has no `<label>` or `aria-label`. **Check:**
  `screen.getByLabelText(/status/i)` finds it in a test.

## System Design Deep Dives

See `system-design-deep-dives.md`: 18 sections and 20 Mermaid diagrams that grow the Support Ticket Dashboard (and, more loosely, the Movie Watchlist and the Python lab's Habit/Finance Tracker) into a multi-user system. Covers data modeling, real-time, caching, search, multi-tenancy, background jobs, observability, and scaling. None of it is implemented in this lab, so treat it as interview practice built on code you've already read.

## Running the Final Projects

```bash
# Movie watchlist (no install needed; rewrites watchlist-data.json)
npm run start:movie-watchlist

# React dashboard: tests only. The folder has no package.json or Vite config,
# so there is no dev server to start yet.
npm install
npm run test:react
```

## Tips for Maximum Gain

- Type every example yourself — do not copy-paste.
- When a test fails, read the failure message fully before looking at solution.
- After finishing a drill, ask: "How would I extend this for real users?"
- Keep a "gotchas" notebook.
- Revisit hard lessons after doing the project.
- When comfortable, delete the solution temporarily and re-implement from memory.

Start with Lesson 01.
