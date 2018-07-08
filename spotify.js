require("dotenv").config();
var Spotify = require('node-spotify-api');

var client = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

let nodeArgs = process.argv;
let songName = "";

for (let i = 3; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    songName = songName + "+" + nodeArgs[i];
  }
  else {
    songName += nodeArgs[i];
  }
}

client.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    for (let i = 0; i < data.tracks.items.length; i++) {
      console.log(data.tracks.items[i].artists[0].name)
      console.log(data.tracks.items[i].name)
      console.log(data.tracks.items[i].preview_url)
      console.log(data.tracks.items[i].album.name)
      }
    //console.log(data.tracks.items)
  });



