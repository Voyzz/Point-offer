// 需要两个栈Stack1和Stack2，
// push的时候直接push进Stack1。
// pop需要判断Stack1和Stack2中元素的情况，
// Stack1空的话，直接从Stack2 pop
// Stack1不空的话，把Stack1的元素push进入Stack2，
// 然后pop Stack2的值

var Stack1 = [];
var Stack2 = [2,3,4];

var push = function(p){
	Stack1.push(p);
};
var pop = function() {
	if (Stack1.length === 0 && Stack2.length === 0) {
		return;
	}else if (Stack1.length === 0 && Stack2.length !== 0) {
		Stack2.pop();
	}else{
		while(Stack1.length > 0) {
			Stack2.push(Stack1.pop());
		}
	}
	Stack2.pop();
}

push(1);
push(3);
push(1);
push(1);
push(1);
push(1);
push(1);
pop();
console.log(Stack2);
