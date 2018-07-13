// Access sequalize ORM library
const Sequelize = require('sequelize');

// Reference models
const db = require('../models');

const multer = require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'data/');
  },

  filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage: storage});

// Use express router
const router = require('express').Router();

// Require scoring function
const assessFile = require('../utils/scoring');


// Export a function that takes app as a parameter
module.exports = app => {

  // Get all files from the database
  router.get('/api/files', (req, res) => {

    // Get all files from database and attach corresponding assessments
    db.File.findAll({include: [db.Assessment]})

      // Access the files retrieved from the database
      .then(files => {

         // Return the files to the front end as JSON
        res.json(files);
      })

      // Log errors if unsuccessful
      .catch(err => console.log(err));
  });

  // Retrieve assessments from 1 file
  router.get('/api/file-assessments/:id', (req, res) => {

    // Get all assessments by corresponding file id
    db.Assessment.findAll({where: {FileId: req.params.id}})

      // Access the assessments retrieved from the database
      .then(assessments => {

        // Return the assessments to the front end as JSON
        res.json(assessments);
      })

      // Log errors if unsuccessful
      .catch(err => console.log(err));
  });

   // Retrieve scores from 1 file by date range
   router.get('/api/date-range/:id', (req, res) => {

    // Get all assessments by corresponding file id
    db.Assessment.findAll({

      // Filter by file id and date range
      where: {
        FileId: req.params.id,
        createdAt: {
          [Sequelize.Op.between]: [req.query.startDate, req.query.endDate]
        } 
      }})

      // Access the assessments retrieved from the database
      .then(assessments => {

        // Return the assessments to the front end as JSON
        res.json(assessments);
      })

      // Log errors if unsuccessful
      .catch(err => console.log(err));

  });


  // Create 1 file from name off of request body
  router.post('/api/file', (req, res) => {

    
    db.File.create({name: req.body.name})
      .then(file => {
        res.json(file);
      })
      .catch();
  });

  router.post('/api/assess-file', (req, res) => {
    assessFile(req.body.name, req.body.id, res);
  });

  router.post('/api/upload-form', upload.single('uploadFile'), (req, res) => {
    
    db.File.create({name: req.file.originalname})
      .then(file => {
        res.json(file);
      })
      .catch();
  })

  return router;
};