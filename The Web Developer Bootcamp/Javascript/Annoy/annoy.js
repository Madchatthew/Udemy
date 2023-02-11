// var question = prompt("Are we there yet?");

// while (question !== "yes" && question !== "yeah") {
//     var question = prompt("Are we there yet?");
// }

// alert("Yay, We Made IT!!!");

// Version 2

var question = prompt("Are we there yet?");

while (question.indexOf("yes") === -1) {
    var question = prompt("Are we there yet?");
}

alert("Yay, We Made IT!!!");