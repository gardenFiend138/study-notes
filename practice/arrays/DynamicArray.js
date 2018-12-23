const StaticArray = require('./StaticArray.js');

class DynamicArray {
  constructor(length) {
    this.length = length;
    this.array = new StaticArray(length);
  }
}
