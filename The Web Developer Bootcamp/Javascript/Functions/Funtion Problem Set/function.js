// Even number function

// function isEven(num) {
//     if (num % 2 === 0) {
//         return "True";
//     } else {
//         return "False";
//     }
// }

// Ver 2 isEven

function isEven(num) {
    return num % 2 === 0;
}

// Factorial Problem set factorial(4) 4 x 3 x 2 x 1

//This solution involves more code and statements
// function factorial(num) {

//      if(num === 0);
//      return 1;
//     //define a result variable
//     var result = num;
//     //calculate factorial and store value in result
//     for(var i = num - 1; i >= 1; i--) {
//         result *= i;
//     }
//     //return the result variable
//     return result;
// }

//This way results in less code
function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    //return the result variable
    return result;
}

//Kebabtosnake
function kebabToSnake(str) {
    var change = str.replace(/-/g, "_");
        return change;
}