const joi = require('@hapi/joi');
const { placeIdSchema } = require('./places');

const { userIdSchema } = require('./users');

const userPlaceIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/);

const createdUserPlaceSchema = {
  userId: userIdSchema,
  placeId: placeIdSchema
};

module.export = {
  userPlaceIdSchema,
  createdUserPlaceSchema
};
