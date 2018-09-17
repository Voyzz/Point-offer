/*
	var rootRes = require("./creat_tree.js");
	rootRes就是根节点
*/

/*---------构造树----------------*/
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

var root1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
// var node6 = new TreeNode(6);
// var node7 = new TreeNode(7);

root1.left = node2;
root1.right = node3;
node2.left = node4;
node2.right = node5;

var rootRes = root1;

/*---------构造树----------------*/

module.exports = rootRes;
