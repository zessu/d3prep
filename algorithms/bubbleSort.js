export default function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    let sorted = true;
    for (let j = 0; j < (array.length - i - 1); j += 1) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        sorted = false;
      }
    }
    if (sorted) break; // we went through loop without sorting, is already sorted
  }
}
