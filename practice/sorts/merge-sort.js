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

  return sorted.concat(left).concat(right);
};

const reverseSort = (x, y) => y > x;
const arr = [3, 2, 1, 0, -2, -10, 0, 0, 3.9];
console.log(mergeSort(arr));
console.log('reverse', mergeSort(arr, reverseSort));

Array.prototype.mergeSort = function (comparator) {
  if (this.length === 1) return this;
  const mid = Math.floor(this.length / 2);
  const left = this.slice(0, mid).mergeSort(comparator);
  const right = this.slice(mid, this.length).mergeSort(comparator);

  return merge(left, right, comparator);
}

console.log('prototype', arr.mergeSort());
console.log('prototype', arr.mergeSort(reverseSort));
