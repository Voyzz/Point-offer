// 输入一个链表，输出该链表中倒数第k个结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if(head === null || k <= 0){
        return null;
    }
    var Node1 = head;
    var Node2 = head;
    for(var i = 0;i<k-1;i++){
        if(Node1.next){
            Node1 = Node1.next
        }else{
            return 
        }
    }
    while(Node1.next != null) {
        Node1 = Node1.next;
        Node2 = Node2.next;
    }
    return Node2;
}