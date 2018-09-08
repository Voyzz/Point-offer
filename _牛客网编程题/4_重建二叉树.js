// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
     var tree = getTree(pre, vin);//递归调用左子树
     return tree;
}

function getTree(pre, vin) {
    if(!pre || pre.length === 0) {
            return pre;
    }
    else if(pre.length === 1) {
            var lastTree = new TreeNode(pre[0]);
            return lastTree;
    }
    else {
            var rootValue = pre[0];//根节点值
            var rootIndex = vin.indexOf(rootValue);//根节点在中序遍历中的位置
            var tree = new TreeNode(rootValue);
            var leftChildVin = vin.slice(0, rootIndex);//左子树的中序遍历
            var leftChildPre = pre.slice(1, leftChildVin.length + 1);//左子树的先序遍历
            var leftTree = getTree(leftChildPre, leftChildVin);//递归左子树
            if(leftTree.val) {
                tree.left = leftTree;
            }
 
            var rightChildPre = pre.slice(rootIndex + 1);//右子树的先序遍历
            var rightChildVin = vin.slice(rootIndex + 1);//右子树的中序遍历
            var rightTree = getTree(rightChildPre, rightChildVin);//递归右子树
            if(rightTree.val) {
                tree.right = rightTree;   
            }
            return tree;
        }
}