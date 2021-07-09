/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      //console.log(data);
      if (err) {
        callback(err);
      }
      var newLineIndex = data.indexOf('\n');
      callback(null, data.slice(0, newLineIndex));
    });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
