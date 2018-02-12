# React Lifecycle Methods 

[Resourcer Article](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

[Additional Resource on Benchmarking React Components w/ shouldComponentUpdate](https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c)

[React Docs](https://reactjs.org/docs/react-component.html)

[Related: State and Lifecycle (React Docs)](https://reactjs.org/docs/state-and-lifecycle.html)

__High Level Overview:__
1. Mount 
2. Update 
3. Unmount 

![React Diagram](https://cdn-images-1.medium.com/max/1600/0*VoYsN6eq7I_wjVV5.png)

![React Diagram](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png) 

* First Render 
  1. getDefaultProps
  2. getInitialState 
  3. componentWillMount 
    * no component rendered, so nothing you can do with the DOM
    * nothing's changed since the constructor was called, and this is where you should set up default configuration
    * 99% of components should not use this
  4. render 
  5. componentDidMount
    * load in data (connect to API, make AJAX calls)
    * can call setState
    
* Update 
  1. componentWillReceiveProps(nextProps)
    * have access to both nextProps and this.props 
    * check which props will change
      * sometimes this is called just for React to check in, even if nothing has changed 
      * if the props have changed in a significant way, act on it 
    * NOT called on initial render 
    * can call setState 
  2. shouldComponentUpdate(nextProps, nextState)
    * asks for permission before re-rendering; returns a boolean value; 
    * great place to improve performance, since it can save re-renders 
    * component will not update normally, so must be used deliberately and cautiously
  3. componentWillUpdate
    * functionally the same as componentWillReceiveProps, but can't call setState
  4. componentDidUpdate 
    * can do the same stuff as in componentDidMount
    * can call setState, commonly used to update the DOM in response to prop or state changes 
    
* Destroying 
  1. componentWillUnmount 
    * cancel outgoing network requests, remove event listeners 
    * cannot call setState 
    
    
      
    
  
