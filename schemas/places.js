const joi = require('@hapi/joi');

const placeIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const placeName = joi.string().max(50);
const placeCountryName = joi.string().max(20);
const placeCover = joi.string().uri();
const placeDescription = joi
  .string()
  .min(120)
  .max(250);
const placeAvailableSits = joi
  .number()
  .min(30)
  .max(80);

const placeCost = joi.number();

const createPlaceSchema = {
  name: placeName.required(),
  countryName: placeCountryName.required(),
  cover: placeCover.required(),
  description: placeDescription.required(),
  availableSits: placeAvailableSits.required(),
  cost: placeCost.required()
};

const updatePlaceSchema = {
  name: placeName,
  countryName: placeCountryName,
  cover: placeCover,
  description: placeDescription,
  availableSits: placeAvailableSits,
  cost: placeCost
};

module.exports = {
  placeIdSchema,
  createPlaceSchema,
  updatePlaceSchema
};
