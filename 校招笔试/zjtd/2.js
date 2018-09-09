var len = parseInt(readline());
var arr = [];
var count = 0;


for (var i = 0; i < len; i++) {
	arr[i] = readline().split(" ");
}

var getCount = function() {
	for (var i = 0; i < len; i++) {
		for (var i = 0; i < len; i++) {
			if (arr[i][j] === 1) {
				makeSure(i,j);
				count += 1
			}
		}
	}
	return count;
}

var makeSure = function(i,j){
	arr[i][j] = 2;
	if (i < len - 1 && arr[i + 1][j] == 1) {
		makeSure(i + 1, j);
	}
	if (i > 0 && arr[i - 1][j] == 1) {
		makeSure(i - 1, j);
	}
	if (j < len - 1 && arr[i][j + 1] == 1) {
		makeSure(i, j + 1);
	}
	if (j > 0 && arr[i][j - 1] == 1) {
		makeSure(i, j - 1);
	}
}

print(getCount());


