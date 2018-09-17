// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

function FindNumbersWithSum(array, sum)
{
    // write code here
    var obj = {};
    var multiArr = [];
    for (var i = 0; i < array.length; i++) {
    	for (var j = i+1; j < array.length; j++) {
    		if (array[i]+array[j] === sum) {
    			multiArr.push(array[i]*array[j])
    			obj[`${array[i]},${array[j]}`] = array[i]*array[j];
    			break;
    		}
    	}
    }
    var multiRes = multiArr.sort((a,b)=>a-b)[0];
    var res = [];
   	for(i in obj){
   		if (obj[i] === multiRes) {
   			res = i.split(",").map(Number);
   		}
   	}
   	return res;
}
console.log(FindNumbersWithSum([1,3,4,5,6,7,8,9],12));