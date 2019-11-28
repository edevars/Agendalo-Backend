const express = require('express');
const { placesMock } = require('../utils/mocks/places');

function placesApi(app) {
  const router = express.Router();
  app.use('/api/places', router);

  //get all the places
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

  //get place by id
  router.get('/:placeId', async function(req, res, next) {

    try {
      const placeById = await Promise.resolve(placesMock[0]);
      res.status(200).json({
        data: placeById,
        message: 'Place listed by ID'
      });
    } catch (error) {
      next(error);
    }
  });

  //create place
  router.post('/', async function(req, res, next) {
    try {
      
      const createdPlace = await Promise.resolve(placesMock[0].id);
      res.status(201).json({
        data: createdPlace,
        message: 'Place created'
      });
    } catch (error) {
      next(error);
    }
  });

  //update place
  router.put('/:placeId', async function(req, res, next) {
    try {
      const updatedPlace = await Promise.resolve(placesMock[0].id);
      res.status(200).json({
        data: updatedPlace,
        message: 'Place updated'
      });
    } catch (error) {
      next(error);
    }
  });

   //delete place
   router.delete('/:placeId', async function(req, res, next) {
    try {
      const deletedPlace = await Promise.resolve(placesMock[0].id);
      res.status(200).json({
        data: deletedPlace,
        message: 'Place deleted'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = placesApi;
