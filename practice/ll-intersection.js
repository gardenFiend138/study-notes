const LinkedList = require('./linked-list/singly-linked/linked-lists.js');

const makeList = (arr) => {
  const ll = new LinkedList();
  ll.add(arr.shift());
  arr.forEach(num => ll.add(num));
  return ll;
}

// need to clarify here--this finds the intersection of the values,
// but each ll could have the same value, but a different node.
// probably need to change this to mark the node as seen, not the
// data/ value
const findIntersection = (list1, list2) => {
  const seen = {};
  const [shortest, longest] = list1.length > list2.length
    ? [list2, list1]
    : [list1, list2];
  let node = shortest.head;

  while (node) {
    seen[node.data] = true;
    node = node.next;
  }

  node = longest.head;

  while (node) {
    if (seen[node.data]) return node.data;
    node = node.next;
  }

  return null;
}

const list_1 = makeList([1,2,3,4,5,6,7,8]);
const list_2 = makeList([15,14,13,12,11,10,9,8]);
const list_3 = makeList([12,11,13,14,15,138,22,21,24]);
const list_4 = makeList([1,2,3,4,138,4,3,2]);

console.log('find intersection: 8', findIntersection(list_1, list_2));
console.log('find intersection: 138', findIntersection(list_3, list_4));
console.log('find intersection: none', findIntersection(list_1, list_3));
