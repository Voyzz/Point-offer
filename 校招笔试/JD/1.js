var lineAdd=0;	//输入行计数
var inputArr = ['6','3 2 9 10 4 5']; //输入
	//模拟输入
var read_line = function(){ 
	var line = inputArr[lineAdd];
	lineAdd++;
	return line;
}
 	//模拟输出
function print(x){
	console.log(x);
}


var count = parseInt(read_line());
var arr = read_line().split(" ").map(Number);
arr.sort(function(a,b){
	return a - b;
})
console.log(arr);

// var getMid = function(arr,count){
// 	var flag = count%2;
// 	if (flag === 1) {
// 		var idx1 = (count-1)/2;
// 		return arr[idx1]; 
// 	}else{
// 		var idx2 = count/2;
// 		var tmp = (arr[idx2-1]+arr[idx2])/2;
// 		return tmp;
// 	}
// }

// var res = getMid(arr,count);
// print(res);