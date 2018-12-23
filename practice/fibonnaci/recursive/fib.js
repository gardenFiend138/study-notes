const fib = (num) => {
  if (num < 2) return 1;
  const prev = fib(num - 1);

  return prev + fib(num - 2);
}

console.log('0', fib(0));
console.log('1', fib(1));
console.log('2', fib(2));
console.log('3', fib(3));
console.log('4', fib(4));
console.log('5', fib(5));
