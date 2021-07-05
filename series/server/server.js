const express = require('express');
const cors = require('cors')
const config = require('./config.json');

const app = express();

app.use(cors())

// Add body-parser
app.use(require('body-parser').json());

// Add Shows API
require('./shows-api')(app);

app.listen(config.port, 'localhost', (err) => {
  if (err) console.error(err);

  console.info(`Rest Server listening on : http://localhost:${config.port}`);
});
