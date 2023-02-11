// Print all numbers between -10 and 19
// var setOne = -10;
// console.log("Problem Set One");
// while(setOne <= 19) {
//     console.log(setOne);
//     setOne++;
// }

console.log("Problem Set One - Print all numbers between -10 and 19");
for(var i = -10; i <= 19; i+=1) {
    console.log(i);
}

//Print all even numbers between 10 and 40

// var setTwo = 10;
// console.log("Problem Set Two");
// while(setTwo <= 40) {
//     console.log(setTwo);
//     setTwo+=2;
// }

console.log("Problem Set Two - Print all even numbers between 10 and 40");
for(var i = 10; i <= 40; i+=1) {
    if(i % 2 === 0){
        console.log(i);
    }
}

//Print all odd numbers between 300 and 333

// var setThree = 300;
// console.log("Problem Set Three - Print all odd numbers between 300 and 333");

// while(setThree <= 333) {
//     if(setThree % 2 !== 0)
//         console.log(setThree);
//     setThree+=1;
// }

console.log("Problem Set Three - Print all odd numbers between 300 and 333");
for(var i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

//Print all numbers divisible by 5 and 3 between 5 and 50

// var setFour = 5;
// console.log("Problem Set Four - Print all numbers divisible by 5 and 3 between 5 and 50");

// while(setFour <= 50) {
//     if(setFour % 5 === 0 && setFour % 3 === 0) {
//         console.log(setFour);
//     }
//     setFour++;
// }

console.log("Problem Set Four - Print all numbers divisible by 5 and 3 between 5 and 50");
for(var i = 5; i <= 50; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}