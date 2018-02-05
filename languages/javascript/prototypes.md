# JavaScript Prototype

[JavaScript Info Reference](https://javascript.info/object-oriented-programming)

## Prototypal Inheritance

* In JavaScript, all objects have a hidden `[[Prototype]]` property that’s either another object or `null`.
* We can use `obj.__proto__` to access it (there are other ways too, to be covered soon).
* The object referenced by `[[Prototype]]` is called a “prototype”.
* If we want to read a property of `obj` or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype. Write/delete operations work directly on the object, they don’t use the prototype (unless the property is actually a setter).
* If we call `obj.method()`, and the `method` is taken from the prototype, `this` still references `obj`. So methods always work with the current object even if they are inherited.

## F.prototype 

* The `F.prototype` property is not the same as `[[Prototype]]`. The only thing `F.prototype` does: it sets `[[Prototype]]` of new objects when `new F()` is called.
* The value of `F.prototype` should be either an object or null: other values won’t work.
* The `"prototype"` property only has such a special effect when is set to a constructor function, and invoked with `new`.