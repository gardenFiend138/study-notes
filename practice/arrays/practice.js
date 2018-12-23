const StaticArray = require('./StaticArray.js');

const test = new StaticArray(5);
test.push(1);
test.push(2);
console.log('[1,2]', test);
test.pop();
console.log('[1]', test);
test.push(3);
console.log('[1,3]', test);
test.shift();
console.log('[3]', test);
test.unshift(2);
console.log('[2,3]', test);
test.unshift(4);
console.log('[4,2,3]', test);
test.push(1);
test.push(0);
console.log('[4,3,2,1,0]', test);

