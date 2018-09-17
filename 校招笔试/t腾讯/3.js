var aimStr = readline();
var testStr = readline();

function getRes(aimStr,testStr){
	var maxCount = Mat.floor(aimStrArr.length/testStr.length);
	var reg = /^testStr{1,maxCount}|testStr{1,maxCount}$/;
	var resArr = aimStr.match(reg);
	var res = [];
	resArr.forEach(function(val){
		res.push(val.lenght);
	})
	var x = res.sort((a,b)=>b-a)[0];
	return x*x
}

print(getRes(aimStr,testStr));

