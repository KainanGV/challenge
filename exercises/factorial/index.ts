
const factorial = (x: number): number => {
  if (x === 1 || x === 0) return 1

  return factorial(x - 1) * x
}
export { factorial }
