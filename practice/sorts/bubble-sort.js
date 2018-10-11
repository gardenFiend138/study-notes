const bubbleSort = (arr) => {
  let isSorted = false;
  let prev;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) {
        prev = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = prev;
        isSorted = false;
      }
    }
  }

  return arr;
};

const arr = [4,3,2,0, 5, -1, 2.5, 12]; // [3,4,2] => [3,2,4] ==> [2,3,4]
console.log(bubbleSort(arr));

Array.prototype.bubbleSort = function() {
  let isSorted = false;
  let prev;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < this.length; i++) {
      if (this[i] >= this[i + 1]) {
        prev = this[i];
        this[i] = this[i + 1];
        this[i + 1] = prev;
        isSorted = false;
      }
    }
  }

  return this;
}

console.log(arr.bubbleSort());
