// Due to chrome browser being stupid, use this code to make it act not stupid. I guess in some cases, you can fix stupid.

window.setTimeout(function() {
    // put all of your JS code from the lecture here
  }, 500);

//   Note, if you want to be able to access the todos variable from the chrome developer console then you'll need to put it in the global scope, see example below:

  var todos = ["Buy New Turtle"];
  window.setTimeout(function() {
    // put all the rest of your JS code from the lecture here
  }, 500);