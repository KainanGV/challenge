import { getMultipleFiveAndThree } from './'

test('Test method multiple five and three, expected return the sum of multiple five and three given away number x', () => {
  expect(getMultipleFiveAndThree(10)).toEqual(23)
})
