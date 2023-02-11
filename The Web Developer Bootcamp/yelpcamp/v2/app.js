// Sets up express and other global variables
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")

// Place Use/Set in this section

mongoose.connect('mongodb://localhost/yelp_camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// End of Use/Set Section

// Schema Setup

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://image.shutterstock.com/image-photo/yellow-canoe-bathed-sunlight-on-260nw-96188657.jpg",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//     }, function(err, campground) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND");
//             console.log(campground);
//         };
// });

// End Schema

// Routes

    app.get("/", function(req, res) {
        res.render("landing");
    });

    app.get("/campgrounds", function(req, res) {
        // Get all campgrounds from DB
        Campground.find({}, function(err, allCampgrounds) {
            if(err) {
                console.log(err);
            } else {
                res.render("index", {campgrounds: allCampgrounds});
            };
        });
    });

    app.post("/campgrounds", function(req, res) {
        // Get data from from and add to campgrounds array
        var name = req.body.name;
        var image = req.body.image;
        var desc = req.body.description;
        var newCampground = {name: name, image: image, description: desc};
        // campgrounds.push(newCampground); Replaced by DB commands
        // Create a new campground and send it to the DB
        Campground.create(newCampground, function(err, newlyCreated) {
            if(err) {
                console.log(err);
            } else {
                res.redirect("/campgrounds");
            }
        });
    });

    app.get("/campgrounds/new", function(req, res) {
        res.render("new");
    });

    app.get("/campgrounds/:id", function(req, res) {
        // Find the campground of the specific id
        Campground.findById(req.params.id, function(err, foundCampground) {
            if(err) {
                console.log(err);
            } else {
                // Render show template with that campground
                res.render("show", {campground: foundCampground});
            };
        });
    });

// End Routes

// Gives the server the port and how to access
app.listen(3000, function() {
    console.log("The Yelp Camp Server is Running on webdev:3000");
});