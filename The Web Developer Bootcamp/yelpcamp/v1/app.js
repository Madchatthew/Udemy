// Sets up express and other global variables
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "Salmon Creek", image: "https://image.shutterstock.com/image-photo/multiple-marshmallows-extended-over-camp-600w-122697214.jpg"},
    {name: "Granite Hill", image: "https://image.shutterstock.com/image-photo/yellow-canoe-bathed-sunlight-on-260nw-96188657.jpg"},
    {name: "Mountain Goat's Rest", image: "https://image.shutterstock.com/image-photo/boats-on-shore-indian-ocean-600w-434807302.jpg"}
];

// Place Use/Set in this section

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Routes

    app.get("/", function(req, res) {
        res.render("landing");
    });

    app.get("/campgrounds", function(req, res) {

        res.render("campgrounds", {campgrounds: campgrounds});
    });

    app.post("/campgrounds", function(req, res) {
        // Get data from from and add to campgrounds array
        var name = req.body.name;
        var image = req.body.image;
        var newCampground = {name: name, image: image};
        campgrounds.push(newCampground);
        //redirect back to campgrounds page
        res.redirect("/campgrounds");
    });

    app.get("/campgrounds/new", function(req, res) {
        res.render("new");
    });

// End Routes

// Gives the server the port and how to access
app.listen(3000, function() {
    console.log("The Yelp Camp Server is Running on webdev:3000");
});