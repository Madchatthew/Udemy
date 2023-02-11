// My solution
// var scores = [90, 98, 89, 100, 100, 86, 94];
// var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
// var sum1 = scores.reduce((a, b) => a + b, 0);
// var avg1 = sum1 / scores.length;
// var sum2 = scores2.reduce((a, b) => a + b, 0);
// var avg2 = sum2 / scores2.length;

// function average() {
//     console.log(Math.round(avg1));
//     console.log(Math.round(avg2));
// }

// average();

// Colts Solution

function average(scores) {
    // add all scores together
    var total = 0;
    scores.forEach(function(score) {
        total += score;
    });
    // divide by total number of scores
    var avg = total/scores.length;
    // round average
    return Math.round(avg);
}

console.log("Average score for Scores class");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

console.log("Average score for Scores2 class");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));