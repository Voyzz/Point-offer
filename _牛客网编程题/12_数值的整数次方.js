// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方

function Power(base, exponent)
{
    // write code here
    var exp = Math.abs(exponent);
    var res = 1;
    for(var i = 0;i<exp;i++){
        res *= base;
    }
    if(exponent < 0){
        return 1/res;
    }else if(exponent === 0){
        return 1;
    }else{
        return res;
    }
}