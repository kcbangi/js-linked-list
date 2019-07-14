/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }

  function add(value) {
    if (head === null) {
      head = {};
      head.value = value;
      head.next = null;
      tail = head;
      return head;
    } else {
      let newNode = {};
      tail.next = newNode;
      newNode.value = value;
      newNode.next = null;
      tail = newNode;
      return newNode;
    }
  }

  function get(index) {
    let counter = 0;
    let current = head;

    while (current !== null) {
      if (index === counter) {
        return current;
      } else {
        current = current.next;
        counter++;
      }
    }
    return false;
  }

  function remove(index) {
    let previousNode = get(index - 1);
    let current = get(index);

    if (index === 0) {
      head = head.next;
    } else if (current === tail) {
      previousNode.next = null;
      tail = previousNode;
    } else if (current === false) {
      return false;
    } else {
      previousNode.next = current.next;
    }
  }

  function insert(value, index) {}

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
