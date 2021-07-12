/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */

 var fs = require('fs');
 var Promise = require('bluebird');
 var promiseConstructor = require('../bare_minimum/promiseConstructor.js');


var combineFirstLineOfManyFiles = function(filePaths, writePath) {
  let firstLines = [];
  for(let filePath of filePaths) {
    firstLines.push(promiseConstructor.pluckFirstLineFromFileAsync(filePath));
  }

  return Promise.all(firstLines)
    .then((firstLines) => {
      return Promise.promisify(fs.writeFile)(writePath, firstLines.join('\n'));
    }).catch((err) => {
      throw err;
    });
};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};