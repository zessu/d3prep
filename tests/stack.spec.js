import Stack from '../data structures/stack';

describe('Stack', () => {
  beforeEach(() => { });

  const stack = new Stack();

  it('creates a new stack', () => {
    expect(stack).toBeDefined();
  });

  describe('when we push to the stack', () => {
    it('it pushes "1" onto the stack', () => {
      stack.push(1);
      expect(stack.size()).to.equal(1);
    });

    it('it pushes "2" onto the stack', () => {
      stack.push(2);
      expect(stack.size()).to.equal(2);
    });

    it('it has a size of 4', () => {
      expect(stack.size()).to.equal(4);
    });

    it('it prints all the elements we have just pushed onto the stack', () => {
      expect(stack.print()).to.equal('1 2 3 4');
    });
  });
});
