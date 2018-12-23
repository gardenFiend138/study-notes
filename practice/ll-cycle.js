const LinkedList = require('./linked-list/singly-linked/linked-lists.js');

function detectCycle(head) {
  let currentNode = head;

  while (currentNode) {
    // If the current node has a pointer to itself, then we have a cycle
    if (currentNode === currentNode.next) {
      return true;
    }
  
    currentNode = currentNode.next;
  }

  // if we terminate the loop, we hit 'null', meaning we have a tail
  return false;
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
const repeat = ll.add(5);
ll.add(repeat);

const ll2 = new LinkedList();
ll2.add(1);
ll2.add(2);
ll2.add(3);
ll2.add(4);
ll2.add(5);

console.log('ll has a cycle: ', detectCycle(ll.head) === true);
console.log('ll2 doesn\'t have a cycle: ', detectCycle(ll2.head) === false);
