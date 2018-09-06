// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39
function Fibonacci(n)
{
    // write code here
    var fList = [0,1];
    if (n<2) {
        return fList[n];
    }else{
        for(var i=2;i<n+1;i++) {
            fList[i] = fList[i-1]+fList[i-2];
        }
    }
    return fList[n];
}