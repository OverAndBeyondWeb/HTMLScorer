// Access File System module
const fs = require('fs');

// Bring in htmlparser2 library
const htmlParser = require('htmlparser2');

// Access db models
const db = require('../models');

// Export a function that scores files
module.exports = (filename, id, res) => {

  // Array to hold point accumulation
  const scores = [];

  // Variable to hold final score
  let total = null;

  // Object to map tags to point value
  const scoringSystem = {
    div: 3,
    p: 1,
    h1: 3,
    h2: 2,
    html: 5,
    body: 5,
    header: 10,
    footer: 10,
    font: -1,
    center: -2,
    big: -2,
    strike: -1,
    tt:-2,
    frameset: -5,
    frame: -5
  }

  // Parser setup
  const parser = new htmlParser.Parser({

    // Method to call when an open tag is encountered
    onopentag(name, attribs) {

      // Push point value associated with the tag into the scores array
      scores.push(scoringSystem[name]);
    }
  });
  
  // Read the file corresponding to the passed in filename parameter
  fs.readFile(`data/${filename}`, 'utf8', (err, data) => {

    // Handle errors
    if (err) throw err;

    // Parse the file according to the htmlparser2 setup
    parser.write(data);

    // Add tag points to get a final score
    total = scores.reduce((acc, curr) => {
      return acc + curr;
    });

    // Insert an assessment in the database
    db.Assessment.create({score: total, FileId: id})
      .then(score => {

        // Send success info back to the front end
        res.json({
          message: 'success',
          score: total
        });
      })
      .catch(err => console.log(err));
  });
};