var request = require("request");

var OAuth = require('oauth');
var header = {
    "X-Yahoo-App-Id": "reV0Re6s"
};
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9dWpEUmQwYXFOMmhCJmQ9WVdrOWNtVldNRkpsTm5NbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTVi',
    '038b26ebcfc33c3c5140b31f159b05dfadbcbaaf',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=charlottesville,va&format=json',
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            var parsedData = JSON.parse(data);
            console.log("Todays sunset time in " + parsedData.location.city + "," + parsedData.location.region + " is " + parsedData.current_observation.astronomy.sunset + ".");
            console.log(`Todays sunset time in ${parsedData.location.city},${parsedData.location.region} is ${parsedData.current_observation.astronomy.sunset}.`);
        }
    }
);