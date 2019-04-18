// Connect to the API URL (https://teamtreehouse.com/alfyhushairi.json)
//Read the data
//Parse the data
//Print the data

//error handling with try and catch

const https = require('https');

//Print error messages
function printError (error) {
  console.error(message.error);
}

//functuon to print message to console
function printMessage(username, badgeCount, points) {
  const message =  `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
    console.log(message);
}

function getProfile(username) {
  //any error in this block will be caught
  try {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if (response.statusCode === 200) {
        let body = "";
        response.on('data', data => {
          body += data.toString();
        });
        response.on('end', () => {
          try {
            const profile =JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript);
          } catch (error) {
            console.error("This user does not exist");
          }
      });
    }
     else {
      const message = `There was an error getting progile for ${username}`;
      const statusCodeError = new Error(message);
      console.log(statusCodeError);
    }
  });
  
    //error handling
    request.on('error', error => console.error(`Problem with request ${error.message}`));
  } catch (error) {
    console.error(error.message);
  }
}

const user = process.argv.slice(2);

user.forEach(username => {
 getProfile(username);
});
