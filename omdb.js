const request = require("request");
let nodeArgs = process.argv;
let movieName = "";

for (let i = 3; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];
  }
}

function movie() {
  if (movieName === "") {
    movieName = "Mr. Nobody";
  }
  let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&tomatoes=true&plot=short&apikey=trilogy";
  request(queryUrl, function(error, response, body) {
    console.log(queryUrl);
  if (!error && response.statusCode === 200) {
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country of Production: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Cast: " + JSON.parse(body).Actors);
  }
});
};

movie();


