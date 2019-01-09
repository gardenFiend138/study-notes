class Node {
  constructor(value)
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
class BinaryTree {
  constructor(options = {}) {
    this.nodes = options.nodes || [];
  }

  addNode(options) {
    const node = new Node(options);
    // and who's child is it?
    if (this.nodes.length === 0) {
      this.nodes.push(new Node(options));
    }
    this.nodes.push(node);
  }

  // // What should we return here? The length of the children, null, undefined?
  // removeNode(node, orphan = true) {
  //   const idx = this.nodes.indexOf(node);
  //
  //   // Removes references to deleted node's children
  //   if (orphan) {
  //     const newNodes = [];
  //     newNodes = this.nodes.slice(0, idx);
  //     newNodes = newNodes.concat(this.nodes.slice(idx + 1, this.nodes.length));
  //     return;
  //   }
  //
  //   const parent = getParent(node);
  //   parent.children = parent.children.concat(node.children);
  //
  // }
}

const a = new Node({ value: 138 });
const b = new Node({ value: 41 });
const c = new Node({ value: 83 });
const tree = new BinaryTree({ nodes: [ a, b, c ] });
console.log('tree: ', tree);
*/
module.exports = Node;
