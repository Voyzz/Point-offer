var List1 = "abcde".split("");
var List2 = "abgde".split("");
var len = List1.length;
var count = 0;
var counts = [0];

List1.forEach(function(val1,idx1,obj1){
    List2.forEach(function(val2,idx2,obj2){
        if(val1 === val2){
            count += 1;
            for (var i = 1; i < len-idx2; i++) {
                if (obj1[idx1+i] === obj2[idx2+i]) {
                    count += 1;
                }else{
                    break;
                }
            }
            counts.push(count);
            count = 0;
        }
    })
})

var res = counts.sort(function(a,b){
    return b-a;
})[0];
console.log(res);

