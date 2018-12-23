
const reverseWords = (string) => {

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word = string[i] + word;
      if (i === string.length - 1) result += word;
    } else {
      result += word;
      result += string[i];
      word = '';
    }
  }

  return result;
}

const reverseInPlace = (string) => {
  
}

// finish doing it in place...but wait, can't do it in place--strings
// are immutable in js...still need to make a copy
// could still get it working with pointers using an array though
// do using a stack (it reverses for you, by nature of the stack!)
function reverse(string, start = 0, end = string.length - 1) {
  let ptr1 = start;
  let ptr2 = end;
  let temp;

  while (ptr2 > ptr1) {
    tmp = string[ptr1];
    string[ptr1] = string[ptr2];
    string[ptr2] = tmp;
    ptr1++;
    ptr2--;
console.log('string ', string);
  }

  return string;    
}

const reverseWithStack = (string) => {
  const stack = []; // push/ pop only
  let result = '';

  // [...string].forEach(char => stack.push(char));
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  while (stack.length) result += stack.pop();
  return result;
}

const reverseWordOnly = (string) => {
  const stack = [];
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      stack.push(string[i]);
      if (i === string.length - 1) {
        while (stack.length) result += stack.pop();
      }
    } else {
      while (stack.length) result += stack.pop(); 
      result += string[i];
    }
  }
  
  return result;
}

const string = 'reverse word   only with   stack  . '
const result = reverseWordOnly(string);
console.log('reverseWithStack: ', reverseWithStack('reverse with  stack'));
console.log('reverseWordOnly: ', result, 'preserve spaces? :', string.length === result.length);
console.log('reverseWordOnly: ', reverseWordOnly('reverse word  only with  stack  . '));
