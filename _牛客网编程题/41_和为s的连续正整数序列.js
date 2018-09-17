// 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!

function FindContinuousSequence(sum)
{
    // write code here
    if (sum === 1) return [];
    var res = [];
    var tmp = [];
    var count = 0;
    var max = Math.ceil(sum/2);
    for (var i = 1; i < max+1; i++) {
        for (var j = i; j < max+1; j++) {
            tmp.push(j);
            count += j;
            if (count === sum) {
                res.push(tmp);
                tmp = [];
                count = 0;
                break;
            }
            if (count > sum) {
                tmp = [];
                count = 0;
                break;
            }
        }
    }
    return res;
}

console.log(FindContinuousSequence(200));