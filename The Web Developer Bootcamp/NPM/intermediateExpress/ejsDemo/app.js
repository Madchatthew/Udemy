var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;

    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Susy"},
        {title: "Post 3", author: "Susy"}
    ];

    res.render("posts", {posts: posts});
});

app.get("*", function(req, res) {
    res.send("Page not found");
});

// End Routes

// Starts the webserver on port 3000
app.listen(3000, function() {
    console.log("Server is up: go to localhost port 3000 (localhost:3000)");
});