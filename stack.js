//Stack is a linear data structure that can add data and remove only the last
//added data.
var Stack = function(){
  this.currentSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(data){
  var index = this.currentSize++;
  this.storage[index] = data;
};

Stack.prototype.pop = function(){
  if (this.currentSize > 0){
    --this.currentSize;
    var recentData = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    console.log(recentData);
    return true;
  } else {
    return;
  }
};
