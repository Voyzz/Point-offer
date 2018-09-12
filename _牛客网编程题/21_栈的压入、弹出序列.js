function IsPopOrder(pushV, popV)
{
    // write code here
    if (pushV.length === 0 || popV.length === 0) {return false}

    var tmpStack = [];
    var pointer = 0;
    var j = -1;

    for (var i = 0; i < pushV.length; i++) {
        tmpStack.push(pushV[i]);
        j++
        while(popV[pointer] == tmpStack[j] && j>=0){
            tmpStack.pop();
            pointer++;
            j--;
        }
    }
    return (tmpStack.length === 0);
}

var res = IsPopOrder([1,2,3,4,5],[4,5,3,1,2]);
console.log(res);