const express = require('express');
const morgan = require('morgan');
const notFounHandler = require('./utils/middleware/notFounHandler');
const cors = require("cors");

const app = express();

const { config } = require('./config/index');

//Require routes
const placesApi = require('./routes/places');
const userPlaceApi = require('./routes/userPlace');
const authApi = require('./routes/auth');


const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandler');

//enabling cors
app.use(cors());

//body-parser
app.use(express.json());

//Loger to http requests
app.use(morgan('combined'))

//adding routes
placesApi(app);
userPlaceApi(app);
authApi(app)

//catch error 404
app.use(notFounHandler);

//Error handling
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
