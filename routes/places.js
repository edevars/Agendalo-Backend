const express = require('express');
const { placesMock } = require('../utils/mocks/places');

function placesApi(app) {
  const router = express.Router();
  app.use('/api/places', router);

  router.get('/', async function(req, res, next) {
    try {
      const places = await Promise.resolve(placesMock);
      res.status(200).json({
        data: places,
        message: 'Places listed'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = placesApi;
