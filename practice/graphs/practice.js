const Edge = require('./Edge.js');
const Node = require('./Node.js');
const Graph = require('./Graph.js');

const graph = new Graph();
const a = graph.addNode('a');
const b = graph.addNode('b');
graph.addEdge(a, b, 5);

const c = graph.addNode('c');
const d = graph.addNode('d');
graph.addEdge(a, c, 4);
graph.addEdge(a, d, 7);

console.log('graph is now: ', graph);


