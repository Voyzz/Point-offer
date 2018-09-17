var len = parseInt(readline());
var aimArr = readline().split(" ").map(Number);

function getNum(len,aimArr) {
	var tmpArr = [];
	var count = 0;
	for (var i = 0; i < len; i++) {
		if(aimArr[i] === 1){
			tmpArr.push(i);
		}
	}
	var res = 1;
	for (var i = 0; i < tmpArr.length-1; i++) {
		res *= (tmpArr[i+1]-tmpArr[i]);
	}
	return res;
}

print(getNum(len,aimArr));

// console.log(getNum(4,[1,0,1,1]));
