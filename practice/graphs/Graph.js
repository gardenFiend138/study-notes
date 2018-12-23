const Node = require('./Node.js');
const Edge = require('./Edge.js');

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(data) {
    const newNode = new Node(data);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(origin, destination, weight) {
    const newEdge = new Edge(origin, destination, weight);
    this.edges.push(newEdge);
    return newEdge;
  }
}

module.exports = Graph;
