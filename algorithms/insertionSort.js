export default function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    const value = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = value;
  }
  return array;
}
