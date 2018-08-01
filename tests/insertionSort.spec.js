import insertionSort from '../algorithms/insertionSort';

describe('insertionSort', () => {
  const array = [2, 7, 1, 10, 2];

  it('should successfully sort array', () => {
    insertionSort(array);
    expect(array).toBeInstanceOf(Array);
    expect(array).toEqual([1, 2, 2, 7, 10]);
  });
});
