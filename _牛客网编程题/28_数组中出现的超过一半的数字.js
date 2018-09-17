function MoreThanHalfNum_Solution(numbers)
{
    // write code here   
    var obj = {};
    var len = Math.floor(numbers.length/2);
    numbers.forEach(function(val){
    	if (!obj[val]) {
    		obj[val] = 1;
    	}else{
    		obj[val] += 1;
    	}
    })
    for(i in obj){
    	if (obj[i]>len) {
    		return i;
    	}
    }
    return 0;
}



console.log(MoreThanHalfNum_Solution([1,1,0,6,2]));