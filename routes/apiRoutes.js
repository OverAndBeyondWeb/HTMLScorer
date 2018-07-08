// Reference models
const db = require('../models');

// Use express router
const router = require('express').Router();

// Require scoring function
const assessFile = require('../utils/scoring');

module.exports = app => {

  // Get all files from the database
  router.get('/api/files', (req, res) => {
    db.File.findAll({include: [db.Assessment]})
      .then(files => {
        res.json(files);
      })
      .catch();
  });

  // Retrieve 1 file from request params
  router.get('/api/file/:id', (req, res) => {
    db.File.findById(req.params.id, {include: [db.Assessment]})
      .then(file => {
        console.log('backend');
        res.json(file);
      })
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

  router.get('/api/scores', (req, res) => {
    db.Assessment.findAll({include: [db.File]})
      .then(scores => {
        res.json(scores);
      })
      .catch();
  });

  router.post('/api/assess-file', (req, res) => {
    assessFile(req.body.name, req.body.id, res);
  });

  return router;
};