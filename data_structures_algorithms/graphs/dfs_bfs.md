# Trees 

[Graph Traversal-- BFS & DFS](https://www.youtube.com/watch?v=bIA8HEEUxZI)

[MIT BFS Video](https://www.youtube.com/watch?v=s-CYnVz-uh4)

## Searching Trees 


### Breadth First Search
* Uses a queue
  * Think of lightening, shooting down to the furthest left-most node 
* Start at first vertex, add it to stack, mark it as visited 
* Then, check the vertices it's connected to through an edge
  * See which to visit first (least alphabetically, value, etc)
  * Add that to the stack, mark it as visited 
* Repeat the process 

* We are finished when the stack is empty 

### Depth First Search 
* Uses a stack
* Start at first vertex, add it to the result (mark as visited)
* See what vertices are connected, go to the one that comes next
  * Put the vertices that are visited into your queue
* Continue to walk through the vertices that were connected to our starting node, adding them to the result, and enqueueing them
* When we no longer have any vertices to visit for our curent node, we dequeue a vertex, and explore those edges 
* Repeat 

## Readings and Code 

[Resource Here](https://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/)

[Example in Ruby](http://haozeng.github.io/blog/2014/01/05/trees-in-ruby/)





