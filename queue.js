// Queue is a linear data structure like a Stack that only deletes the oldest
// added data

var Queue = function() {
  var self = {
    oldestIndex: 1,
    newestIndex: 1,
    storage: {},
    size: function(){
      return self.newestIndex - self.oldestIndex;
    },
    enqueue: function(data){
      self.storage[self.newestIndex] = data;
      self.newestIndex++;
    },
    dequeue: function(){
      if (self.size() > 0){
        console.log(self.storage[self.oldestIndex]);
        delete self.storage[self.oldestIndex];
        ++self.oldestIndex;
      } else {
        return;
      }
    },
    inspect: function(){
      return {
        oldestIndex: self.oldestIndex,
        newestIndex: self.newestIndex,
        storage: self.storage
      };
    }
  };

  return self;
};

// Queue.prototype.size = function(){
//   return this.newestIndex - this.oldestIndex;
// };
//
// Queue.prototype.enqueue = function(data){
//   this.storage[this.newestIndex] = data;
//   this.newestIndex++;
// };
//
// Queue.prototype.dequeue = function(){
//   if (this.size() > 0){
//     console.log(this.storage[this.oldestIndex]);
//     delete this.storage[this.oldestIndex];
//     ++this.oldestIndex;
//   } else {
//     return;
//   }
// };

var something = Object.create(new Queue());
something.enqueue(4);
something.enqueue(5);
something.dequeue();
console.log(something.inspect());
console.log(something.size());


something.dequeue();
console.log(something.size());

something.dequeue();
console.log(something);
