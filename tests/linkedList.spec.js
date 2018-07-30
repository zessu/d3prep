import { LinkedList } from '../data structures/linkedList';

describe('linkedlist', () => {
  const linkedlist = new LinkedList();

  beforeEach(() => {
    linkedlist.empty();
  });

  it('should init linkedlist', () => {
    expect(linkedlist).toBeDefined();
    expect(linkedlist).toBeInstanceOf(LinkedList);
  });

  it('should add element to list', () => {
    linkedlist.add(1);
    linkedlist.add(2);
    expect(linkedlist.getHead().value).toBe(1);
    expect(linkedlist.getHead().next.value).toBe(2);
  });

  it('should show elements in the list', () => {
    linkedlist.add(1);
    linkedlist.add(2);
    expect(linkedlist.print()).toMatch(/12/);
  });

  it('should return correct list size', () => {
    linkedlist.add(1);
    expect(linkedlist.size()).toBe(1);
    linkedlist.add(2);
    expect(linkedlist.size()).toBe(2);
  });

  it('should delete item from list', () => {
    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    expect(linkedlist.remove(3)).toBe(3);
    expect(linkedlist.size()).toEqual(2);
  });

  it('returns message when value not found in linked list', () => {
    linkedlist.add(1);
    linkedlist.add(1);
    expect(linkedlist.remove(3)).toMatch(/item not found on the list/);
    expect(linkedlist.size()).toBe(2);
  });

  it('should return message if we try delete non existent item from empty list', () => {
    expect(linkedlist.remove()).toMatch(/please provide item to delete/);
  });

  it('should return message if we try delete non existent item', () => {
    expect(linkedlist.remove(3)).toMatch(/list is empty/);
  });

  it('should link last element correctly after deleting', () => {
    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    linkedlist.add(4);
    linkedlist.remove(3);
    expect(linkedlist.getHead().next.next.value === 4).toBeTruthy();
  });

  it('returns message when linked list is empty on access head', () => {
    expect(linkedlist.getHead()).toMatch(/linked list is empty/);
  });

  it('returns empty string when we print empty linked list', () => {
    expect(linkedlist.print()).toMatch(/linked list is empty/);
  });

  it('resets previous pointer to null if we delete last item on list', () => {
    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    linkedlist.add(4);
    linkedlist.remove(4);
    expect(linkedlist.getHead().next.next.value === 3).toBeTruthy();
  });

});
