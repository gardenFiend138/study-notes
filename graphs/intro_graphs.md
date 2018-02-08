# Graphs

## Introduction to Graphs
[Introduction to Graphs Video](https://www.youtube.com/watch?v=gXgEDyodOJU)

### Key Terms 
  * __graph__: a collection of vertices and edges; used to show relationships; A graph G is an ordered pair of a set V of vertices and a set E of edges
    * G = (V, E)
  * __node/vertex__: a part of a graph; connected to other nodes by edges; nodes/ vertices contain some sort of information (value, index, etc)
  * __edge__: the part of a graph that connects the nodes; can be either undirected or directed 
  * __ordered pair__: denoted by parenthesis (), and mean that the order matters (i.e.: given a != b, (a, b) != (b, a))
  * __unordered pair__: denoted by curly braces; order does not matter (i.e.: given a != b, {a, b} == {b, a})
  * __directed graph__: a graph in which all edges are directed, which means that they flow from one node to another; denoted by ordered pairs 
  * __undirected graph__: a graph in which all edges are not directed, which means that they flow both ways between connected nodes; denoted by unordered pairs 
  * __weight/ cost__: value assigned to an edge; can be said that all graphs are weighted, and that if no weight is specified, then the edges are all of equal weight; also referred to as weighted/ unweighted graphs though

* contrasting linear data structures and graphs 
  * arranged in linear ways (i.e.: arrays, linked lists)
  * non-linear (i.e.: trees, graphs)
  
* Graphs are nodes/ vertices connected by edges
  * contrast with trees: trees have n - 1 edges (1 edge per parent/child relationship)
    * trees are by definition also grpahs, but are graphs that follow a certain set of rules (depending on the tree type [binary, binary search, n-ary, etc])
  * graphs have no rules dictating connections between nodes 
  * edges can connect nodes in multiple ways 
  * study of graphs is referred to as graph theory 
    * G = (V, E)
    * a graph is an ordered pair of a set of vertices and a set of edges
      * (a, b) != (b, a) if a !=b 
    * unordered pair is denoted by curly braces 
      * {a, b} == {a, b}
      
  Let's say we have a graph, represented by vertices V1-V8:
  V = {V1, V2, V3, V4, V5, V6, V7, V8}
  How do we represent edges? 
  * we can have directed edges (only go one way: origin & destination, denoted as an oredered pair (origin, destination))
  * or undirected edges (two way edges) 
  * Possible for a graph to have both directed and undirected edges, but we will focus on graphs with either or 
  * Directed graph == digraph 
  
  Graphs can be used to solve problems involving relationships. Let's say we have a social media network in which friendship is undirectional (goes both ways). We may want to: suggest friends for a user. To do this, we would look at all nodes connected to our curent node, and suggest our current node becomes friends with nodes that are connected to our current node (i.e. friends of friends). This may also be posed as:
    * Find all nodes having length of shortest path from X equal to 2
    
  Graphs can also be used to model sites on the internet; can be both directed and undirected edges, showing how websites are connected. 
  
  This can be used to model how, for example, Google finds search results. Using web crawlers (which is essentially just graph traversal) to check every node (or website) in the graph. 
  
  Some graphs are also weighted; that is, not all connections are created equal. Weight or cost is assigned to edges to denote some important information about them. This may be used to model, for example, intercity highway systems; some roads may be better for traveling, so taking the weight of each edge into account, we can more easily determine the optimum route. 
  
  We can also say that ALL graphs are weighted graphs, but that 'unweighted graphs' have edges of all the same weight.
  
  
## Properties of Graphs 
[Properties of Graphs Video](https://www.youtube.com/watch?v=AfYqN3fGapc)

### Key Terms 
  * __self-loop__: a node that has a link to itself
  * __multi-edge/ prallel-edge__: an edge that is repeated in a graph 
  * __simple graph__: a graph with NO self-loops or multi/parallel edges 
  * __dense__: a graph that has edges close to |V| squared; use an adjacency matrix to save to memory
  * __sparse__: a graph that has edges close to |V|; use an adjacency list to save to memory
  * __path__: sequence of vertices where each adjacent pair is connected by an edge; path from A to B denoted <A B> 
  * __walk__: traversing a graph; simple path means that no edges or vertices are repeated 
  * __trail__: a walk in which no edges are repeated 
  * __strongly connected__: directed graph in which there is a path from any vertex to any vertex  
  * __connected__: undirected graph that still provides a path from any vertex to any vertex 
  * __weakly-connected__: A directed graph, that can be turned into a connected graph by making edges undirected
  * __cycle__: a closed walk; the path starts and ends at the same vertex; the length of the walk/ path must be greater than 0
  
Number of edges and vertices denoted as |V| and |E|, read as 'Edges in set E', 'Vertices in set V' 
  * set is a list of unique items (no duplicates)
  
  * self-loop: can be used to model a webpage that has a link to itself (i.e.: navigation)
  * multi-edge/ parallel edge: an edge that is repeated in a graph; useful for a graph representing flights from one city to another (will likely be multiple flights)
  * these often complicate graphs; graphs without self-loops or multi-edge/ parallel-edge are called simple graphs 
    * be sure to ask clarifying  questions for graph questions (is it a simple graph? Any self-loops or multi-edges?)
    
  * Graphs can have 0 edges; just a collection of unconnected nodes 
  * Simple directed graph:
    * minimum edges == 0
    * maximum edges: if |V| = n, then: 0 <= |E| <= n(n - 1)
  * Simple undirected graph:
      * maximum edges: if |V| = n, then: 0 <= |E| <= (n(n - 1)/ 2)
      * since we cannot have 2 undirected edges going between vertices for simple graph (would be multi-edge/parallel then)
      
  * if |V| = n
    * A graph is referred to as dense if the number of edges is near n**2
    * Called sparse edges if closer to n
  
  The density of a graph determines how we store the data in a computer's memory:
    * for dense graphs, we use a adjacency matrix 
    * for sprase graphs, we use a adjacency list 
    
  Path in a graph: 
    * sequence of vertices where each adjacent pair is connected by an edge 
    * path denoted by < >
      * simple path: vertices and edges are not repeated 
    * Walk: traversing a graph 
    * Trail a walk in which no edges are repeated 
    
  * A graphs is called strongly connected if there is a path from any vertex to any other vertex, and it is directed 
  * A graph that is undirected, but still provides a path to all vertices, then it is just connected
  * A directed graph, that can be turned into a connected graph by making edges undirected, is called weakly_directed
  
**__Connectedness of a graph is extremely important__**

  A walk is called a closed walk if it starts and ends at the same vertex, and the length of the walk/ path must be > 0; sometimes referred to as a cycle 
  
  * a cycle is a close walk has no repetition other than start/ end; a simple cycle can not contain repeated edges 
  
  * graph with no cycle is acyclic graph 
    * ex: graph 
    
  * cycles in graphs can cause lots of issues 
    * directed acyclic graph (DAG) 
  
## Edge List 
[Edge List Overview Video](https://www.youtube.com/watch?v=ZdY1Fp9dKzs&index=40&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P)

### Key Terms 
  * __Vertex List__: an array used to hold the values of vertices 
  * __Edge List__: an array used to hold instances of Edge class (that you define; holds reference to start vertex, end index, and weight)

How to create/ represent graph (in computer memory)
G = (V, E)
A graph is defined as an ordered pair of vertices and edges 

  * One way to create graph: create a list of vertices, create a list of edges 
  * define an edge as a class that contains start index and end index (indices from the vertex array)
  
Array of vertices of graph: 
`[A, B, C, D, E]`

Array of edges (shown here as subarry; best to define class and store instances of the edge class that you define)
`[[vertex start index, vertex end index, weight], [], [], [], [], []]`

No need to include both edges for undirected graphs (i.e.: if we know it's undirected, then no need to A,B and B,A 

How to store weights? 
  * have extra variable on edge class to store edge 
  
__This is not a very efficient way to store graphs__
  * take into account cost:
  Let N be |V| (number of vertices)
    * time cost of operations 
      * O(|V|) for vertex operations 
      * O(|V|* |V|)) for edge operations, since directed graphs can have up to n(n - 1) edges 
    
    * memory cost of storing data 
      * for array, need N memory for vertex list 
      * for edge list, store pointers for vertices, not copies; or, store indices of vertices in vertex list 
      * Overall memory usage is O(|V| + |E|)
      
Common graph problem:
  * Find all nodes adjacent to a given node: O(|E|)
  * Determine if two given nodes are connected: O(|E|)
    * must perform linear scan of Edge List for both of these
  
  Recall (let |V| = n): 
    * 0 <= |E| <= n(n - 1), if directed  
    * 0 <= |E| <= (n(n - 1)/ 2), if undirected 
    
    
To follow up in study of graphs: 

[Adjacency Matrix](https://www.youtube.com/watch?v=9C2cpQZVRBA&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=41)

[Adjacency List](https://www.youtube.com/watch?annotation_id=annotation_2656532701&feature=iv&index=42&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&src_vid=9C2cpQZVRBA&v=k1wraWzqtvQ)

## Representing Graphs 

### Adjacency Matrix 

[Adjacency Matrix Video](https://www.youtube.com/watch?v=9C2cpQZVRBA&index=41&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P)

Using 2 lists (array) to represent graphs has its limitations (time cost of most frequently performed operations--see above notes; requires linear scan of edge list, and edges can be close to |V|^2)

Using a matrix (grid) to represent graph. 

The key for this one is to use boolean values in the matrix, if there is an edge connecting the nodes, put a 1, else, put a 0. The matrix is set up so that the x-axis corresponds to the nodes of the graph, stored still in a vertex list (as before). The Y-axis corresponds to the nodes to which the x-axis node is connected to. (See diagram in images folder)

Note that for undirected graphs, the matrix is symmetrical, since Aij == Aji (that is, every edge connects two nodes, both ways). Because of this, we only have to go through half of the edges, with the matrix cut along a diagonal.

With this, time complexity is cut to: O(|V|), since when we are given a vertex, we must scan the vertex list first to get the index, then scan the row at that index in the adjacency matrix. 
(What about using a hash then?? Lookup time is constant, but then we still need to scan the row that we're storing at that value in the hash).

If indices are given, we can do this in constant time. Okay, now they talk about using a hash for this for the constant lookup time. 

Now, how to store a weighted graph:
Same use of the adjacency matrix, but instead of usin boolean values, we store the edge weight in the adjacency matrix; so now, Aij corresponds ot the edge weight if it exists, not just the presence or absence of an edge. In the demo, he uses infinity, negative infinity, or any other value that would never be a valid edge weight.

Now, we have really improved time complexity, but we are now using O(|V| ** 2) memory. This means that for sparse graphs, we are wasting a lot of memory storing 0s. For dense graphs, adjacency matrix works well though.

Thinking about modeling s social network (FB) with a graph, we know that every user will not be connected to every other user, so we can approximate. 

Next up, adjacency list!

## Adjacency List 

[Adjacency List Video](https://www.youtube.com/watch?v=k1wraWzqtvQ&index=42&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P)

Starts off with an overview of adjacency matrix; reviewing limitations, especially memory constraints (requiring a |V| by |V| grid)

Sugests using an array of edges only, not keeping track of where we are not connected (wasted memory for false values, since in the real world most graphs are sparse). 

![Adjacency Matrix Diagram](https://github.com/gardenFiend138/study-notes/blob/master/graphs/images/adjacency_matrix_diagram_1.png)

Using an adjacency list has a space complexity of O(|E|), and while edges can be |V| ** 2, it most times does not come close to this. 

Now, with an adjacency matrix, we spend constant time to see if a vertex is connected to a vertex (we can look up the indices in our vertex list, and key into our matrix at [start_vertex][end_vertex]). 

For adjacency list, we are forced to scan the array for the given vertex to see if a connection exists (worst case O(|V|)); if we keep a sorted array, we can perform a binary search, reducing our time to log(|V|). This does require us to keep the list sorted though, which has its own implications.

Since most graphs are sparse, our time complexity is actually reduced, since, with that assumption, we won't ever hit our worst case. (See diagram comparing time complexity). 

![Time Complexity Comparison](https://github.com/gardenFiend138/study-notes/blob/master/graphs/images/time_complexity_comparison_1.png)

Before we decide on the best representation, we need to account for a few more common operations.

Inserting a vertex/ edge: adjacency matrix does well with this (constant time for adding/ removing edge). With an adjacency list, to add an edge, we have to create a new array (assuming we don't have a dynamic array). Instead, use a linked list to store the edges, since we don't need contiguous memory; Then we can just create an array of pointers, which points to the head of a linked list. 

**Review from minute 20 on** Discusses using linked lists and pointers for optimumization.

An actual adjacency list uses a linked list with pointers. 

![Adjacency List Diagram](https://github.com/gardenFiend138/study-notes/blob/master/graphs/images/adjacency_list_diagram_1.png)

Or, use a binary search tree instead of a linked list, as this would lessen the time required to searching, inserting, deleting neighbor vertices.

      
  

