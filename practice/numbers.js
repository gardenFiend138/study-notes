function swapValues(num1, num2) {
  num1 += num2;
  num2 = num1 - num2;
  num1 -=num2;

  return [num1, num2];
}

// const swapValues = (num1, num2) => {
//   num1 += num2;
//   num2 = num1 - num2;
//   num1 -= num2;
//
//   return [num1, num2];
// };

// console.log('swapValues test (13, 90): ', swapValues(13, 90));
// console.log('swapValues test (-4, 90): ', swapValues(-4, 90));
// console.log('swapValues test (138, 901): ', swapValues(138, 901));
