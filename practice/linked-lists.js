/*
 The node class is a simple object. It's constructor method sets the data/ value
 of the node, as well as sets the next value, the value it holds a pointer to.
 */
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data = {}) {
    this.head = null;
    this.length = 0;
    this.insertHead(data);
  }

  insertHead(data) {
    this.head = new Node(data, this.head);
    this.length++;

    return this;
  }

  insertTail(data) {
    const oldTail = this.getTail();
    const newTail = new Node(data, null);
    oldTail.next =  newTail;
    this.length++;

    return newTail;
  }

  insertAfterVal(val, data) {
    const targetNode = this.getNodeByValue(val);
    if (!targetNode) return null;
    const oldNext = targetNode.next;
    targetNode.next = new Node(data, oldNext);

    return targetNode; // what should we return here?
  }

  deleteVal(val) {
    const targetNode = this.getNodeByValue(val);
    const oldNext = targetNode.next;
    const prevNode = this.findParent(targetNode);
    prevNode.next = oldNext;
    this.length--;

    return prevNode;
  }

  findParent(node) {
    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode) return null;
      if (currentNode.next === node) return currentNode;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  getNodeByValue(val) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === val) return currentNode;
      currentNode = currentNode.next;
    }

    // takes care of this.head === null && this.head.next === null
    return currentNode;
  }

  getTail() {
    let currentNode = this.head;
    let tail = currentNode;

    while (currentNode) {
      tail = currentNode;
      currentNode = currentNode.next;
    }

    return tail;
  }
}


// 0 -> 1 -> 2 -> 2.5 -> 3

const list = new LinkedList(1);
list.insertTail(2);
list.insertTail(3);
list.insertAfterVal(2, 2.5)

// console.log('list', list);
// console.log('head', list.head);
// console.log('next', list.head.next);
// console.log('next.next', list.head.next.next);
console.log('list.insertHead(0)', list.insertHead(0));
console.log('delete 2', list.deleteVal(2));
console.log('after delete', list);
