// 输入两个链表，找出它们的第一个公共结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    var arr1 = [],
        arr2 = [],
        p1 = pHead1,
        p2 = pHead2,
        index = -1;
    while(p1){
        arr1.push(p1.val);
        p1 = p1.next;
    }
    while(p2){
        arr2.push(p2.val);
        p2 = p2.next;
    }
     
    for(var i = 0 ; i < arr1.length; i ++){
        var arr = arr1.slice(i);
        var str1 = arr.join("-");
        var str2 = arr2.join("-");
         
        if(str2.indexOf(str1) > -1){
            index = i;
            break;
        }
    }
     
    if(index < 0){return null;}
    var p = pHead1;
    while(index > 0){
        p = p.next;
        index --;
    }
    return p;
}