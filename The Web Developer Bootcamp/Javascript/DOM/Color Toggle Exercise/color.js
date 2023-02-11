var body = document.querySelector("body");
var button = document.querySelector("button");
// var isPurple = false;

// This is one way to complete this exercise

// button.addEventListener("click", function() {
//     if(isPurple) {
//         body.style.backgroundColor = "white";
//     } else {
//         body.style.backgroundColor = "purple";
//     }
//     isPurple = !isPurple;
// });

// This is the other way to complete this exercise - I did think of doing it this way but want to learn and now going to attempt to figure it out.

button.addEventListener("click", function() {
    body.classList.toggle("purple");
})