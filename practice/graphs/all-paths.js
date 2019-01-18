/*
  input: [[1,2], [3], [4], [], []]
  output: [ [0,2,4] ]
  target node: input.length - 1
  index = node;
  graph[i] = list of edges

   0 --> 1 --> 3
   |
  \/
   2 --> 4

 */
var allPathsSourceTarget = function(graph) {
  var currentPath = [];
  var edges = [];
  var destination = graph.length - 1;
  var allPaths = [];

  for (let i = 0; i < graph.length; i++) {
    source = i; // 0
    edges = graph[i]; // [1,2]
    currentPath.push(0);

    for (let j = 0; j < edges.length; j++) {
      if (hasPathDFS(edges[j], destination, graph)) {
        currentPath.push(edges[j]);
      }
    }

    if (currentPath.length > 1) {
      currentPath.push(destination);
      allPaths.push(currentPath);
      currentPath = [];
    }
  }

  return allPaths;
}

function hasPathDFS(source, destination, graph) {
  var currentNode = source; // 1
  var edges = graph[source]; // [3,4]

  if (!edges || !edges.length) return false;

  if (edges.includes(destination)) {
    return true;
  } else {
    edges.shift();
    hasPathDFS(edges, destination, graph)
  }

  return false;
}

// input: [[1,2], [3], [4], [], []]
function allPaths(graph) {
  let stack = [];
  let edges = [];
  let allPaths = [];
  const destination = graph.length - 1;
  const visited = {};

  for (let i = 0; i < graph.length; i++) {
    let currentNode = i;
    stack.push(currentNode);
    edges = graph[currentNode].slice(0);

    while (edges.length) {
      currentNode = edges.pop();
      stack.push(currentNode);
      edges = graph[currentNode];

      if (currentNode === destination) {
        allPaths.push(stack.slice(0));
      }
    }
    stack.pop();

  }

  return allPaths;
}

// [[1,2], [3], [4], [], []]
function allPathsTwo(graph) {
  let currentNode = 0;
  let edges = [];
  let stack = [currentNode];
  let destination = graph.length - 1;
  let currentPath = [];
  let result = [];
  let visited = {};

// right now i'm failing on a dead end path; need to rething where popping
// also, why is the node getting cast to a string when pushed into currentPath??
// Obviously need to do some work with for...in loops..I was getting an index each
// time, which was a string (?)
  while (stack.length) {
    currentNode = stack.pop(); // 0 -> 2 -> 4
    currentPath.push(currentNode); // [0] -> [0,2] -> [0,2,4]     why is this a string?
    // visited[currentNode] = true;
    edges = graph[currentNode]; // [1,2] -> [4] -> []

    if (currentNode === destination) {
      result.push(currentPath);
      currentPath = [0];
    }

    if (edges.length) {
      console.log('edges', edges);
      // for (let edge in edges) {
      for (let i = 0; i < edges.length; i++) {
        // console.log('edge', edge);
        if (!visited[edges[i]]) {
          stack.push(edges[i]); // [1,2] -> [1,4]
          visited[edges[i]] = true;
        }
      }
    }
  }

  return result;
}

console.log('all pathsTwo: ', allPathsTwo([[1,2], [3], [4], [], []]));
