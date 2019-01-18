function permutations(string) {
  const perms = [];

  if (string.length < 2) return [string];

  for (let i = 0; i < string.length; i++) {
    // remove the current letter from the string (this will be prepended to the results later)
    let subSequence = string.slice(0, i) + string.slice(i + 1, string.length);
    // recursively generate the permutations for each subsequence
    let subPerms = permutations(subSequence);
    // for each permutation, add it to the list and prepend the current letter to it
    subPerms.forEach(perm => perms.push(string[i] + perm));
  }

  return perms;
}

console.log('permutations: ', permutations('ab'));
console.log('permutations: ', permutations('abc'));
