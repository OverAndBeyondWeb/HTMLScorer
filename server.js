// Dependencies
const express = require('express');

// Express app setup
const app = express();
const PORT = process.env.PORT || 3001;

// Require db models
const db = require('./models');

app.use(require('./routes/apiRoutes')(app));


db.sequelize.sync({force:true}).then(() => {
  // Start server to begin listening
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
})
