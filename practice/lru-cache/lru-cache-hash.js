/*
  Keep track of if an item exists in the cache or not in a pojo, that way we can
  tell in O(1) time if it already exists in the cache.
  Each item also needs to keep track of its position in the cache; each time a new
  item is added, we have to adjust the position of (possibly) every one
 */
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.cache = {};
    this.length = 0;
  }

  size() {
    return this.length;
  }

  add(item) {

  }

  show() {
  
  }

  clear() {
    this.cache = {};
  }
}
