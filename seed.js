const fs = require('fs');
const db = require('./models');

module.exports = app => {
  return app.get('/seed', (req, res) => {
    fs.readdir('data/', (err, files) => {
      const dbfiles = [];
      files.forEach(file => {
        db.File.create({name: file})
        .then(dbfile => {
          dbfiles.push(dbfile);
        });
      });
      res.json(dbfiles);
    });
  });
}