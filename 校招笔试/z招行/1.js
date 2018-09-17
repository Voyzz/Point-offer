var childArr = readline().split(" ").map(Number);
var sugarArr = readline().split(" ").map(Number);

function howManyChildren(childArr,sugarArr) {
    if (childArr.length === 0) return null;
    if (sugarArr.length === 0) return 0;
    var preNum = sugarArr.length;
    childArr.sort((a,b)=>a-b);
    sugarArr.sort((a,b)=>a-b);

    for (var i = 0; i < childArr.length; i++) {
        for (var j = 0; j < sugarArr.length; j++) {
            if (childArr[i]<=sugarArr[j]) {
                sugarArr.splice(j,1);
                childArr.splice(i,1);
                i--;
                break;
            }
        }
    }
    var nextNum = sugarArr.length;
    var res = preNum - nextNum;
    return res;
}

print(howManyChildren(childArr,sugarArr));