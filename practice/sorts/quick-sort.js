const quickSort = (arr) => {
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[pivot]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

}
