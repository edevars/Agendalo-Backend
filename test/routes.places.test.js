const assert = require('assert');
const proxyquire = require('proxyquire');
const { placesMock, PlacesServicesMocks } = require('../utils/mocks/places');
const testServer = require('../utils/test.server');

describe('routes - places', function() {
  const route = proxyquire('../routes/places', {
    '../services/places': PlacesServicesMocks
  });

  const request = testServer(route);

  describe('GET /places', function() {
    //Test to get all places
    it('should response with status 200', function(done) {
      request.get('/api/places').expect(200, done);
    });

    it('should response with the list of the movies', function(done) {
      request.get('/api/places').end((err, res) => {
        assert.deepEqual(res.body, {
          data: placesMock,
          message: 'Places listed'
        });

        done()
      });
    });
  });
});
