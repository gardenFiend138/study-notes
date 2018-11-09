let counter = 0;

const buildArr = () => {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }

  return arr;
}
const arr = buildArr();

const binarySearch = (arr, target) => {
  if (arr.length === 0) return null;
  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr.slice(0, mid), target);
  return binarySearch(arr.slice(mid + 1, arr.length), target) + 1 + mid;
}

Array.prototype.binarySearch = function (target) {
  if (this.length === 0) return null;
  const mid = Math.floor(this.length / 2);

  if (this[mid] === target) {
    return mid;
  } else if (this[mid] > target) {
    return this.slice(0, mid).binarySearch(target);
  } else {
    return this.slice(mid + 1, this.length).binarySearch(target) + 1 + mid;
  }
};

console.log('binary search test', binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
console.log('binary search test', binarySearch(arr, 60));
console.log('b search test', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].binarySearch(7));
