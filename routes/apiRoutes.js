// Reference models
const db = require('../models');

// Use express router
const router = require('express').Router();

// Require scoring function
const assessFile = require('../utils/scoring');

module.exports = app => {

  // Get all files from the database
  router.get('/api/files', (req, res) => {
    db.File.findAll({})
      .then(files => {
        res.json(files);
      })
      .catch();
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
    console.log(req.body);
    assessFile(req.body.name, req.body.id, res);
  });

  return router;
};