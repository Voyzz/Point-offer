// 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    var pre = ListNode(null);
    var next = ListNode(null);
    
    while(pHead != null) {
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
    
}