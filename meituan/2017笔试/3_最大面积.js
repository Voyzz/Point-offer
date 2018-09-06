var count = parseInt(readline());
var arrList = readline().split(" ").map(function(x){
    return x-'0';
});
 
var areas = [];
arrList.forEach(function(val,idx,obj){
    var countL = 0;
    var countR = 0;
    for(var i=idx+1;i<count;i++){
        if(val <= obj[i]){
            countR += 1;
        }else{
            break;
        }
    }
    for(var i=idx-1;i>-1;i--){
        if(val <= obj[i]){
            countL += 1;
        }else{
            break;
        }
    }
    var area = (countL+countR+1)*val;
    areas.push(area);
})
var maxArea = areas.sort(function(a,b){
    return b-a;
})[0];
console.log(maxArea);