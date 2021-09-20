const distance = (x1, y1, x2, y2) => {
  const a = x1 - x2
  const b = y1 - y2

  return Math.hypot(a, b)
}

export { distance }
