/*
 The node class is a simple object. It's constructor method sets the data/ value
 of the node, as well as sets the next value, the value it holds a pointer to.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// export default Node;
module.exports = Node;
