const Node = require('./node.js');
// const LinkedList = require('./linked-list.js');

// how might this change if implemented with a linked list?
class Stack {
  constructor(data) {
    this.top = new Node(data);
    this.length = 1;
  }

  pop() {
    const top = this.top;
    if (!top.next) return null;
    this.top = top.next;
    this.length--;

    return top;
  }

  push(data) {
    const newTop = new Node(data, this.top);
    this.top = newTop;
    this.length++;

    return this.top;
  }
}

const stack = new Stack(1);
stack.push(2);

console.log('stask', stack);
stack.pop();
console.log('stack popped', stack);
stack.pop();
console.log('stack popped', stack);
