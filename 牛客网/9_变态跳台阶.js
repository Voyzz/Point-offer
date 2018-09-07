// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloorII(number)
{
    // write code here
    var totalStep = 0;
    if (number === 0) {
        return 1;
    }else if (number === 1) {
        return 1;
    }else if(number === 2){
        return 2;
    }else{
        for(var i = 1;i<number+1;i++){
            totalStep += jumpFloorII(number-i);
        }
        return totalStep;
    }
}