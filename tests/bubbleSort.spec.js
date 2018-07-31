import bubbleSort from '../algorithms/bubbleSort';

describe('bubblesort', () => {
  const array = [2, 7, 1, 10, 2];

  it('should successfully sort array', () => {
    bubbleSort(array);
    expect(array).toBeInstanceOf(Array);
    expect(array).toEqual([1, 2, 2, 7, 10]);
  });
});
