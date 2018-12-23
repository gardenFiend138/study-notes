function isPalindrome(number) {
  const numberString = number + '';
  let i = 0;
  let j = numberString.length - 1;

  while (i < j) {
    if (numberString[i] !== numberString[j]) {
      return false;
    }
   
    i++;
    j--;
  }

  return true;
}

console.log(isPalindrome(1221));
console.log(isPalindrome(12321));
console.log(isPalindrome(1241));
