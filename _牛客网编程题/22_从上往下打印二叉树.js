function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function BST(){
    this.root = null;
    this.insert = insert;
}

function PrintFromTopToBottom(root)
{
    // write code here
    if (!root) {
    	return false;
    }

    var nodeArr = [root];
    var resArr = [];
    while(nodeArr && nodeArr.length > 0) {
    	var tmp = nodeArr.shift();
    	resArr.push(tmp.val);
    	if (tmp.left != null) nodeArr.push(tmp.left);
    	if (tmp.right != null) nodeArr.push(tmp.right);
    }
    return resArr;
}




var rootRes = require("./creat_tree.js");
var res = PrintFromTopToBottom(rootRes);
console.log(res);
