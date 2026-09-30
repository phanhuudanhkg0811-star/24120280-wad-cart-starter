# Self Assessment Report — IA#1

- **Student ID**: 24120280
- **Repository**: https://github.com/phanhuudanhkg0811-star/24120280-wad-cart-starter
- **Total Points Claimed**: 100 / 100
- **Submission Zip Name**: `24120280_100.zip`

---

## Rubric Assessment

| # | Criterion | Max Points | Claimed | Evidence |
|---|---|:---:|:---:|---|
| 1 | **cartTotal behaves as specified** | 30 | 30 | `src/cart.js`: Implements all requirements strictly with plain JavaScript. Handles worked example (returns 467400 as a Number), empty cart returns 0, free shipping at and above threshold, throws `RangeError` on negative price or invalid quantity (`qty <= 0` or non-integer), and rounds to whole đồng using `Math.round()`. Zero external dependencies. |
| 2 | **Tests** | 20 | 20 | `test/cart.test.js`: 11 atomic tests passing with `node:test`. Each test tests exactly one behavior: covers worked example, empty cart, 3 shipping threshold boundaries (below, exact, above), 4 RangeError cases (negative price, zero qty, negative qty, decimal float qty), primitive number type assertion, and rounding to whole đồng. |
| 3 | **The harness** | 20 | 20 | `AGENTS.md` defines stack, style, commands, tests, and explicit `Never` constraints. `package.json` contains a working gate (`npm run gate`) combining `node --check` and `npm test` with zero dependencies. `.github/workflows/ci.yml` runs the quality gate automatically on every push and pull request. |
| 4 | **The brief** | 15 | 15 | `BRIEF.md`: Complete "Strong Brief" specifying the exact files to touch (`src/cart.js` and `test/cart.test.js`), forbidding package modifications, detailing the public contract, calculation rules, input validation, and exact definition of done. |
| 5 | **AI-LOG.md** | 15 | 15 | `AI-LOG.md`: Fully transparent log specifying tools used, prompts, generated artifacts, hand-written portions, and specifically the human gate intervention that caught and rejected an unrequested dependency (`prettier`), replacing it with native `node --check`. |

---

## What I did not manage

- **Real style linter**: `npm run lint` uses native `node --check` for syntax
  validation only, not a third-party style linter like ESLint or Prettier.
  Adding one would break the brief's "no dependencies" rule.
- **Validation on `options`**: The spec defines error cases only for `items`
  (negative price, non-positive-integer quantity). I did not add defensive
  checks for a malformed `options` object, since that is outside the contract.
