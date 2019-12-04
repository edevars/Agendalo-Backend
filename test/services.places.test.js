const assert = require('assert');
const proxyquire = require('proxyquire');

const { getAllStub, MongoLibMock } = require('../utils/mocks/mongoLib');

const { placesMock } = require('../utils/mocks/places');

describe('services - places', function() {
  const PlacesServices = proxyquire('../services/places', {
    '../lib/mongo': MongoLibMock
  });

  const placesServices = new PlacesServices();

  describe('When getPlaces method is called', async function() {
    it('should call the getAll MongoLib method', async function() {
      await placesServices.getPlaces({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of places', async function() {
      const result = await placesServices.getPlaces({});
      const expected = placesMock;
      assert.deepEqual(result, expected);
    });
  });
});
