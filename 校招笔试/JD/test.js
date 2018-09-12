var lineAdd=0;	//输入行计数
var inputArr = ['6 5','1 2 4 5 6 7','3 4 8 9 10','1 2','1','1 2']; //输入
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


var getInfo = function(x) {
	var num = x.split(" ");
	var num1 = num[0],num2 = num[1];
	var set1 = [],set2=[];
	for (var i = 0; i < num1; i++) {
		set1.push(readInt());
	}
	for (var i = 0; i < num2; i++) {
		set2.push(readInt());
	}
	var res = unionSet(set1,set2);
	print(res.join(" "));
}

var unionSet = function(setA,setB){
	var newArr = setA.concat(setB);
	var newSet = new Set(newArr);
	newSet = [...newSet];
	newSet.sort(function(a,b){
		return a - b;
	})
	return newSet;
}



while(x = read_line()){
	if (x != null) {
		getInfo(x);
	}else{
		break;
	}	
}



