/*
	var rootRes = require("./creat_tree.js");
	rootRes就是根节点
*/

// 操作区
var bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.remove(7);




var rootRes = bst.root;
module.exports = rootRes;

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} 

function BST(){
  this.root = null;
  this.insert = insert;
  this.find = find;
    this.remove = remove;
    this.removeNode = removeNode; 
}

function insert(data){
  var node = new TreeNode(data,null,null);
  if(this.root == null)this.root = node;
  else{
      var current = this.root;
      while(true){
          if(current.data > data){
              if(current.left === null){
                  current.left = node;
                  break;
              }
              current = current.left;
          }else{
              if(current.right === null){
                  current.right = node;
                  break;
              }
              current = current.right;
          }
      }
  }
}


function find(data){
  var current = this.root;
  while(true){
      if(data === current.val)return current;
      current = data < current.val ? current.left : current.right;
      if(current === null) return null;
  }
}


function remove(val){
  this.root = removeNode(this.root,val);
}
function removeNode(node,val){
  if(node === null){
      return null;
  }
  if(val === node.val){
      if(node.left === null && node.right === null){
          return null;
      }
      if(node.left === null){
          return node.right;
      }
      if(node.right === null){
          return node.left;
      }
  }else if(val < node.val){
      node.left = removeNode(node.left,val);
      return node;
  }else{
      node.right = removeNode(node.right,val);
      return node;
  }
}
