# Task Brief: Implement cartTotal(items, options)

## Objective
Implement the `cartTotal` calculation function in `src/cart.js` and dedicated atomic test cases in `test/cart.test.js` strictly using plain JavaScript without any external libraries or runtime dependencies.

## Scope & Constraints
- **Files to modify**:
  - `src/cart.js`: Implement the `cartTotal` calculation logic adhering to the contract and validation rules.
  - `test/cart.test.js`: Write atomic test cases using `node:test` and `node:assert/strict` covering the worked example, empty cart, shipping thresholds, and RangeError validation.
- **Files forbidden to modify**:
  - `package.json` dependencies (zero runtime or dev external packages allowed).
- **Runtime dependencies**: Exactly 0. Use only native JavaScript / Node.js 22 built-ins.

## Contract
### Export
Named export:
```javascript
export function cartTotal(items, options)
```

### Parameters
- `items`: Array of objects `[{ name: string, price: number, qty: number }]`
- `options`: Object `{ vatRate: number, freeShipFrom: number, shipFee: number }`

### Calculation Rules
1. **Empty Cart**: If `items` is empty (`items.length === 0`), return `0` immediately (no VAT, no shipping fee applied).
2. **Subtotal**: Sum of `price * qty` for all items.
3. **VAT**: `subtotal * options.vatRate`.
4. **Shipping**:
   - `0` when `subtotal >= options.freeShipFrom`.
   - `options.shipFee` when `subtotal < options.freeShipFrom`.
5. **Total & Return Value**:
   - Returns `subtotal + VAT + shipping`.
   - Must be rounded to the nearest whole đồng (`Math.round(...)`).
   - Must return a primitive **Number** (NOT a string, never use `.toFixed()` without converting back to `Number`).

### Validation & Error Handling
- Throw `RangeError` if any item has a negative price (`price < 0`).
- Throw `RangeError` if any item has a quantity that is not a positive integer (`!Number.isInteger(qty) || qty <= 0`).

## Definition of Done
- `npm test` passes cleanly with 100% green tests.
- All unit test cases in `test/cart.test.js` pass, covering the worked example, empty cart, threshold boundaries, and all `RangeError` cases.
- `npm run gate` exits with code 0.
