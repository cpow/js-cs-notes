class Stack {
  constructor(){
    this.currentSize = 0;
    this.storage = {};
  }

  push(data){
    let index = ++this.currentSize;
    this.storage[index] = data;
  }

  pop(){
    let retrieved = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    --this.currentSize;
    return retrieved;
  }
}


let stack = new Stack();
stack.push("fuck");
console.log(stack);

let something = stack.pop();
console.log(something);
console.log(stack);


class Queue {
  constructor(){
    this.minimumIndex = 0;
    this.maximumIndex = null;
    this.storage = {};
  }

  enqueue(data){
    if (this.maximumIndex === null){
      this.maximumIndex = 0;
      this.storage[this.maximumIndex] = data;
    } else {
      ++this.maximumIndex;
      this.storage[this.maximumIndex] = data;
    }
  }

  dequeue(){
    this.checkEmpty();
    // now you know its not empty. moving on
    let retrieved = this.storage[this.minimumIndex];
    delete this.storage[this.minimumIndex];
    ++this.minimumIndex;
    return retrieved;
  }

  checkEmpty(){
    if (this.minimumIndex === this.maximumIndex){
      throw new Error("empty");
    }
  }
}

let queue = new Queue();
queue.enqueue("hiyo");
queue.enqueue("something");
queue.enqueue("snakes");
console.log(queue);

console.log(queue.dequeue());

console.log(queue);
