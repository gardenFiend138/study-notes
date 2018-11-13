const Node = require('./node.js');

class LinkedList {
  constructor(/* value */) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    // should this be here? Or should it just be instantiated
    // with no value?
    // this.addHead(value);
  }

  isEmpty() {
    return !this.head && !this.tail;
  }

  addHead(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      oldHead.prev = node;
      this.head = node;
      this.head.next = oldHead;
    }

    this.length++;
  }

  addTail(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      const prevTail = this.tail;
      prevTail.next = node;
      this.tail = node;
      this.tail.prev = prevTail;
    }

    this.length++;
  }

  add(value) {
   this.head ? this.addTail(value) : this.addHead(value);
  }

  size() {
    return this.length;
  }

  remove(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        if (node === this.head) {
          this.removeHead();
	} else if (node === this.tail) {
	  this.removeTail();
 	} else {
          node.prev.next = node.next
          node.next.prev = node.prev;
          this.length--;
        }
      }

      node = node.next;
    }

    return null;
  }

  removeNode(node) { 
    if (node === this.head) {
      this.removeHead();
    } else if (node === this.tail) {
      this.removeTail();
    } else {
      node.prev.next = node.next
      node.next.prev = node.prev;
      this.length--;
    }
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  removeTail() {
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
  }

  show() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

// const ll = new LinkedList();
// ll.add(0);
// ll.add(1);
// ll.add(2);
// ll.add(3);
// console.log('ll: ', ll.show());
// ll.remove(2);
// console.log('ll remove 2: ',ll.show());
// ll.removeHead();
// console.log('ll remove head: ', ll.show());
// ll.removeTail();
// console.log('ll remove tail: ', ll.show());
// ll.add('2nd to last');
// ll.add('last');
// ll.addHead('new head');
// ll.addTail('new tail');
// console.log('ll new head and tail: ', ll.show());

module.exports = LinkedList;
