// Binary search tree
//

let TreeNode = {
  val: null,
  left: null,
  right: null,
};

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  add(val) {
    let newNode = Object.create(TreeNode);
    newNode.val = val;

    if (this._root == null){
      this._root = newNode;
      return newNode;
    }

    (function walkNodes(reference) {
      if (newNode.val >= reference.val) {
        if (reference.right){
          walkNodes(reference.right);
        } else {
          reference.right = newNode;
          return newNode;
        }
      } else {
        if (reference.left){
          walkNodes(reference.left);
        } else {
          reference.left = newNode;
          return newNode;
        }
      }
    })(this._root);
  }

  find(val){
    let found = null;

    (function findNode(reference) {
      if (val === reference.val) {
        found = reference;
        return;
      }

      if (val > reference.val) {
        findNode(reference.right);
      } else {
        findNode(reference.left);
      }
    })(this._root);

    return found;
  }
}

let newTree = new BinarySearchTree();
newTree.add(5);
newTree.add(10);
newTree.add(1);
newTree.add(2);
let foundNode = newTree.find(2);
console.log(newTree);
console.log(foundNode);
