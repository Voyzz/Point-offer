// var N = readInt();
// var M = readInt();


var getTeams = function (n,m) {
	var sum = m+n;
	var max = Math.min(n,m);
	var teamNum = 0;
	var sumThen = sum - (2*teamNum);

	for(var i = 0;i < max;i++) {
		teamNum += 1;
		sumThen = sum - (2*teamNum);
		if (sumThen >= teamNum) {
			continue;	
		}else{
			teamNum -= 1;
			break;
		}
	}
	return teamNum;
}

var res = getTeams(3000,4000);
console.log(res);