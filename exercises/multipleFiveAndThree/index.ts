const getMultipleFiveAndThree = (x: number): number => {
  let sum: number = 0

  for (let i = 1; i < x; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i
  }

  return sum
}

export { getMultipleFiveAndThree }
