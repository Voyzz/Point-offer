// var rootRes = require("./creat_tree.js");

function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length<=0) return;
    return test(sequence,0,sequence.length-1)
}
function test(sequence,start,end){
    if(start>=end) return true;
    var i=end-1;
    while(i>=start && sequence[i]>sequence[end]){
        i--;
    }
    for(var j=i;j>=start;j--){
        if(sequence[j]>sequence[end]){
            return false;
        }
    }
    return test(sequence,start,i)&&test(sequence,i+1,end-1)
}
