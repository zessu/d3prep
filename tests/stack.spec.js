import Stack from '../data structures/stack';

describe('Stack', () => {
  const stack = new Stack();

  it('creates a new stack', () => {
    expect(stack).toBeDefined();
    expect(stack).toBeInstanceOf(Stack);
  });

  describe('when we push to the stack', () => {
    it('it pushes "1" onto the stack', () => {
      stack.push(1);
      expect(stack.size()).toEqual(1);
    });

    it('it pushes "2" onto the stack', () => {
      stack.push(2);
      expect(stack.size()).toEqual(2);
    });

    it('it has a size of 3', () => {
      stack.push(3);
      expect(stack.size()).toEqual(3);
    });

    it('it prints all the elements we have just pushed onto the stack', () => {
      expect(stack.print()).toEqual([1, 2, 3]);
    });
  });

  describe('when we peek, pop from the stack', () => {
    it('it peeks onto the stack', () => {
      expect(stack.peek()).toEqual(3);
    });

    it('it pops onto the stack', () => {
      expect(stack.pop()).toEqual(3);
      expect(stack.size()).toBe(2);
    });

    it('it peeks onto the stack', () => {
      expect(stack.peek()).toEqual(2);
    });

    it('it pops onto the stack', () => {
      expect(stack.pop()).toEqual(2);
      expect(stack.size()).toBe(1);
    });

    it('it peeks onto the stack', () => {
      expect(stack.peek()).toEqual(1);
    });

    it('it pops onto the stack', () => {
      expect(stack.pop()).toEqual(1);
      expect(stack.size()).toBe(0);
    });

    it('it returns when stack is empty', () => {
      expect(stack.pop()).toMatch(/stack is empty/);
    });

    it('it returns stack empty on empty stack', () => {
      expect(stack.peek()).toMatch(/stack is empty/);
    });

    it('it returns true when array is empty', () => {
      expect(stack.isEmpty()).toBeTruthy();
    })
  });

  describe('clear stack', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
    stack.clear();
    expect(stack.size()).toBe(0);
  });
});
