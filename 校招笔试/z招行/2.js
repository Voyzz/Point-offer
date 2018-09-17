var num = parseInt(readline());

function methodsNum(num) {
	if (num < 0) return -1;
	else if (num === 1) return 1;
	else if (num === 2) return 2;
	else{
		return methodsNum(num - 1)+methodsNum(num - 2);
	}
}

print(methodsNum(num));