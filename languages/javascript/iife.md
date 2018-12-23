# Immediate Invoked Function Expression (IIFE)

[Article Explaining IIFE (search iife)](https://medium.freecodecamp.org/the-definitive-javascript-handbook-for-a-developer-interview-44ffc6aeb54e)

[Video Explanation of IIFE](https://www.youtube.com/watch?v=I5EntfMeIIQ)

IIFE == 'iffy' === funciton that's called immediately after you define it. Usually used when you want to create a new variable scope.

>  The (surrounding parenthesis) prevents from treating it >  as a function declaration.
>
>  The final parenthesis() are executing the function
>  expression.
>
>  On IIFE you are calling the function exactly when you
>  are defining it.

```Javascript
var result = [];
for (var i=0; i < 5; i++) {
  result.push( function() { return i } );
}
console.log( result[1]() ); // 5
console.log( result[3]() ); // 5
result = [];
for (var i=0; i < 5; i++) {
  (function () {
    var j = i; // copy current value of i
    result.push( function() { return j } );
  })();
}
console.log( result[1]() ); // 1
console.log( result[3]() ); // 3
```
<<<<<<< HEAD

An IIFE is just an anonymous function which is immediately invoked 
=======
>>>>>>> cc57ea4bffafc539b53b9ebde88c1cbf47487f54
