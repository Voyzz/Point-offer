var count = parseInt(readline());
for (var i = 0; i < count; i++) {
	print(getRes(readline()))
}

function getRes(numStr) {
	var numArr = numStr.split("").map(Number);
	var Sn = 0;
	for (var i = 0; i < numArr.length; i++) {
		Sn += numArr[i]
	}
	var myNum = parseInt(numStr);
	if (myNum%Sn === 0) {
		return "Yes";
	}
	else{
		return "No";
	}
}
