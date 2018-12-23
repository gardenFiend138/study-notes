// longest substring length, without repeats
// this is not fast enough to pass specs;
// see: https://www.quora.com/How-do-I-generate-all-substrings-out-of-a-string-in-less-than-O-N-2-two-nested-for-loops
// for discussion of using a Power Set

function longestSubstringLength(string) {
  let substrings = new Set();
  let currentWord = '';

  for (let i = 0; i < string.length; i++) {
    currentWord += string[i];
    substrings.add(currentWord);

    for (let j = i + 1; j < string.length; j++) {
      currentWord += string[j];
      substrings.add(currentWord);
    }

    currentWord = '';
  }

  let longest = 0;
  substrings.forEach((substring) => {
    let uniqueChars = new Set(substring);
    if (uniqueChars.size === substring.length) {
      if (substring.length > longest) {
        longest = substring.length;
      }
    }
  });

  return longest;
}

