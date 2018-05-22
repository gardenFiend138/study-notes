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
};

// console.log('myUnique test: ', myUnique('abcde') === true);
// console.log('myUnique test: ', myUnique('abcda') === false);

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
};

// console.log('myUnique test: ', myUniqueInPlace('abcde') === true);
// console.log('myUnique test: ', myUniqueInPlace('abcda') === false);

/* Write code to reverse a C-Style String.
 * (C-String means that “abcd” is represented as five characters,
 * including the null character.)
 * Where is the null character? Assuming end..
 * Can we mutate? Or pure function?
 */

 const myReverse = string => {
   let reversed = '';

   for (let i = string.length - 1; i >= 0; i--) {
     reversed += string[i];
   }

   return reversed;
 };

// console.log('my reverse: ', myReverse('abcd ') === ' dcba');

const myReverseInPlace = string => {
  let previous;
  let i = 0;
  let j = string.length - 1;

  while (i < j) {
    previous = string[i];
    string[i] = string[j];
    string[j] = previous;
    i += 1;
    j -= 1;
  }

  return string;
};

console.log('my reverse: ', myReverseInPlace('abcd') === 'dcba');
