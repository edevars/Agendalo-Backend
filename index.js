const express = require('express');
const morgan = require('morgan');
const notFounHandler = require('./utils/middleware/notFounHandler');
const userPlace = require('./routes/userPlace');


const app = express();

const { config } = require('./config/index');
const placesApi = require('./routes/places');


const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandler');

//body-parser
app.use(express.json());

//Loger to http requests
app.use(morgan('combined'))

//routes
placesApi(app);
userPlace(app);

//catch error 404
app.use(notFounHandler);

//Error handling
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
