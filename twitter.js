require("dotenv").config();
var Twitter = require('twitter');
 
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = {screen_name: 'bradsaid', count: 20};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (let i = 0; i < tweets.length; i++) {
    console.log("Tweet: " + tweets[i].text + "\nTweeted on: " + tweets[i].created_at.substring(0, 19));
    }
  }
});



