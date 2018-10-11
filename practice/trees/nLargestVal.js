// in a binary search tree, find the Nth largest value
// below works for a balanced tree
function secondLargestVal(tree) {
  const secondLargestVals = []; // max length 2
  let nextNode = tree.root;

  secondLargestVals.unshift(nextNode); // [5]

  while (typeof nextNode !== null) {
    // rethink this in here, because now this breaks the balanced tree case
    if (typeof nextNode.right === null && typeof nextNode.left !== null) {
      secondLargestVals.pop(); // [7]
      nlargestVals.unshift(nextNode.left); // [6, 7]
      continue;
      nextNode = nextNode.right;
    // } else if (typeof nextNode.left === null) {
    //   nlargestVal.pop(); // []
    //   secondLargestVals.unshift(nextNode); //
    //   nextNode = nextNode.left;
    //   continue;
    // }



    secondLargestVals.unshift(nextNode.right);  // [7, 5]
    if (secondLargestVals.length > n) secondLargestVals.pop(); //
    nextNode = nextNode.right;
  }

  // return nlargestVals[1].value;
  // with how you're doing the first check above, the nth largest can be in any position
  // but the case below just solves for if n === 2
  // start with 2, then generalize to n
  return secondLargestVals[0].value < secondLargestVals[1].value
    ? secondLargestVals[0].value
    : secondLargestVals[1].value;
}

/*
        5
     /     \
    3       7
  /  \    /  \
 4   1   6

*/
