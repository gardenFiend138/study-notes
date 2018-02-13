# Topological Sort 

[Resource Video](https://www.youtube.com/watch?v=ddTC4Zovtbc)

[MIT Algorithm Course: Topological Sort](https://www.youtube.com/watch?v=AfSk24UTFS8)

[Topological Sort Reading and Code](https://www.geeksforgeeks.org/topological-sorting/) (Topo sort starts at 42:00)

Not necessarily one correct output, it's just that certain conditions must be met (i.e.- children can't be visited before siblings of the parent). Thinking in terms of dependencies.

Applications: 
* build packages (when packages have dependencies on one another)
* job scheduling

Implementation: 
* using a set (visited) and s stack (sorted)
* put it in the stack when it has been fully explored (no children/ no unexplored children); returns by popping of stack
* Uses depth first search 


Time complexity: O(n)
Space complexity: O(2n) => O(n)

Detecting cycles in directed graphs; useful to look for back edge (edge that goes to an ancestor in the tree/graph).
Think balanced parenthesis; must visit last vertex (Vk) before you *finish* exploring V0. 

__DAG__: directed acyclic graph

Proof: 
for any edge e = (u, v)
v finishes before u finishes 
case 1: u starts before v 
case 2: v starts before u  

