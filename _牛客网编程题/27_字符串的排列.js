function Permutation(str)
{
    // write code here
    var result=[];
    if(str.length<=0){
        return [];
    }
    var sortTemp='';
    var arr = str.split('');
    result=sortString(arr,sortTemp,[]);
    return result

}
function sortString(arr,sortTemp,result){
    if(arr.length==0){
        result.push(sortTemp)
    }else{
        var isRepeat={};
        for(var i=0;i<arr.length;i++){
            if(!isRepeat[arr[i]]){
                var temp=arr.splice(i,1)[0];//取出第一个字符
                sortTemp+=temp;
                sortString(arr,sortTemp,result);
                arr.splice(i,0,temp);//补全
                sortTemp=sortTemp.slice(0,sortTemp.length-1)//清空
                isRepeat[temp]=true;
            }
        }
    }
    return result;
}

console.log(Permutation("123"));