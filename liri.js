require("dotenv").config();
const spot = require("spotify");

//const spotify = new Spotify(keys.spotify);
//const client = new Twitter(keys.twitter);

var action = process.argv[2];

switch (action) {
    case "my-tweets":
      tweet();
      break;
    
    case "spotify-this-song":
      spotify();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      dowhat();
      break;
};

function tweet() {
  const twit = require("./twitter.js");
}

function spotify() {
  const spot = require("./spotify.js");
}

function movie() {
    const omdbd = require("./omdb.js");
}

function dowhat() {
  const dowhat = require("./dowhatitsays.js");
}