# Graphs
[introduction video](https://www.youtube.com/watch?v=gXgEDyodOJU)

## Key Terms 
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
  
  
# Properties of Graphs 
[properties of graphs video](https://www.youtube.com/watch?v=AfYqN3fGapc)
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
    * sequence of vertices where each adhacent pair is connected by an edge 
    * path denoted by < >
      * simple path: vertices and edges are not repeated 
    * Walk: traversing a graph 
    * Trail a walk in which no edges are repeated 
    
  * A graphs is called strongly connected if there is a path from any vertex to any other vertex, and it is directed 
  * A graph that is undirected, but still provides a path to all vertices, then it is just connected
  * A directed graph, that can be turned into a connected graph by making edges undirected, is called weakly_directed
  
## Connectedness of a graph is extremely important 

  A walk is called a closed walk if it starts and ends at the same vertex, and the length of the walk/ path must be > 0; sometimes referred to as a cycle 
  
  * a cycle is a close walk has no repetition other than start/ end; a simple cycle can not contain repeated edges 
  
  * graph with no cycle is acyclic graph 
    * ex: graph 
    
  * cycles in graphs can cause lots of issues 
    * directed acyclic graph (DAG) 
  