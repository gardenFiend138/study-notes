/* Implement an algorithm to determine if a string has all unique characters.
 * What if you can not use additional data structures?
 * Return value?
 * Are upper and lowercase considered the same?
 *
 */

// time: O(n)
// space: O(n)
const myUnique = string => {
  const counter = {};
  let i;
  let char;

  for (i = 0; i < string.length; i++) {
    char = string[i];

    if (counter[char]) return false;
    counter[char] = true;
  }

  return true;
}

// console.log('myUnique test: ', myUnique('abcde' === true));
// console.log('myUnique test: ', myUnique('abcda' === false));

const myUniqueInPlace = string => {
  let i;
  let partition;

  for (i = 1; i < string.length; i++) {
    partition = i - 1;
    if (string.slice(0, partition + 1).includes(string[i])) {
      return false;
    }
  }

  return true;
}

console.log('myUnique test: ', myUniqueInPlace('abcde' === true));
console.log('myUnique test: ', myUniqueInPlace('abcda' === false));
