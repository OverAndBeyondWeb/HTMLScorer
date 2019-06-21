// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Express app setup
const app = express();
const PORT = process.env.PORT || 3001;

// Work with request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Require db models
const db = require('./models');

app.use(require('./routes/apiRoutes')(app));
require('./seed')(app);

if (process.env.NODE_ENV) {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

db.sequelize.sync({ force: true }).then(() => {
  // Start server to begin listening
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
});
