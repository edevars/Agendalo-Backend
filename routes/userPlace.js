const express = require('express');
const UsersPlacesService = require('../services/userPlace');
const validationHandler = require('../utils/middleware/validationHandler');

// const { placeIdSchema } = require('../schemas/places');
const { userIdSchema } = require('../schemas/users');
const { createdUserPlaceSchema } = require('../schemas/usersPlaces');

function userPlacesApi(app) {
  const router = express.Router();
  app.use('/api/user-places', router);

  const userPlacesService = new UsersPlacesService();

  router.get(
    '/',
    validationHandler({ userId: userIdSchema }, 'query'),
    async function(req, res, next) {
      const { userId } = req.query;
      try {
        const userPlace = await userPlacesService.getUserPlaces({ userId });
        res.status(200).json({
          data: userPlace,
          message: 'user-places listed'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post('/', validationHandler(createdUserPlaceSchema), async function(
    req,
    res,
    next
  ) {
    const { body: userPlace } = req;
    try {
      const createdUserPlace = await userPlacesService.createUserPlace({
        userPlace
      });

      res.status(200).json({
        data: createdUserPlace,
        message: 'created user-place'
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete(
    '/',
    validationHandler({ userId: userIdSchema }, 'query'),
    async function(req, res, next) {
      const { userPlaceId } = req.params;
      try {
        const deletedUserPlaceId = await userPlacesService.deleteUserPlace({
          userPlaceId
        });

        res.status(200).json({
          data: deletedUserPlaceId,
          message: 'deleted user-place'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = userPlacesApi;
