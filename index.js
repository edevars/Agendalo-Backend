const express = require('express');

const app = express();

const { config } = require('./config/index');
const placesApi = require('./routes/places');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandler');

//body-parser
app.use(express.json());

placesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
