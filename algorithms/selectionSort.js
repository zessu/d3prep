export default function selectionSort(items) {
  const len = items.length;
  let min = null;

  for (let i = 0; i < len; i += 1) {
    min = i;
    for (let j = i + 1; j < len; j += 1) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    if (i !== min) {
      const temp = items[i];
      items[i] = items[min];
      items[min] = temp;
    }
  }
  return items;
}
