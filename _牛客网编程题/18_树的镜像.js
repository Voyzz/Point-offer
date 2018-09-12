 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function Mirror(root)
{
    // write code here
    if (root != null) {
    	[root.left,root.right] = [root.right,root.left];
    	if (root.left != null) Mirror(root.left);
    	if (root.right != null) Mirror(root.right);
    }
    return root;
}

var root = new TreeNode(8);
root.left = new TreeNode(6);
root.right = new TreeNode(10);

var res = Mirror(root);
console.log(res.left.val);