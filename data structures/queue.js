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
   * @return { number } index of the last item in the queue
   */
  dequeue() {
    if (this.front === this.rear) {
      return 'queue is empty';
    }
    this.data.shift(); // remove from the front
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
    return this.rear;
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
   * return element at the front of the queue
   * @return { any } element at front of the queue
   */
  qfront() {
    return this.data[this.front];
  }

  /**
   * return element at the rear of the queue
   * @return { any } element at rear of the queue
   */
  qback() {
    const index = this.rear - 1;
    return this.data[index];
  }

  /**
   *
   * clears the queue
   * @return { boolean } whether the queue was cleared or now
   */
  clear() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
    return (this.rear - this.front) === 0;
  }
}
