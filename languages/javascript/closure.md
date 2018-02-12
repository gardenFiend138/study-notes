# JavaScript Closure 

[Resource: Search 'closure' in article](https://medium.freecodecamp.org/the-definitive-javascript-handbook-for-a-developer-interview-44ffc6aeb54e)

## Closure 

> 'A closure is the combination of a function and the lexical > environment from which it was declared. Closure allows a 
> function to access variables from an enclosing 
> scope — environment — even after it leaves the scope in  
> which >it was declared.'

```JavaScript 
function sayHi(name){
  var message = `Hi ${name}!`;
  function greeting() {
    console.log(message)
  }
  return greeting
}
var sayHiToJon = sayHi('Jon');
console.log(sayHiToJon)     // ƒ() { console.log(message) }
console.log(sayHiToJon())   // 'Hi Jon!'
```

A related topic is 'Immediate Invoked Function Exression (IIFE)'--look more into this. See the above referenced article, and search for 'IIFE'.