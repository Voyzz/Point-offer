// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
// 并返回它的位置, 如果没有则返回 -1（需要区分大小写）

function FirstNotRepeatingChar(str)
{
    // write code here
    var obj = {};
    var strToArr = str.split("");
    strToArr.forEach(function(val){
    	if (!obj[val]) {
    		obj[val] = 1;
    	}
    	else{
    		obj[val] += 1;
    	}
    })
    
    var num = "";
    for(i in obj){
    	if (obj[i] === 1) {
    		num = i.toString();
    		break;
    	}
    }
    if (num === "") return -1;

    var res = str.indexOf(num);
    return res;
}


console.log(FirstNotRepeatingChar("abcda"));