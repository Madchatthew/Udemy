var express = require("express");
var app = express();

// Routes Section - Place all routes in this section

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    // Colts solution

    // var sounds = {
    //     pig: "Oink",
    //     cow: "Moo",
    //     dog: "Woof Woof",
    //     cat: "I hate you human",
    //     goldfish: ". . ."
    // };

    // var sound = sounds[animal];
    // var animal = req.params.animal.toLowerCase();

    // res.send("The ") + animal + " says" + sound);

    // My solution

    var animal = req.params.animal;
    

    if(animal === "pig") {
        res.send("The pig says 'Oink Oink'");
    } else if (animal === "cow") {
        res.send("The cow says 'Moooooo'");
    } else if (animal === "dog") {
        res.send("The dog says 'Woof Woof'");
    } else if (animal === "cat") {
        res.send("The cat says 'Meow Meow'");
    } else if (animal === "sheep") {
        res.send("The sheep says 'Baah Baah'");
    } else {
        res.send("Please type in the addrress bar /pig, /cow, /dog, /cat or /sheep for results.")
    };
});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word;
    var number = Number(req.params.number);
    var result = word.repeat(number);

    res.send(result.split(word).join(word + " "));
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found . . . What are you doing with your life?");
});

// End of the Routes Section - All routes should be place before this line

// Starts the webserver on port 3000
app.listen(3000, function() {
    console.log("Serving First Express App on localhost port 3000 (localhost:3000)");
});