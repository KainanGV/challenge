import { factorial } from './'

test('Test method factorial, expected return factorial any number', () => {
  expect(factorial(5)).toEqual(120)
  expect(factorial(0)).toEqual(1)
})
