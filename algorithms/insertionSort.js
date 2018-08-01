export default function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    const sorted = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > sorted) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = sorted;
  }
  return array;
}
