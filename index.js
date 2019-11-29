const express = require('express');

const app = express();

const { config } = require('./config/index');
const placesApi = require('./routes/places');

//body-parser
app.use(express.json());

placesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
