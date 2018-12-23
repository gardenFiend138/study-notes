const fib = (num) => {
  const sequence = [0,1];

  for (let i = 1; i <= num; i++) {
    sequence.push(sequence[i] + sequence[i - 1]);
  }

  return sequence;
}

/*
  ES5

  function fib(num) {
    var sequence = [0,1];

    for (let i = 1; i <= num; i++) {
      sequence.push(sequence[i] + sequence[i - 1]);
    }

    return sequence;
  }
 */


console.log(fib(5));
console.log(fib(10));
