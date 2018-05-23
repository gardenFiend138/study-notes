/* Implement an algorithm to determine if a string has all unique characters.
 * What if you can not use additional data structures?
 * Return value?
 * Are upper and lowercase considered the same?
 *
 */

// time: O(n)
// space: O(n)
const isUnique = (string) => {
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

// console.log('isUnique test: ', isUnique('abcde') === true);
// console.log('isUnique test: ', isUnique('abcda') === false);

const isUniqueInPlace = (string) => {
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

// console.log('isUnique test: ', isUniqueInPlace('abcde') === true);
// console.log('isUnique test: ', isUniqueInPlace('abcda') === false);

/* Write code to reverse a C-Style String.
 * (C-String means that “abcd” is represented as five characters,
 * including the null character.)
 * Where is the null character? Assuming end..
 * Can we mutate? Or pure function? Strings are immmutable in JS anyway
 */

 const myReverse = (string) => {
   let reversed = '';

   for (let i = string.length - 1; i >= 0; i--) {
     reversed += string[i];
   }

   return reversed;
 };

// console.log('my reverse: ', myReverse('abcd ') === ' dcba');

/*Design an algorithm and write code to remove the duplicate characters in a
 * string without using any additional buffer. NOTE: One or two additional
 * variables are fine. An extra copy of the array is not.
 */

const myUnique = (string) => {
  let noDups = '';

  for (let i = 0; i < string.length; i++) {
    if (!noDups.includes(string[i])) noDups += string[i];
  }

  return noDups;
};


console.log('myUnique test: ', myUnique('aabaababc') === 'abc');
