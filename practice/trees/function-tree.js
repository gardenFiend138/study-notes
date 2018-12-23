class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


/*
 Is the input guaranteed to be a binary tree? Can we assume it's balanced?

 1; DFS to find first number in equation
 2: once we have that number, the parent is the operator
 3. the next child is the second part in this part of the equation


 */
const solveFuncTree = (node) => {
  const start = getLeftmost(node);
  const operator = start.parent;
};

const getLeftmost = (node) => {
  let start = node;
  const stack = []; // could just use a var here to keep track of last

  while (node.left) {
    stack.push(node.left);
  }

  return stack.pop();
}

const node1 = new Node(5);
const node2 = new Node(4);
const node3 = new Node(3, node1, node2);

console.log(setParent(node3));
