export default class Stack {
  constructor() {
    this.data = {};
    this.count = 0;
  }

  /**
   * adds an element to the top of the stack
   * @param {any} element to add to stack
   * @return { number } number of items on the stack
   */
  push(element) {
    this.data[this.count] = element;
    this.count += 1;
    return this.count;
  }

  /**
   * remove element from the top of the stack
   * @return { any } item removed from the stack
   */
  pop() {
    if (this.count === 0) {
      return 'stack is empty';
    }
    this.count -= 1;
    const element = this.data[this.count];
    delete this.data[this.count];
    return element;
  }

  /**
   * returns size of the stack
   * @return {number} value of count
   */
  size() {
    return this.count;
  }

  /**
   * check whether the stack is emptry
   * @return { boolean } whether the stack is empty or not
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * return the element at the top of the stack
   * @return {any} element at the top of the stack
   */
  peek() {
    if (this.count === 0) {
      return 'stack is empty';
    }
    const index = this.count;
    return this.data[index - 1];
  }

  /**
   * clear the stack
   * @return { boolean } whether or not the stack was cleared
   */
  clear() {
    this.data = {};
    this.count = 0;
  }

  /**
   * displays the items on the stack
   */
  print() {
    return Object.values(this.data);
  }
}
