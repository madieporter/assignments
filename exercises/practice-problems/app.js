// var str = "hello world";
// function reverseStr(str) {
//   var strArray = str.split("");
//   var newStr = strArray.reverse();
//   return newStr.join("");
// }
// console.log(reverseStr(str));

// function isNum(num) {
//     if (num == parseInt(num)) {
//         return "true"
//     } else {
//         return "false"
//     }
// }

// console.log(isNum("3"));

// function isEven(num) {
//     if (num % 2 === 0) {
//         return "true"
//     } else {
//         return "false"
//     }
// }
// console.log(isEven(5))

// var nums = [3, 5, 9, 12];

// function avgArray(avg) {
//     var total = 0;
//     for (var i = 0; i <  avg.length; i++) {
//         total = total + avg[i];
//     }
//     return total / avg.length;
// }
// console.log(avgArray(nums))

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function combineArrays(arr1, arr2) {
    var newArray = [];
    for (var i = 0; i < arr1.length; i++) {
            newArray.push(arr1[i]);
            newArray.push(arr2[i]);  
    }
    return newArray
}
console.log(combineArrays(fruit, vegetables));
