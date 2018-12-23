class Edge {
  constructor(origin, destination, weight = 0) {
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;
  }
}

module.exports = Edge;
