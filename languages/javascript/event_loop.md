# The Event Loop in JavaScript 

[Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=)

[MDN Docs: Concurrency Model and the Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

### Key Terms 

__Heap__: 'objects are allocated in here, which is just a name to denote a large, mostly unstructured, region of memory''
__Stack__: call stack; one thread === one call stack === one thing at a time; records where in the program we are; 
  * main is always first on the stack; 
__blocking__: a function that is blocking the stack (too slow for some reason); need to avoid this in single threaded languages
__message/event/task/callback queue__: used by JS runtime, which is a list of messages to be processed; each message has an associated funciton which gets called in order to handle the message; 

How do we solve the issue of blocking functions? __Asynchronous callbacks!__

And the event loop is how JS handles these async callbacks.

### Concurrency and the Event Loop 

When we have a program that is running, each function is put on the stack as it's called; if we use, for example, setTimeout(cb, duration), which is a web API, the browser starts that timer, and once the timer is finished, it puts the callback into the task queue; here is where the event loop comes into play. The event loop looks at the call stack and looks at the event/ task queue; if the stack is empty, it takes the first item in the task queue, pushes it on the stack, and it is run.

setTimeoue's duration argument is just the MINIMUM time until the function will be called, since we still have to wait for the call stack to be empty first; this is why duartion = 0 will still not fire immediately (it will wait for the stack to be empty);

[Website for visualizing programs at runtime](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

Defining callbacks: 
  * a function that is called by another function 
  * a function that runs asychronously 
  
*keep in mind that functions that accept a callback as an argument are not necessarily asynchronous; that is, they are not necessarily added to the task queue*

### What does this mean for rendering?
The browser wants to repaint the scren every 16ms (60 frames per second); but, it can't while the stack has functions in it; the render queue is given priority over the callback queue.

This can relate to DOM events as well; event listener for scroll will queue TONS of events, so we don't want scroll event to be tied to slow/ sluggish.

