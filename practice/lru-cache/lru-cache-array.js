class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.cache = [];
  }

  // O(1)
  size() {
    return this.cache.length;
  }

  // O(1)
  show() {
    return this.cache;
  }

  // O(n)
  add(item) {
    const index = this._getIndex(item);

    if (index !== null) this._remove(index);

    this.cache.unshift(item);
    this._ensureSize();

    return this.cache;
  }

  // O(1)
  clear() {
    this.cache = [];
    return this.cache;
  }

  // O(n)
  _getIndex(item) {
    // this.cache.indexOf(item);
    for (let i = 0; i < this.size(); i++) {
      if (this.cache[i] === item) {
        return i;
      }
    }

    return null;
  }

  _remove(index) {
    this.cache[index] = null;
    const newCache = [];

    for (let i = 0; i < this.size(); i++) {
      if (this.cache[i] !== null) newCache.push(this.cache[i]);
    }

    this.cache = newCache;
  }

  _ensureSize() {
    if (this.size() > this.maxSize) this.cache.pop();
  }
}

const cache = new LRUCache(5);
cache.add(1);
cache.add(2);
cache.add(3);
cache.add(4);
cache.add(5);
cache.add(6);
cache.add(2);
cache.add(7);
cache.add(5);
cache.add(5);

console.log('cache', cache);
console.log('cache.show', cache.show());
console.log('cache.size', cache.size());
console.log('cache.clear', cache.clear());
