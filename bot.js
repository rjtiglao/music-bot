

var Spotify = require('node-spotify-api');


//add api keys
var keys = require("./keys.js");


// var spotify = new Spotify(keys.spotify);
// console.log(keys);

var spotify = new Spotify({
    id:`c3538791e2fe48cbb986931fe49e377b`,
    secret:`a3ce0c78bd6242afb5e94c1d4a1c16db`
  });


if(process.argv[2] === "spotify-this-song"){
    if (process.argv[3] !== undefined){
        let song = (process.argv.splice(3, process.argv.length - 1).join(" "));
        spotify.search({ type: 'track', query: song }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
        }
        //  Artist(s)
        console.log(`Artist: ${data["tracks"]["items"][0]["artists"][0]["name"]}`); 
        // The song’s name
        console.log(`Song Name: ${data["tracks"]["items"][0]["name"]}`); 

        // A preview link of the song from Spotify
        console.log(`Preview URL: ${data["tracks"]["items"][0]["preview_url"]}`); 
        // The album that the song is from
        console.log(`Album: ${data["tracks"]["items"][0]["album"]["name"]}`);

        });
    }  
    else{
        let song = "The Sign"
        spotify.search({ type: 'track', query: song }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data); 
        });
    }
  
  
}

