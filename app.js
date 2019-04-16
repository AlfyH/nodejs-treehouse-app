// Connect to the API URL (https://teamtreehouse.com/alfyhushairi.json)
//Read the data
//Parse the data
//Print the data

const https = require('https');

//functuon to print message to console
function printMessage(username, badgeCount, points) {
  const message =  `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
    console.log(message);
}

function getProfile(username) {
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
    response.on('data', data => {
      body += data.toString();
    });
    response.on('end', ()=>{
      const profile =JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript);
    });
  });
}

const user = process.argv.slice(2);

user.forEach(username => {
 getProfile(username);
});
