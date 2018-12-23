const EDGE_TYPES = ['OUT', 'IN', 'FLAT'];
const EDGE_COMPLIMENTS =  { 'IN': 'OUT', 'OUT': 'IN', 'FLAT': 'FLAT' };

// Piece will get an ordered list of edge types (0 is top, 1 is right, etc)
class Piece {
  constructor(edges) {
     this.edges = edges.forEach(type => new Edge(type));
     // this.top = new Edge(edges[0]);
     // this.right = new Edge(edges[1]);
     // this.bottom = new Edge(edges[2]);
     // this.left = new Edge(edges[3]);
  }

  matches(piece) {
  }
}

class Edge {
  constructor(type) {
    this.type = type;
  }

  matches(edge) {
    return this.type === EDGE_COMPLIMENTS[edge.type];
  }
}

class Puzzle {
  constructor(pieceCount) {
    this.pieces = createPuzzle(pieceCount);
  }

  createPuzzle(pieceCount) {
  }

  pieceFits() {
    
  }

}

const edge1 = new Edge(EDGE_TYPES[0]);
const edge2 = new Edge(EDGE_TYPES[1]);
const edge3 = new Edge(EDGE_TYPES[2]);
const edge4 = new Edge(EDGE_TYPES[2]);
const piece = new Piece([edge1, edge2, edge3, edge4]);
console.log(piece);
