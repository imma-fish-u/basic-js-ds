const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {

  constructor() {
    this.rooty = null;
  }

  root() {
    return this.rooty;
  }

  add(data) {
    var newNode = new Node(data);

    if (this.rooty === null) this.rooty = newNode;
    else this.addNode(this.rooty, newNode);
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.addNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.addNode(node.right, newNode);
    }
  }

  has(data) {
    if (!this.find(data)) return false;
    else return true;
  }

  find(data) {
    return this.findNode(this.rooty, data);
  }
  findNode(node, data) {
    if (!node) return null;
    else if (data < node.data) return this.findNode(node.left, data);
    else if (data > node.data) return this.findNode(node.right, data);
    else return node; 
  }

  remove(data) {
    this.node = this.removeNode(this.rooty, data); //reinitialized the root
  }

  removeNode(node, data) {
    if (!node) return null;
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if ((!node.left) && (!node.right)) {
        node = null;
        return node;
      } 
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      } else {
        let minElFromRightSubtree = this.findMin(node.right);
        node.data = minElFromRightSubtree.data;

        node.right = this.removeNode(node.right, minElFromRightSubtree.data);
        return node;
      }
    }
  }

  min() {
    return this.findMin(this.rooty).data;
  }
  findMin(node) {
    if (!node.left) return node;
    else return this.findMin(node.left);
  }

  max() {
    return this.findMax(this.rooty).data;
  }
  findMax(node) {
    if (!node.right) return node;
    else return this.findMax(node.right);
  }

}