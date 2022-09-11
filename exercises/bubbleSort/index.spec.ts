import { bubbleSort } from './'

test('Test method bubble sort, expected return list sorted, O(N)', () => {
  const vector = [5, 3, 2, 4, 7, 1, 0, 6]
  expect(bubbleSort(vector)).toEqual([0, 1, 2, 3, 4, 5, 6, 7])
})
