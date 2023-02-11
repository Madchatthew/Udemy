var express = require("express");
var app = express();


// Routes start - Place all routes in this section

// "/" => "Hi there!"
app.get("/", function(req, res) {
    console.log("Someone made a request to /");
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    console.log("Someone made a request to /bye");
    res.send("So Long Sucka!!!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("MMMEEEEOOOOWWWWW!!!");
});

app.get("/r/:subredditName", function(req, res) {
    // console.log(req);
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log("WELCOME TO THE SUBREDDIT COMMENTS!");
});

app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!!");
});

// Routes End here

// Starts the web server

app.listen(3000, function() {
    console.log("Serving First Express App on localhost port 3000 (localhost:3000)");
});