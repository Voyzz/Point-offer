// var count = parseInt(readline());

// function getZeroNum(count) {
// 	var res = 1;
// 	for (var i = 1; i < count+1; i++) {
// 		for (var j = 1; j < i+1; j++) {
// 			res *= j;
// 		}
// 	}
// 	var newRes = new Number(res);
// 	var resArr = newRes.toString().split("").map(Number);
// 	var count = 0;
// 	for (var j = 0; j < resArr.length; j++) {
// 		if (resArr.pop() === 0) count += 1;
// 		else break;
// 	}
// 	return count;
// }

// var x = getZeroNum(count);
// console.log(x);

var num = new Number("3.4556645445e+50");
console.log(num);