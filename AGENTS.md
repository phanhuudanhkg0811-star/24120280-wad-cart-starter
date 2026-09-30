# Project Rules

## Tech Stack
- Runtime: Node.js 22 (ES Modules, `"type": "module"`)
- Test runner: native `node:test` and `node:assert/strict`
- Dependencies: None. Plain JavaScript only. Zero runtime dependencies allowed.

## Style Guidelines
- Indentation: 2 spaces, no tabs.
- Export style: Named exports (`export function cartTotal`), no default exports.
- File extensions: Always include `.js` in import paths (e.g., `'../src/cart.js'`).
- Return types: Strict primitives. Numbers must be real `Number` values, never strings.

## Commands
- `npm test`: Run specification unit tests.
- `npm run lint`: Check syntax and code formatting.
- `npm run gate`: Full quality gate (`npm test` + lint check) before any commit or push.

## Testing Rules
- Every rule in the specification must have a dedicated test case under `test/cart.test.js`.
- Atomic assertions: Each test must test exactly one behavior so that each test can fail for only one reason.
- Assert against the public contract/specification, never against private implementation details.

## Never
- NEVER install or add any runtime dependencies under `"dependencies"` in `package.json`.
- NEVER use `.toFixed()` without converting back to a `Number` (cartTotal must return a rounded whole number).
- NEVER swallow errors with empty `catch {}` blocks.
- NEVER commit `node_modules` or `.env` files.
- NEVER edit files outside the designated scope of the brief without permission.
