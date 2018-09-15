var line = readline().split(" ");
var n = parseInt(line[0]);
var m = parseInt(line[1]);

function getSum(n,m) {
	var res = 0;
	for (var i = 1; i < n+1; i++) {
		if (Math.ceil(i/m)%2 === 1) res -= i;
		else if (Math.ceil(i/m)%2 === 0) res += i;
	}
	return res;
}

var x = getSum(n,m);
print(x);
