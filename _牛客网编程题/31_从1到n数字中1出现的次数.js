function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var count = 0
    for (var i = 1; i < n+1; i++) {
    	var numArr = i.toString().split("");
    	numArr.forEach(function(val){
    		if (val === "1") {
    			count++;
    		}
    	})
    }
    return count;
}

console.log(NumberOf1Between1AndN_Solution(13));