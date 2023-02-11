// Print all numbers between -10 and 19
var setOne = -10;
console.log("Problem Set One");
while(setOne <= 19) {
    console.log(setOne);
    setOne++;
}

//Print all even numbers between 10 and 40

var setTwo = 10;
console.log("Problem Set Two");
while(setTwo <= 40) {
    console.log(setTwo);
    setTwo+=2;
}

//Print all odd numbers between 300 and 333

var setThree = 300;
console.log("Problem Set Three");

while(setThree <= 333) {
    if(setThree % 2 !== 0)
        console.log(setThree);
    setThree+=1;
}

//Print all numbers divisible by 5 and 3 between 5 and 50

var setFour = 5;
console.log("Problem Set Four");

console.log("Numbers divisible by 5 and 3");
while(setFour <= 50) {
    if(setFour % 5 === 0 && setFour % 3 === 0) {
        console.log(setFour);
    }
    setFour++;
}