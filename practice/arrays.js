/*
 Given an image represented by an NxN matrix, where each pixel in the image is
 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
 place?
 [
 [1, 2, 3],
 [4, 5, 6],   =>
 [7, 8, 9],
]
[
[1, 4, 7],
[2, 5, 8],
[3, 6, 9],
]
 */

// time: O(n^2)
// space: O(1)
const myTransform = (array) => {
  let previous;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      previous = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = previous;
    }
  }

  return array;
}

// why not evaluating as equal? Testing for same array and value?
// console.log('myTransform test: ', myTransform([[1,2,3], [4,5,6], [7,8,9]]) === [[1,4,7], [2,5,8], [3,6,9]]);

/*
 Write an algorithm such that if an element in an MxN matrix is 0,
 its entire row and column is set to 0.

 In place? This may drastically affect the outcome.
 Or scan the entire matrix first, find the zeros, and set the rows and columns from there?

 [
 [0, 4, 7],
 [2, 0, 8], =>
 [3, 6, 9],
 ]

 [
 [0, 0, 0],
 [0, 0, 0],
 [0, 0, 9],
 ]
 */

/*
  Maybe, instead of building up an array of the coordinates, just use a hash to keep
  track of which rows/ columns will be set to 0
 */
const getZeroCoordinates = (array) => {
  // let coordinates = [];
  const zeros = { rows: {}, columns: {} };

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === 0) {
        if (!zeros.rows[i]) zeros.rows[i] = true;
        if (!zeros.columns[j]) zeros.columns[j] = true;
        // could make other optimizations here: if we find a zero, AND the rows/columns
        // are already 0s, then we can continue on and skip that row...might not be worth
        // the hassle though
      }
    }
  }

  return zeros;
}

const setColumnAndRowToZero = (array) => {
  const zeroCoordinates = getZeroCoordinates(array);
  
  // don't loop through the entire matrix again, but check rows and columns instead
  // although, we have to loop through entire matrix once already, so we're already
  // at O(n^2) anyway, so does it matter then?
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (zeroCoordinates.rows[i]) array[i][j] = 0;
      if (zeroCoordinates.columns[j]) array[i][j] = 0;
    }
  }

  return array;
};

// console.log('setColumnAndRowToZero test: [[0, 0, 0], [0, 0, 0], [0, 0, 9]] ?', setColumnAndRowToZero([[0, 4, 7], [2, 0, 8], [3, 6, 9]]));
// console.log('setColumnAndRowToZero test: [[1, 0, 7], [0, 0, 0], [3, 0, 9]] ?', setColumnAndRowToZero([[1, 4, 7], [2, 0, 8], [3, 1, 9]]));

// console.log('isRotation test: ', isRotation('waterbottle', 'erbottlewat') === true);

// export default {
//   myTransform,
//   getZeroCoordinates,
//   setColumnAndRowToZero,
// };

// rotateLeft([1, 2, 3, 4, 5], 6) => [2, 3, 4, 5, 1]
const rotateLeft = (array, offset) => {
  if (offset === 0 || offset % array.length === 0) return array;
  let start = array.length > offset
    ? array.length - offset
    : array.length - (offset % array.length);

  for (let i = 0; i < array.length; i++) {
    console.log(array[start]);
    start++;
    if (start === array.length) start = 0;
  }

  return;
};

console.log(rotateLeft([1,2,3,4,5], 4));
