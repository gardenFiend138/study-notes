function hasCycle(arr) {
  const set = new Set();
  let nextIdx = 0;
  let passes = 0;

  while (passes < arr.length) {
    set.add(nextIdx);
    nextIdx += arr[nextIdx];

    if (nextIdx > arr.length) {
      nextIdx %= arr.length;
    }

    passes++;
  }

  return set.size === arr.length;
}
