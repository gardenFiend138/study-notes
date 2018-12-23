/*
 take a string of integers between 0 nad 9
 each number maps to a letter in order
 how many different combinations of possible messages are there?

 gotchas: '11' can be either two 1's or 11
 */
// WRONG! look at sample walkthrough examples at end of file
// hint: recursion and dynamic programming
const numWays = (string) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    let next = string[i + 1];
    if (current === '0') return 0;
    count++; // at least one possible character that would map here;
    let number = toNumber(current);
    if (number < 3 && !!next && toNumber(current + next) <= 26) count++;
  }

  return count;
}

const toNumber = string => parseInt(string, 10);

console.log('numWays test: ', numWays('123'));// 1 1 1 1 1 1 1
// 1, 2, 3   1, 23   12, 3
// 1, 12    2, 23   3
