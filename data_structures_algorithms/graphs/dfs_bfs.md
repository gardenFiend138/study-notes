# Trees 

[Graph Traversal-- BFS & DFS](https://www.youtube.com/watch?v=bIA8HEEUxZI)

[MIT BFS Video](https://www.youtube.com/watch?v=s-CYnVz-uh4)

## Searching Trees 


### Breadth First Search
* Uses 
  * Web crawling 
  * social networking (friends of friends)
  * network broadcasting 
  * garbage collection 
    * checks what data and variables are reachable ffrom the current scope, frees up the memory if it is not 
    * model checking (graph of possible state possibilities to check; if a parent isn't possible to reach, then neither are the children)
    * checking mathematical conjectures (same reason as above)
    * solving puzzles and games (establish configuration graph, each vertex is a possible state)
      * fun fact: vertices for 2x2x2 rubics cube is (8! * 3^8) == 264,000,000
         * taking apart cube and reassembling 
         * divide by 24 and again by 3 due to constraints of a physical rubic's cube 
  
  'diameter' of the graph 
         
* Uses a queue
* Start at first vertex, add it to queue, mark it as visited 
* Then, check the vertices it's connected to through an edge
  * See which to visit first (least alphabetically, value, etc)
  * Add that to the queue, mark it as visited 
* Repeat the process 

* We are finished when the queue is empty 

### BFS (continued)

[BFS Reading](https://www.geeksforgeeks.org/breadth-first-traversal-for-a-graph/)

Time complexity: O(|V| + |E|)

Similar to a BFS of a tree, except for the fact that graphs may have cycles. This means we need to keep track of which vertices have already been visited. If the boolean array has any false values when the queue is empty, it means we have a disconnected graph, and we must start the BFS over again with the nodes that are unvisited. 

__Big idea:__ traverse nodes in layers 

### Depth First Search 
* Maze solving, shortest paths 
* lends itself to recursion 
* Uses a stack
  * Think of lightening, shooting down to the furthest left-most node 
* Start at first vertex, add it to the result (mark as visited)
* See what vertices are connected, go to the one that comes next
  * Put the vertices that are visited into your queue
* Continue to walk through the vertices that were connected to our starting node, adding them to the result, and enqueueing them
* When we no longer have any vertices to visit for our curent node, we dequeue a vertex, and explore those edges 
* Repeat 

// this only visits vertices reachable from 's'
parent = { s: None }
DFS_visit(V, adj, s) // s is given vertex 
  for v in Adj[s]: 
    if v not in parent: 
      parent[v] = s // set parent pointer 
      DFS(V, Adj, s)
      
DFS(V, Adj):
  parent = {} 
  for s in V:
    if s not in parent: 
      parent[s] = none 
      DFS-visit(v, Adj, s)
      
### Edge Classification 
* tree edge (parent pointer) 
  * visit new vertex via edge 
* forward edges (goes from node to descendent in tree)
* backward edges (goes from one vertex to an ancestor--that is, a vertex prior in the graph)
* cross edges (edge that connects sibling nodes/ sub-trees; non ancestor related) 

How to determine this programatically? Every parent pointer corresponds to tree edges; can use time/ counter to keep track of when it was visited, and then use that to compute; 


## Readings and Code 

[Resource Here](https://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/)

[Example in Ruby](http://haozeng.github.io/blog/2014/01/05/trees-in-ruby/)





