class StaticArray {
  constructor(length) {
    this.length = length;
    this.array = [];
  }

  push(data) {
    if (this.length > this.array.length) {
      this.array.push(data);
    } else {
      console.log('this.array', this.array);
      console.log('this.length', this.length);
      throw 'this is awkward...your array is full...';
    }
  }

  pop() {
    this.array.pop();
  }

  shift() {
    let newArray = [];
    const shifted = this.array[0];

    for (let i = 1; i < this.array.length; i++) {
      newArray.push(this.array[i]);
    }
    
    this.array = newArray;
  }

  unshift(data) {
    let newArray = [];

    if (this.length > this.array.length) {
      newArray[0] = data;
      for (let i = 0; i < this.array.length; i++) {
        newArray[i + 1] = this.array[i];
      }
      this.array = newArray;
    } else {
      throw 'uhh I\'m all full, come back later';
    }
  }

}

module.exports = StaticArray;
