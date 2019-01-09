function allSubsequences(string) {
  const subSeqs = new Set();
  
  for (let i = 0; i < string.length; i++) {
    for (let j = string.length; j > i; j--) {
      let subSeq = string.substring(i, j);
      subSeqs.add(subSeq);

      for (let k = 1; k < subSeq.length - 1; k++) {
        subSeq = subSeq.slice(0, k) + subSeq.slice(k + 1, subSeq.length);
        subSeqs.add(subSeq);
      }
    }
  }

  return subSeqs.keys();
}

console.log('subSequences of \'abc\'', allSubsequences('abc'));
