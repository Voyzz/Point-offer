// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var res = [];
    var pNode = head;
    while(pNode !== null) {
        res.unshift(pNode.val);
        pNode = pNode.next;
    }
    return res;
}