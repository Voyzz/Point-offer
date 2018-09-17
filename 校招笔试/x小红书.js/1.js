var line = readline().split(" ").map(Number);
var num = parseInt(readline());

function getRever(line,num) {
	var groupNum = Math.floor((line.length)/num); 
	var res = [];
	var tmp = [];
	for (var i = 0; i < groupNum; i++) {
		for (var j = 0; j < num; j++) {
			tmp.push(line.shift());
		}
		for (var k = 0; k < num; k++) {
			res.push(tmp.pop());
		}
		tmp = [];
	}
	for (var i = 0; i < line.length; i++) {
		res.push(line[i]);
	}
	
	return res.join(" ");
}



var x = getRever(line,num);
print(x);