var movieDB = [
    {
        Name: "Star Wars",
        Rating: 5,
        Seen: true
    },

    {
        Name: "Magic Mike",
        Rating: 1,
        Seen: false
    },

    {
        Name: "Indiana Jones",
        Rating: 5,
        Seen: true
    },

    {
        Name: "Magic Mike 2",
        Rating: 1,
        Seen: false
    }
]

movieDB.forEach(function(movie) {
    console.log(buildString(movie));
});

function buildString(movie) {
    var result = "You have ";
    if(movie.Seen){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.Name + "\" rated at ";
    result += movie.Rating + " stars";
    return result;
}