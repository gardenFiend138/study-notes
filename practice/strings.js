// TODO: add unit tests; next round, use TDD

/*
 Implement an algorithm to determine if a string has all unique characters.
 What if you can not use additional data structures?
 Return value?
 Are upper and lowercase considered the same?
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

/*
 time: O(n log n) ?
 space: O(1)
 */
const isUniqueInPlace = (string) => {
  let i;
  let j;

  for (i = 1; i < string.length; i++) {
    for (j = 0; j < i; j++) {
      if (string[j] === string[i]) return false;
    }
  }

  return true;
};

// console.log('isUniqueInPlace test: ', isUniqueInPlace('abcde') === true);
// console.log('isUniqueInPlace test: ', isUniqueInPlace('abcda') === false);

/*
 Write code to reverse a C-Style String.
 (C-String means that “abcd” is represented as five characters,
 including the null character.)
 Where is the null character? Assuming end..
 Can we mutate? Or pure function? Strings are immmutable in JS anyway
 */

 const myReverse = (string) => {
   let reversed = '';

   for (let i = string.length - 1; i >= 0; i--) {
     reversed += string[i];
   }

   return reversed;
 };

// console.log('my reverse: ', myReverse('abcd ') === ' dcba');

/*
 Design an algorithm and write code to remove the duplicate characters in a
 string without using any additional buffer. NOTE: One or two additional
 variables are fine. An extra copy of the array is not.
 What's buffer refer to?
 Extra copy of the ?array? (mean string?)
 */

const myUnique = (string) => {
  let noDups = '';

  for (let i = 0; i < string.length; i++) {
    if (!noDups.includes(string[i])) noDups += string[i];
  }

  return noDups;
};


// console.log('myUnique test: ', myUnique('aabaababc') === 'abc');

/*
 Write a method to decide if two strings are anagrams or not.
 */

// time: O(n^2) -- how could we do better? Get creative...
// isn't this O(n)? initial loop, then loop for every...n+n = O(n)
// space: O(n) -- ditto...
const isAnagram = (string1, string2) => {
  const charCounter1 = {};
  const charCounter2 = {};
  let char1;
  let char2;

  if (string1.length !== string2.length) return false;

  for (let i = 0; i < string1.length - 1; i++) {
    char1 = string1[i];
    char2 = string2[i];

    charCounter1[char1]
      ? charCounter1[char1] += 1
      : charCounter1[char1] = string1[i];
    charCounter2[char2]
      ? charCounter2[char2] += 1
      : charCounter2[char2] = string2[i];
  };

  return Object.keys(charCounter1).every(key => (
      charCounter2[key] && (charCounter1[key] === charCounter2[key])
    ));
};
// console.log('isAnagram test: ', isAnagram('aabba', 'babaa') === true);
// console.log('isAnagram test: ', isAnagram('aaba', 'babaa') === false);
// console.log('isAnagram test: ', isAnagram('aaba', 'bcaa') === false);

/*
 Write a method to replace all spaces in a string with ‘%20’.
 Does this include any whitespace character, or just a single space?
 What sort of encoding? UTF-8? (does that even matter?)
 Must return a new copy since strings are immutatble in JS
 just use encodeURI() IRL
 */

// time: O(n)
// space: O(n)
const escapeSpaces = (string) => {
  let escapedString = '';

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) === 32) { // if any whitespace char, (/\s/).test(string[i])
      escapedString += '%20';
      continue;
    }

    escapedString += string[i];
  }

  return escapedString;
};

// console.log('escapeSpaces test: ', escapeSpaces('  ') === '%20%20');
// console.log('escapeSpaces test: ', escapeSpaces('a b ') === 'a%20b%20');
// console.log('escapeSpaces test: ', escapeSpaces('abc') === 'abc');

/*
 Assume you have a method isSubstring which checks if one word is a substring of
 another. Given two strings, s1 and s2, write code to check if s2 is a rotation
 of s1 using only one call to isSubstring
 (i.e., “waterbottle” is a rotation of “erbottlewat”).
 Assuming this means that not only can we not manually call the function more than
 once, but we can't make recursive calls? Or check
 */

// time: O(n)
// space: O(1)
// either make this name more descriptive, or check string1.includes(string2) also
const isSubstring = (shortString, longString) => longString.includes(shortString);

// console.log('isSubstring test: ', isSubstring('pop', 'popop') === true);
// console.log('isSubstring test: ', isSubstring('popop', 'popop') === true);
// console.log('isSubstring test: ', isSubstring('pop', 'podop') === false);

const isRotation = (string1, string2) => {
  // can't be rotation if different lengths
  if (string1.length !== string2. length) return false;

  // can't be rotation if don't have all same letters
  for (let i = 0; i < string1.length; i++) {
    if (!string2.includes(string1[i])) {
      return false;
    }
  }

  const firstSub = string2.slice(0, 2);
  const lastSub = string2.slice(2, string2.legnth);

  if (!isSubstring(firstSub, string1)) return false;

  const substringIndex = string1.indexOf(firstSub);
  const rotateString1 = string1.slice(substringIndex + 2, string1.length) + string1.slice(0, substringIndex);

  return rotateString1 === lastSub;
};

// console.log('isRotation test: ', isRotation('waterbottle', 'erbottlewat') === true);

// export default {
//   isUnique,
//   isUniqueInPlace,
//   myReverse,
//   myUnique,
//   isAnagram,
//   escapeSpaces,
//   isSubstring,
//   isRotation,
// };
