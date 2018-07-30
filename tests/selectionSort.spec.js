import selectionSort from '../algorithms/selectionSort';

describe('selectionsort', () => {
  const array = [2, 7, 1, 10, 2];

  it('should successfully sort array', () => {
    selectionSort(array);
    expect(array).toEqual([1, 2, 2, 7, 10]);
    expect(array).toBeInstanceOf(Array);
  });
});
