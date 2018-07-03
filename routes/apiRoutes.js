// Reference models
const db = require('../models');

// Use express router
const router = require('express').Router();

module.exports = app => {

  router.get('/api/files', (req, res) => {
    res.send('These are the files');
  });

  return router;
};