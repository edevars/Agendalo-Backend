const express = require('express');
const PlacesService = require('../services/places');

const {
  placeIdSchema,
  createPlaceSchema,
  updatePlaceSchema
} = require('../schemas/places');

const validationHandler = require('../utils/middleware/validationHandler');

function placesApi(app) {
  const router = express.Router();
  app.use('/api/places', router);

  const placesService = new PlacesService();

  //get all the places
  router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
      const places = await placesService.getPlaces({ tags });

      res.status(200).json({
        data: places,
        message: 'Places listed'
      });
    } catch (error) {
      next(error);
    }
  });

  //get place by id
  router.get(
    '/:placeId',
    validationHandler({ placeId: placeIdSchema }, 'params'),
    async function(req, res, next) {
      const { placeId } = req.params;
      try {
        const placeById = await placesService.getPlaceById({ placeId });
        res.status(200).json({
          data: placeById,
          message: 'Place listed by ID'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  //create place
  router.post('/', validationHandler(createPlaceSchema), async function(
    req,
    res,
    next
  ) {
    const { body: place } = req;
    try {
      const createdPlaceId = await placesService.createPlace({ place });
      res.status(201).json({
        data: createdPlaceId,
        message: 'Place created'
      });
    } catch (error) {
      next(error);
    }
  });

  //update place
  router.put(
    '/:placeId',
    validationHandler({ placeId: placeIdSchema }, 'params'),
    validationHandler(updatePlaceSchema),
    async function(req, res, next) {
      const { placeId } = req.params;
      const { body: place } = req;
      try {
        const updatedPlace = await placesService.updatePlace({
          placeId,
          place
        });
        res.status(200).json({
          data: updatedPlace,
          message: 'Place updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  //delete place
  router.delete('/:placeId', 
  validationHandler({ placeId: placeIdSchema }, 'params'),
  async function(req, res, next) {
    const { placeId } = req.params;
    try {
      const deletedPlace = await placesService.deletePlace({ placeId });
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
