# Web Development Interview Questions & Answers

**Focus:** React, TypeScript, Node.js, and modern full-stack web development.

This file contains 70+ high-quality questions commonly asked in mid-to-senior frontend/fullstack interviews. Answers are concise but demonstrate depth (what interviewers actually want to hear).

---

## React

### 1. What is the difference between controlled and uncontrolled components?

**Answer:**
- **Controlled**: React state is the single source of truth. The input value is driven by `state` and updated via `onChange`.
- **Uncontrolled**: The DOM manages its own state. You use `ref` to access values when needed (e.g. on submit).

Controlled is preferred for most cases because it gives you full control for validation, formatting, and derived state.

### 2. Explain the useEffect dependency array. What happens with different values?

**Answer:**
- `[]` — runs once after mount (like `componentDidMount`).
- `[dep1, dep2]` — runs when any dependency changes.
- No array — runs after every render (usually a bug).
- Missing dependencies is one of the most common sources of stale closures.

Use the ESLint `exhaustive-deps` rule.

### 3. What are React keys and why are they important?

**Answer:**
Keys help React identify which items have changed, been added, or removed. They should be stable, unique, and predictable. Using array indices as keys can cause bugs with reordering or conditional rendering.

### 4. Explain useMemo and useCallback. When would you use each?

**Answer:**
- `useMemo` memoizes the *result* of a computation.
- `useCallback` memoizes the *function* itself.

Use them to prevent unnecessary re-renders in child components that rely on reference equality (especially when passing callbacks to `React.memo` children or to context providers).

Don't overuse them — they have a cost.

### 5. What is React.memo and when does it help?

**Answer:**
`React.memo` is a higher-order component that memoizes a component based on props (shallow comparison by default). It prevents re-renders if props haven't changed.

Useful for expensive components that receive stable props. Combine with `useMemo`/`useCallback` for objects and functions.

### 6. Describe the React rendering process and reconciliation.

**Answer:**
When state or props change, React creates a new virtual DOM tree and compares it with the previous one (reconciliation). It then applies the minimal set of DOM mutations.

Key concepts: fiber architecture, concurrent rendering, time slicing, priority levels.

### 7. What are custom hooks? Give examples of good ones.

**Answer:**
Custom hooks are functions that use other hooks and encapsulate reusable stateful logic.

Good examples:
- `useLocalStorage`
- `useFetch`
- `useDebounce`
- `usePrevious`
- `useMediaQuery`

### 8. How do you handle data fetching in React? Compare approaches.

**Answer:**
- `useEffect` + `useState` (classic, lots of boilerplate)
- React Query / TanStack Query (best for most apps)
- SWR
- Server Components + Suspense (Next.js App Router)
- Redux Toolkit Query

Mention loading, error, caching, refetching, and background updates.

### 9. What is the Context API and when should you avoid it?

**Answer:**
Context provides a way to pass data through the component tree without prop drilling.

Avoid for frequently changing values (causes too many re-renders). Use it for theme, auth, i18n. For complex state, combine with `useReducer`.

### 10. Explain Suspense and how it works with data fetching.

**Answer:**
Suspense lets components "suspend" while waiting for something (data, code, images). It shows a fallback until the promise resolves.

With React Server Components and streaming, this becomes very powerful.

---

## TypeScript

### 11. What is the difference between `interface` and `type`?

**Answer:**
- `interface` can be extended and merged (declaration merging).
- `type` is more flexible for unions, intersections, mapped types, and conditional types.

Use `interface` for public API shapes. Use `type` for complex transformations.

### 12. Explain `keyof`, `typeof`, and indexed access types.

**Answer:**
```ts
type Keys = keyof User;           // "id" | "name"
type NameType = User["name"];     // string
const x = { a: 1 }; type T = typeof x; // { a: number }
```

### 13. What are discriminated unions and how do they help with type narrowing?

**Answer:**
A common pattern using a literal discriminant (usually a `kind` or `type` field):

```ts
type Action =
  | { type: "ADD"; payload: Ticket }
  | { type: "DELETE"; id: number };

if (action.type === "ADD") {
  // payload is correctly typed
}
```

### 14. What are utility types? Name 6 important ones and when to use them.

**Answer:**
`Partial`, `Required`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters`, `Awaited`, `NonNullable`.

### 15. Explain generics with constraints and default types.

**Answer:**
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { ... }
```

### 16. What is declaration merging and module augmentation?

**Answer:**
TypeScript can merge multiple declarations with the same name (interfaces, enums, namespaces). Useful for extending third-party types.

### 17. How do you type a React component with children?

**Answer:**
```ts
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};
```

### 18. What are branded types / nominal typing in TypeScript?

**Answer:**
Technique to create distinct types even when they have the same structure (e.g. `UserId` vs `TicketId` both being numbers).

```ts
type UserId = number & { __brand: "UserId" };
```

### 19. Explain conditional types and infer keyword.

**Answer:**
```ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
```

### 20. How do you handle `unknown` vs `any`?

**Answer:**
`any` disables type checking. `unknown` is type-safe and requires narrowing before use. Always prefer `unknown`.

---

## Node.js

### 21. Explain the Node.js event loop.

**Answer:**
Single-threaded event loop with phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks. Microtasks (promises) run between phases.

### 22. What is the difference between `process.nextTick`, `setImmediate`, and `setTimeout`?

**Answer:**
- `nextTick`: runs before any I/O, highest priority microtask-like.
- `setImmediate`: runs in the check phase.
- `setTimeout(..., 0)`: runs in timers phase.

### 23. How does Node handle asynchronous operations?

**Answer:**
Libuv thread pool for I/O (fs, dns, etc.) and native async for networking. JavaScript remains single-threaded.

### 24. What are streams in Node? Name the four types.

**Answer:**
Readable, Writable, Duplex, Transform. Used for handling large amounts of data efficiently (backpressure).

### 25. Explain CommonJS vs ES Modules in Node.

**Answer:**
- CJS: `require`, `module.exports`, synchronous.
- ESM: `import`/`export`, async, top-level await, better static analysis.

### 26. How would you handle graceful shutdown in a Node server?

**Answer:**
Listen for `SIGTERM`/`SIGINT`, close server, close DB connections, finish in-flight requests, then exit.

### 27. What are some common causes of memory leaks in Node?

**Answer:**
- Unclosed database connections / event listeners
- Growing arrays in closures
- Caching without limits
- Global variables holding references
- Forgotten timers/intervals

### 28. How do you structure a production Node.js application?

**Answer:**
- Layered architecture (routes → controllers → services → repositories)
- Dependency injection
- Proper error handling middleware
- Structured logging
- Config management
- Health checks

### 29. Explain clustering and worker threads.

**Answer:**
Clustering uses multiple processes to utilize all CPU cores. Worker threads allow true parallelism for CPU-bound tasks within a process.

### 30. How do you secure a Node.js API?

**Answer:**
- Helmet, rate limiting, CORS properly configured
- Input validation (Zod, Joi)
- Authentication (JWT + refresh tokens, or sessions)
- Authorization (RBAC/ABAC)
- SQL injection / NoSQL injection prevention
- Secrets management
- Regular dependency updates

---

## General Web / Fullstack

### 31. What is the difference between SSR, CSR, SSG, and ISR?

**Answer:**
- CSR: Client-side rendering (SPA)
- SSR: Server-side rendering per request
- SSG: Static site generation at build time
- ISR: Incremental static regeneration (Next.js)

### 32. Explain CORS and how to handle it properly.

### 33. What are HTTP status codes you use most often and why?

### 34. How do you design a RESTful API vs GraphQL?

### 35. What is the difference between authentication and authorization?

### 36. Explain JWT vs session-based auth.

### 37. How would you design a rate limiter?

### 38. What strategies do you use for caching?

### 39. Explain the concept of eventual consistency.

### 40. How do you approach testing a full-stack feature?

---

## More React / TypeScript / Node Questions (41-70+)

41. How does React's `key` prop affect reconciliation when using lists with objects that have stable IDs?

42. What is the difference between `useLayoutEffect` and `useEffect`?

43. How do you type a higher-order component in TypeScript?

44. Explain React's `useRef` usage beyond DOM access.

45. What are React error boundaries and why can't they be implemented with hooks alone?

46. How does React 18's automatic batching work?

47. Explain the difference between `useReducer` and Redux.

48. How would you implement optimistic updates in React?

49. What are compound components in React?

50. How do you type API responses safely in TypeScript (including error cases)?

51. What is Zod and why is it useful with TypeScript?

52. How do you handle environment variables in Node securely?

53. Explain the difference between `Buffer` and `Uint8Array` in Node.

54. What is the purpose of `AbortController`?

55. How would you implement request retry logic with exponential backoff in Node?

56. Describe your approach to logging in production Node services.

57. What are some gotchas with `JSON.stringify` and `JSON.parse`?

58. How do you prevent XSS in a React application?

59. Explain Content Security Policy (CSP).

60. How do you handle file uploads securely?

61. What is the difference between `cookie`, `localStorage`, and `sessionStorage`?

62. How does React's strict mode help during development?

63. What is tree shaking and how does it relate to bundlers?

64. Explain code splitting strategies in a React app.

65. How would you implement a virtualized list in React?

66. What are some common TypeScript configuration options you always enable?

67. How do you type Express request handlers properly in TypeScript?

68. Explain the concept of "props drilling" and multiple solutions.

69. How do you decide between context, state management library, or URL state?

70. What is your strategy for migrating a large JavaScript codebase to TypeScript?

71. How do you handle long-running tasks in Node without blocking the event loop?

72. Describe how you would implement a simple pub/sub system in Node.

73. What is the difference between `process.env` and `dotenv`?

74. How do you implement pagination, filtering, and sorting on the backend?

75. Explain database connection pooling and why it matters.

---

## System Design / Behavioral (Light)

76. Design a real-time collaborative document (like Google Docs) — high level.

77. How would you design the backend for a support ticket system?

78. Tell me about a time you had to improve performance in a web application.

79. How do you approach code reviews?

80. Describe how you would debug a memory leak in production.

---

**Tips for using this file:**
- For each question, try answering out loud before reading the answer.
- Expand answers with real examples from projects you've worked on.
- Practice whiteboarding or live coding variations of these questions.

Good luck with your interviews!
