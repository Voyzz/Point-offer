let n  = parseInt(readline(),10);
  
function output(n){
    var arr = [1,5,10,20,50,100];
    var len = arr.length;
  
    var dp = new Array(n+1);
    for(var i = 0; i < dp.length; i++){
        dp[i] = 0;
    }
    dp[0] = 1;
  
    for(var i = 0; i < len; i++){
        for(var j = arr[i]; j <= n; j++){
            dp[j] = dp[j] + dp[j - arr[i]];
        }
    }
  
    return dp[n];
}
console.log(output(n));