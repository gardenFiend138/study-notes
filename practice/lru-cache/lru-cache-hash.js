const LinkedList = require('../linked-list/doubly-linked/linked-list.js');

/*
  Keep track of if an item exists in the cache or not in a pojo, that way we can
  tell in O(1) time if it already exists in the cache.
  Each item also needs to keep track of its position in the cache; each time a new
  item is added, we have to adjust the position of (possibly) every one

  Hash: O(1) lookup time if the item exists in the cache; each item 'key' will
    hold a reference to the node object in the LL; still missing the main piece
    of this--how to delete in constant time (when the item already exists in the cache?)
    The lookup is now O(1), but we still need to get the deletion to O(1)
  Linked List: O(1) insertion & deletion; Doubly linked list allows us to remove the node
    if it already exists before adding it to the front of the cache

  { } -> { } -> { } -> { } 
 */
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.cache = new LinkedList();
    this.dictionary = {};
  }

  size() {
    return this.cache.length;
  }

  add(item) {
    let node = this.dictionary[item];

    if (node) {
      // node.prev.next = node.next;
      // node.next.prev = node.prev;
      // this.cache.length--;
      this.cache.removeNode(node);
    }
    
    
    this.cache.add(item);         // put the itme in the LL
    node = this.cache.tail;
    this.dictionary[item] = node; // set the item in the dictionary with the node
    this._ensureSize();           // ensure the cache is still within the max size (this allows it
                                  // to grow 1 element larger than the max--is this ok, or do we
			          // need to do it before we add the item? (check if it exists first)
				  // if yes, then move call to ensureSize above add, and check ===
//    this.show();
  }

  show() {
    let node = this.cache.tail;
    while (node) {
      console.log( node.value);
      node = node.prev;
    }

    return this.cache;
  }

  clear() {
    this.cache = {};
  }

  _ensureSize() {
    if (this.cache.length > this.maxSize) {
      const oldHead = this.cache.head;
      delete this.dictionary[oldHead.value];
      this.cache.removeHead();
    }
  }
}

const cache = new LRUCache(5);
cache.add(0);
cache.add(1);
cache.add(2);
cache.add(3);
cache.add(4);
console.log('cache', cache.show());
cache.add(5);
cache.add(6);
cache.add(4);
console.log('cache 4,6,5,3,2', cache.show());
console.log('length', cache.size());
console.log('dictionary', cache.dictionary);
