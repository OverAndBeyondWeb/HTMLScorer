// Dependencies
const express = require('express');

// Express app setup
const app = express();
const PORT = process.env.PORT || 3001;

// Require db models
const db = require('./models');

// Test route
app.get('/', (req, res) => {
  res.send('App is running');
});


db.sequelize.sync({force:true}).then(() => {
  // Start server to begin listening
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
})
