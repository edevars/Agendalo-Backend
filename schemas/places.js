const joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const placeIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const placeName = joi.string().max(50);
const placeCountryName = joi.string().max(20);
const placeCover = joi.string().uri();
const placeDescription = joi
  .string()
  .min(120)
  .max(250);
const placeAvailableSits = joi.number().min(0);

const placeCost = joi.number();

const placeDate = joi.date().format('DD-MM-YYYY');

const createPlaceSchema = {
  name: placeName.required(),
  countryName: placeCountryName.required(),
  cover: placeCover.required(),
  description: placeDescription.required(),
  availableSits: placeAvailableSits.required(),
  cost: placeCost.required(),
  date: placeDate.required()
};

const updatePlaceSchema = {
  name: placeName,
  countryName: placeCountryName,
  cover: placeCover,
  description: placeDescription,
  availableSits: placeAvailableSits,
  cost: placeCost,
  date: placeDate
};

module.exports = {
  placeIdSchema,
  createPlaceSchema,
  updatePlaceSchema
};
