const Node = require('./node.js');

// singly linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(data) {
    this.head = data instanceof Node ? data : new Node(data);
    this.length++;

    return this.head;
  }

  deleteHead() {
    this.head = this.head.next;
    this.length--;

    return this.head;
  }

  insertTail(data) {
    const oldTail = this.getTail();
    const newTail = data instanceof Node ? data : new Node(data);
    oldTail.next =  newTail;
    this.length++;

    return newTail;
  }

  deleteTail() {
    const tail = this.getTail();
    const newTail = tail.findParent();
    newTail.next = null;
    this.length--;

    return newTail;
  }
  
  add(data) {
   return this.head ? this.insertTail(data) : this.insertHead(data);
  }

  insertAfterVal(val, data) {
    const targetNode = this.getNodeByValue(val);
    if (!targetNode) return null;
    const oldNext = targetNode.next;
    targetNode.next = new Node(data, oldNext);
    this.length++;

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

  // returns first instance of node with matching value
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

  clone() {
    let currentNode = this.head;
    if (!currentNode) return null;
    const newList = new LinkedList(currentNode.data);

    while (currentNode.next) {
      newList.insertTail(currentNode.next.data);
      currentNode = currentNode.next;
    }

    return newList;
  }

  empty() {
    let currentNode = this.head;
    if (!currentNode) return null;

    while (currentNode.next) {

      currentNode = null
    }
  }
}


// 0 -> 1 -> 2 -> 2.5 -> 3

// const list = new LinkedList(1);
// list.insertTail(2);
// list.insertTail(3);
// list.insertAfterVal(2, 2.5)

// console.log('list', list);
// console.log('head', list.head);
// console.log('next', list.head.next);
// console.log('next.next', list.head.next.next);
// console.log('list.insertHead(0)', list.insertHead(0));
// console.log('delete 2', list.deleteVal(2));
// console.log('after delete', list);

// console.log('clone', list.clone());

module.exports = LinkedList;
