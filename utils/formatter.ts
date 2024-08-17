export const formatPrice = (price: number | string): number => {
  if (!price) return 0
  if (typeof price === 'string' && isNaN(Number(price))) {
    return 0
  }
  if (typeof price === 'string') {
    return Math.round(Number(price))
  }

  if (isNaN(price)) {
    return 0
  }
  return Math.round(Number(price))

  // return Intl?.NumberFormat('ru')?.format(Math.round(+price))
}
