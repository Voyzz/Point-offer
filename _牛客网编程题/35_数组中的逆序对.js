// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 
// 即输出P%1000000007

function InversePairs(data)
{
    // write code here
      if(!data || data.length < 2){
        return 0;
    }
    var copy = data.concat(), count = 0;
    count = MergeSort(data, copy, 0, data.length-1);
    return count % 1000000007;
}
function MergeSort(data, copy, start, end){
    if(end === start){
        return 0;
    }
    var len = Math.floor((end - start) / 2);
    var left = MergeSort(copy, data, start, start+len);
    var right = MergeSort(copy, data, start+len+1, end);
    var count = 0;
    var p = start+len, q = end, copyIndex = end;
    while(p >= start && q >= start+len+1){
        if(data[p] > data[q]){
            count += q - start - len;
            copy[copyIndex--] = data[p--];
        }else{
            copy[copyIndex--] = data[q--];
        }
    }
    while(p >= start){
        copy[copyIndex--] = data[p--];
    }
    while(q >= (start+len+1)){
        copy[copyIndex--] = data[q--];
    }
    return left + right + count;
}
