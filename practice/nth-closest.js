/*
 Given an array of coordinates and an origin point, find the nth closest point
 to the origin point.
 Should we do this by making nodes? Or just adding a distance to the coords?
 coordinates = [[1, 2], [5, 3], [9, 4], [2, 7]];
 origin = [5, 5];

 now do it without sorting; use a min heap
 */
const nthClosest = (coords, origin, n) => {
  const nodesWithDistance = coords.map(coord => new Node(coord, origin)); // O(n)
  const comparator = (x, y) => x.distance > y.distance;
  const sortedNodes = mergeSort(nodesWithDistance, comparator); // O(n log n)

  return sortedNodes[n - 1].coordinates;
};

class Node {
  constructor(coordinates, origin) {
    this.coordinates = coordinates;
    this.distance = this.getDistance(coordinates, origin);
  }

  getDistance(coordinates, origin) {
    const pointOne = coordinates[0] < origin[0] ? coordinates : origin;
    const pointTwo = pointOne === coordinates ? origin : coordinates;
    const width = pointTwo[0] - pointOne[1];
    const height = pointTwo[1] - pointOne[1];

    return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  }
}

// just use an array for this
class MinHeap {
  constructor(nodes) {
    this.nodes = nodes;
  }
}

const mergeSort = (arr, comparator) => {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2); // Numbers are floats
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid, arr.length), comparator);

  return merge(left, right, comparator);
};

const merge = (left, right, comparator = (x, y) => x > y) => {
  const sorted = [];

  while (left.length > 0 && right.length > 0) {
    if (comparator(left[0], right[0])) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }

  return [...sorted, ...left, ...right];
  // return sorted.concat(left).concat(right);
};

console.log('nthClosest', nthClosest([[1, 2], [5, 3], [9, 4], [2, 7]], [5, 5], 1));
