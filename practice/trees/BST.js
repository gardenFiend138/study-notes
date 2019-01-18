const Node = require('./node.js');

class BST {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    let current = this.root;
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    while (current) {
      if (current.value <= value) {
        if (!current.right) {
          current.right = newNode;
        }

        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
        }
         
         current = current.left;
        }
      }
    }

    return newNode;
  }
}
