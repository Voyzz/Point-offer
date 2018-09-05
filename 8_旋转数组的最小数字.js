// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。


var compare = function(a) {
	var front = 0;
	var rear = a.length - 1;
	var minNum = a[0];
	if (a[front] < a[rear]) {
		return a[front];
	}
	else{
		while((rear - front) > 1) {
			let mid = (front+rear)/2;
			if (a[mid] > a[rear]) {
				front = mid;
			}else if (a[mid] < a[front]) {
				rear = mid;
			}else if (a[front] === a[mid] === a[rear]) {
				for(i=1;i<a.length;i++) {
					if (a[i] < minNum) {
						minNum = a[i];
						rear = i;
					}
				}
			}
		}
		minNum = a[rear];
		return minNum;
	}
}

var array = [5,6,7,1,2,3,4];
var a = compare(array);
console.log(a);