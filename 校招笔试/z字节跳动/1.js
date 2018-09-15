// var str = readline();
// var maxLength = 0;

// var getLength = function(str) {
//     var str = ""; 
//     for(var i = 0; i < str.length; i++) {
//       var char = s.charAt(i);
//       var index = str.indexOf(char);
//       if(index === -1) {
//         str += char;
//         maxLength = maxLength < str.length ? str.length : maxLength;
//       } else {
//         str = str.substr(index + 1) + char;
//       }
//     }
//     return maxLength; 
// };

// var ans = getLength(str);
// print(ans);

var getLength = function(s) {
    var res = 0; 
    var str = ""; 
    for(var i = 0; i < s.length; i++) {
      var char = s.charAt(i);
      var index = str.indexOf(char);
      if(index === -1) {
        str += char;
        res = res < str.length ? str.length : res;
      } else {
        str = str.substr(index + 1) + char;
      }
    }
    return res; 
};

console.log(getLength("abc"));