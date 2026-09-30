# AI Log

## 2026-09-28 — IA#1 cartTotal with Harness

**Tool**: Antigravity IDE (Gemini 3.8 Flash).

**What I asked for**: I had already written the harness myself — `AGENTS.md`, the `package.json` scripts, and `.github/workflows/ci.yml` — before the assistant was involved. I then handed it `BRIEF.md`, which I wrote from the spec slides, and asked it to implement `cartTotal` in `src/cart.js` and the tests in `test/cart.test.js`, following that brief only.

**What it produced**:
- `src/cart.js` — implementation with input validation, subtotal accumulation, VAT, shipping threshold logic, and whole đồng rounding.
- `test/cart.test.js` — 11 atomic tests: worked example, empty cart, three shipping threshold cases (below / exact / above), four RangeError cases, a Number type assertion, and a rounding case.

**What I changed / rejected**:
- It tried to install `prettier` as a devDependency. I rejected this — it violates the brief's "no dependencies" rule (Slide 24 Red Flag #2). I replaced the lint step with native `node --check`.
- An early draft used `.toFixed(0)`, which returns a string. I rejected it and required `Math.round()` so `cartTotal` returns a primitive Number.
- I tightened the scope in `BRIEF.md` after noticing it did not name `test/cart.test.js` explicitly.

**What I wrote by hand**:
- `AGENTS.md` (adapted the project rules template to this repository).
- `.github/workflows/ci.yml` and the native `package.json` scripts (`gate`, `lint`).
- `BRIEF.md` — my own specification draft from the lecture slides.
- `SELF_ASSESSMENT_REPORT.md`.
