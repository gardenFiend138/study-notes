// const quickSort = (arr) => {
//   const pivot = 0;
//   const left = [];
//   const right = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= arr[pivot]) {
//       right.push(arr[i]);
//     } else {
//       left.push(arr[i]);
//     }
//   }
//
// }
// [3,6,1,7]
function quickSort(arr, left = 0, right = arr.length - 1) {
  let idx;

  if (arr.length > 1) {
    idx = partition(arr, left, right);

    if (left < idx - 1) {
      quickSort(arr, left, idx - 1);
    }

    if (right > idx) {
      quickSort(arr, idx, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = Math.floor((right + left) / 2);
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < arr[pivot]) {
      i++;
    }

    while (arr[j] > arr[pivot]) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function swap(arr, i, j) {
  const prev = arr[i];
  arr[i] = arr[j];
  arr[j] = prev;

  return arr;
}

console.log('quicksort: ', quickSort([2,4,5,1,5,6]));
