/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    var flag = false;
    if (pRoot1 != null&&pRoot2!=null) {
	    if (pRoot1.val === pRoot2.val) {
	    	flag = doesTree1HasTree2(pRoot1,pRoot2);
	    }
	    if (!flag) {
	    	flag = HasSubtree(pRoot1.left,pRoot2);
	    }
	    if (!flag) {
	    	flag = HasSubtree(pRoot1.right,pRoot2);
	    }
    }
    return flag;
}


function doesTree1HasTree2 (Tree1,Tree2){
	if (Tree2 === null) return true;
	if (Tree1 === null) return false;
	if (Tree1.val != Tree2.val) return false;
	return doesTree1HasTree2(Tree1.left,Tree2.left)&&doesTree1HasTree2(Tree1.right,Tree2.right);
}
