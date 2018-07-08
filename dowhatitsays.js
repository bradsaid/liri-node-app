require("dotenv").config();
var fs = require("fs");
var Spotify = require('node-spotify-api');
let x = "";

fs.readFile("random.txt", "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }
     let x = data;
     console.log(x)
    });

var client = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

let songName = x;
console.log(songName)

/*client.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    for (let i = 0; i < data.tracks.items.length; i++) {
      console.log(data.tracks.items[i].artists[0].name)
      console.log(data.tracks.items[i].name)
      console.log(data.tracks.items[i].preview_url)
      console.log(data.tracks.items[i].album.name)
      }
  });*/