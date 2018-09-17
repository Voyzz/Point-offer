// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。 
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

function GetUglyNumber_Solution(index)
{
    // write code here
    if (index <= 0) return null;
    if (index === 1) return 1;
    if (index>=2 && index <=5) return index;
    var res = [2,3,5];

    while(index > res.length+1){
    	res.forEach(function(val){
	    	res.push(val*2);
	    	res.push(val*3);
	    	res.push(val*5);
	    })
	    res = unique(res);
    }

    function unique(arr){
    	var x = new Set(arr);
    	return [...x];
    }

    res.unshift(1);
    return res.sort((a,b)=>a-b);
}

console.log(GetUglyNumber_Solution(7));

//要注意，后面的丑数是有前一个丑数乘以2，3，5中的一个得来。因此可以用动态规划去解
//同时注意一下，题目意思应该是质数因此，而不是因子，因为8的因子有1，2，4，8