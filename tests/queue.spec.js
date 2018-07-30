import Queue from '../data structures/queue';

describe('queue', () => {
  const queue = new Queue();

  beforeEach(() => {
    queue.clear();
  });

  it('should initialize queue', () => {
    expect(queue).toBeDefined();
    expect(queue).toBeInstanceOf(Queue);
  });

  describe('enqueue', () => {
    it('should add data to queue', () => {

      queue.enqueue(1);
      expect(queue.qfront()).toBe(1);
      expect(queue.qback()).toBe(1);
    });
  });

  it('removes element from queue', () => {
    queue.enqueue(2);
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe(0);
    expect(queue.size()).toBe(0);
  });

  it('returns correct data on peek', () => {
    queue.enqueue(1);
    queue.enqueue(122);
    expect(queue.peek()).toBe(1);
  });

  it('returns correct size of queue', () => {
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    queue.enqueue(1);
    expect(queue.size()).toBe(2);
  });

  it('prints correct queue elements', () => {
    queue.enqueue(1);
    queue.enqueue(122);
    expect(queue.print()).toEqual([1, 122]);
  });

  it('clears queue', () => {
    queue.enqueue(1);
    queue.enqueue(122);
    expect(queue.size()).toBe(2);
    queue.clear();
    expect(queue.size()).toBe(0);
  });

  it('should return data at the front of queue', () => {
    queue.enqueue(1);
    expect(queue.qfront()).toBe(1);
  });

  it('should return data at the back of queue', () => {
    queue.enqueue(1);
    expect(queue.qback()).toBe(1);
  });

  it('should return error message on attempt to dequeue an empty queue', () => {
    expect(queue.dequeue()).toMatch(/q/);
  });

  it('should check is queue is empty', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should check if element is present in queue', () => {
    queue.enqueue(1);
    queue.enqueue(122);
    expect(queue.contains(122)).toBeTruthy();
  });
});
