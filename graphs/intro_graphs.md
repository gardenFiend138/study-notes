# Graphs
[introduction video](https://www.youtube.com/watch?v=gXgEDyodOJU)

## Key Terms 
  * __graph__: a collection of vertices and edges; used to show relationships 
  * __node/vertex__: a part of a graph; connected to other nodes by edges; nodes/ vertices contain some sort of information (value, index, etc)
  * __edge__: the part of a graph that connects the nodes; can be either undirected or directed 
  * __ordered pair__: denoted by parenthesis (), and mean that the order matters (i.e.: given a != b, (a, b) != (b, a))
  * __unordered pair__: denoted by curly braces; order does not matter (i.e.: given a != b, {a, b} == {b, a})
  * __directed graph__: a graph in which all edges are directed, which means that they flow from one node to another; denoted by ordered pairs 
  * __undirected graph__: a graph in which all edges are not directed, which means that they flow both ways between connected nodes; denoted by unordered pairs 
  * __weight__: value assigned to an edge; can be said that all graphs are weighted, and that if no weight is specified, then the edges are all of equal weight

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