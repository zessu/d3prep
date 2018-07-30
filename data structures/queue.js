export default class Queue {
  constructor() {
    this.data = [];
    this.front = 0;
    this.back = 0;
  }

  /**
   *
   * @param {*} element to be added to queue
   * @return {number} index of last element in queue
   */
  enqueue(element) {
    this.data.push(element);
    this.rear += 1;
    return this.rear;
  }

  /**
   *
   * @return { number } index of last item on queue
   */
  dequeue() {
    if (this.front === this.rear) {
      return 'queue is empty';
    }
    this.data.shift();
    this.rear -= 1;
    return this.rear;
  }

  /**
   *
   * return oldest element in the array
   * @return { any } last element in the queue
   */
  peek() {
    return this.data[this.front];
  }

  /**
   *
   * return size of the queue
   * @return { number } the size of the queue
   */
  size() {
    return this.rear + 1;
  }

  /**
     * check whether the queue is empty
     * @return {boolean}
     */
  isEmpty() {
    return this.rear === 0;
  }

  /**
   * displays the queue
   */
  print() {
    return this.data;
  }

  /**
 * check wheteher an element exists in the queue
 * @param  {any} element the element to search
 * @return {boolean}
 */
  contains(element) {
    return this.data.includes(element);
  }

  /**
   *
   * clears the queue
   */
  clear() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
  }
}
