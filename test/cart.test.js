import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns 0', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('shipping fee is applied when subtotal is below freeShipFrom threshold', () => {
  const items = [{ name: 'Bút bi', price: 100000, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 200000, shipFee: 25000 }
  // subtotal: 100000, vat: 10000, shipping: 25000 -> total: 135000
  assert.equal(cartTotal(items, options), 135000)
})

test('shipping is free when subtotal is exactly at freeShipFrom threshold', () => {
  const items = [{ name: 'Bút máy', price: 200000, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 200000, shipFee: 25000 }
  // subtotal: 200000, vat: 20000, shipping: 0 -> total: 220000
  assert.equal(cartTotal(items, options), 220000)
})

test('shipping is free when subtotal exceeds freeShipFrom threshold', () => {
  const items = [{ name: 'Balo', price: 300000, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 200000, shipFee: 25000 }
  // subtotal: 300000, vat: 30000, shipping: 0 -> total: 330000
  assert.equal(cartTotal(items, options), 330000)
})

test('throws RangeError when an item price is negative', () => {
  const items = [{ name: 'Hàng lỗi', price: -5000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('throws RangeError when an item quantity is zero', () => {
  const items = [{ name: 'Hàng ảo', price: 50000, qty: 0 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('throws RangeError when an item quantity is negative', () => {
  const items = [{ name: 'Hàng âm', price: 50000, qty: -1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('throws RangeError when an item quantity is a non-integer float', () => {
  const items = [{ name: 'Hàng lẻ', price: 50000, qty: 1.5 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('returns a primitive number type', () => {
  const items = [{ name: 'Vở kẻ ngang', price: 10000, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 50000, shipFee: 10000 }
  const result = cartTotal(items, options)
  assert.equal(typeof result, 'number')
})

test('rounds total to the nearest whole đồng', () => {
  const items = [{ name: 'Vở kẻ ngang', price: 10001, qty: 1 }]
  const options = { vatRate: 0.085, freeShipFrom: 50000, shipFee: 10000 }
  // subtotal: 10001, vat: 850.085, shipping: 10000 -> 20851.085 -> round to 20851
  assert.equal(cartTotal(items, options), 20851)
})

