// index2.js
/*
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));
*/
const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (passTimes) => {
  // success, print out the deets!
  for (const times of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(times.risetime);
    console.log(`Next pass at ${dateTime} for ${times.duration} seconds!`);
  }
};
// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });