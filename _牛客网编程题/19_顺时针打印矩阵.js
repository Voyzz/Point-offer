function printMatrix(matrix)
{
    // write code here
    var row = matrix.length; //行数 
    var col = matrix[0].length;  
	var res = [];  
	var minNum = Math.min(row,col); 
	var circleCount = Math.ceil(minNum/2);
	for (var i = 1; i < circleCount+1; i++) {
		circleNo(i);
	}
	for (var i = 0; i < res.length; i++) {
		console.log(res[i]);
	}
	function circleNo(num)
	{
		var r = num - 1; //此圈起始值
		var numRow = row - 2*r; //此圈行数
		var numCol = col - 2*r;	//此圈列数
		for (var i = r; i <= r+numCol-1; i++) {
			res.push(matrix[r][i]);
		}
		for (var i = r+1; i < r+numRow; i++) {
			res.push(matrix[i][r+numCol-1]);
		}
		for (var i = r+numCol-1; (i >= r); i--) {
			res.push(matrix[r+numRow-1][i]);		
		}
		for (var i = r+numCol-1; (i >= r+1); i--) {
			res.push(matrix[i][r]);
		}
	} 
}



var matrix = [[1,2],[3,4],[5,6],[7,8]];
printMatrix(matrix);