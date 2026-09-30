export function cartTotal(items, options) {
  if (!items || items.length === 0) {
    return 0
  }

  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError('Price cannot be negative')
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('Quantity must be a positive integer')
    }
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const vat = subtotal * options.vatRate
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee

  return Math.round(subtotal + vat + shipping)
}
