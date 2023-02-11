console.log("CONNECTED");

console.log("Print Reverse Problem");

//My code for doing problem - It does work by the way
// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(i=10; i >= 0; i--) {
//     console.log(num[i]);
// }

//How I should have completed this exercise

function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([1, 2, 3, 4, 5]);

//*** isUniform Starts ***

console.log("isUniform Problem ");

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([1, 1, 1]));
console.log(isUniform([2, 1, 1]));
console.log(isUniform(["a", "b", "C"]));
console.log(isUniform(["b", "b", "b"]));

// *** Start of sumArray ***
console.log("sumArray Problem");

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

console.log("10 + 20 + 30 = " + sumArray([10, 20, 30]));
console.log("15 + 5 + 10 = " + sumArray([15, 5, 10]));
console.log("100 + 100 + 100 = " + sumArray([100, 100, 100]));
console.log("50 + 1 + 9 = " + sumArray([50, 1, 9]));

// **** Max starts here ***

console.log("max Problem Set");

function max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Max number in this array[2, 6, 4] = " + max([2, 6, 4]));
console.log("Max number in this array[10, 2, 100] = " + max([10, 2, 100]));
console.log("Max number in this array[1000, 50, 1001] = " + max([1000, 50, 1001]));
console.log("Max number in this array[4, 50, 10] = " + max([4, 50, 10]));