const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', (req, res) => {
  res.json({
    hello: 'world'
  });
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
