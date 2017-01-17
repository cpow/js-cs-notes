//inverting a binary tree... because why not
//

function invert(currentRoot){
  if (currentRoot == null){
    return;
  }

  this.invert(currentRoot.right);
  this.invert(currentRoot.left);

  if (currentRoot.left && currentRoot.right){
    let temp = currentRoot.left;
    currentRoot.left = currentRoot.right;
    currentRoot.right = temp;
  }

  return currentRoot;
}

let tree = {
  val: 1,
  right: {
    val: 3,
    right: {
      val: 7
    },
    left: {
      val: 6,
    }
  },
  left: {
    val: 2,
    right: {
      val: 5,
    },
    left: {
      val: 4,
    }
  }
};

// console.log(tree);
console.log(invert(tree));
