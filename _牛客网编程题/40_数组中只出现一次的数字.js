// 一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字

function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var obj = {};
    var res = [];
    array.forEach(function(val){
    	if (!obj[val]) {
    		obj[val] = 1;
    	}
    	else{
    		obj[val] += 1;
    	}
    })
    for(i in obj){
    	if (obj[i] === 1 ) {
    		res.push(i);
    	}
    }
    return res;
}