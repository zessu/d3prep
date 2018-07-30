export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null; // pointer to this linked lists head
  }

  /**
   *
   * @param { any } node element to be added to linked list
   */
  add(element) {
    if (this.head === null) {
      this.head = new Node(element);
      this.length += 1;
      return this.length;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(element);
    this.length += 1;
    return this.length;
  }

  /**
   *
   * @param { any } element to be removed from list
   * @return { any } value changes
   */
  remove(element) {
    if (element == null) {
      return 'please provide item to delete';
    }
    if (this.head === null) {
      return 'list is empty';
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === element) {
        /* if we are deleting from the end
        set pointer to null else set pre.next = current.next and return */
        if (currentNode.next) {
          previousNode.next = currentNode.next;
        } else {
          previousNode.next = null;
        }
        this.length -= 1;
        return currentNode.value; // return element deleted
      }
      previousNode = currentNode;
      if (!currentNode.next) {
        break;
      }
      currentNode = currentNode.next;
    }
    return 'item not found on the list';
  }

  getHead() {
    if (this.length === 0) {
      return 'linked list is empty';
    }
    return this.head;
  }

  /**
   * return size of the linked list
   * @return { number } size of the linked list
   */
  size() {
    return this.length;
  }

  /**
   * prints linked list
   * @return { } elements in the linked list
   */
  print() {
    let string = '';
    if (this.length === 0) {
      return 'linked list is empty';
    }
    let currentNode = this.head;
    while (currentNode.next) {
      string += currentNode.value;
      currentNode = currentNode.next;
    }
    return string + currentNode.value;
  }

  /**
   * delete all items from list
   */
  empty() {
    this.head = null; // this will result in memory leak in JS
    this.length = 0;
  }
}
