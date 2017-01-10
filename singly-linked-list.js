//Singly linked list

let Node = function(data){
  let self = {
    data: data,
    next: null,
  };

  return self;
};

var List = function(){
  let self = {
    _length: 0,
    head: null,
    add: function(data){
      let node = new Node(data);
      let currentNode = self.head;

      if (!currentNode){
        self.head = node;
        self._length++;

        return node;
      }

      while (currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      self._length++;

      return node;
    },

    findAtPosition: function(position){
      self.checkValidPosition(position);

      let count = 0;
      let currentNode = self.head;

      while ( count < position ){
        currentNode = currentNode.next;
        count++;
      }

      return currentNode;
    },

    remove: function(position){
      self.checkValidPosition(position);

      //if its the first position
      if (position === 0){
        let deletedNode = self.head;
        self.head = self.head.next;
        self._length--;

        return deletedNode;
      }

      let beforeNode = self.findAtPosition(position - 1);
      let deletedNode = beforeNode.next;

      if (deletedNode == null){
        beforeNode.next = null;
      } else {
        beforeNode.next = deletedNode.next;
      }

      self._length--;
      return deletedNode;
    },

    checkValidPosition: function(position){
      if (position > self._length || self._length === 0 || position < 0){
        throw new Error("Fuck you!");
      }
    }
  };

  return self;
};

let newList = new List();
newList.add("fuck!");
newList.add("snakes!");
newList.add("hi");
newList.add("sup");

console.log(newList.head);
console.log(newList._length);
newList.remove(2);
console.log(newList.head);
console.log(newList._length);
