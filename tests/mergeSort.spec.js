import mergeSort from '../algorithms/mergeSort';

describe('bubblesort', () => {
  const array = [2, 7, 1, 10, 2];

  it('should successfully sort array', () => {
    const result = mergeSort(array);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([1, 2, 2, 7, 10]);
  });
});
