const fs = require('fs');
const htmlParser = require('htmlparser2');

const db = require('../models');

module.exports = (filename, id, res) => {
  const scores = [];
  let total = null;
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

  const parser = new htmlParser.Parser({
    onopentag(name, attribs) {
      scores.push(scoringSystem[name]);
    }
  });
  
  fs.readFile(`data/${filename}`, 'utf8', (err, data) => {
    if (err) throw err;
    parser.write(data);
    total = scores.reduce((acc, curr) => {
      return acc + curr;
    });

    db.Assessment.create({score: total, FileId: id})
      .then(score => {
        console.log(score);
      })
      .catch(err => {
        console.log(err);
      });
  });
};