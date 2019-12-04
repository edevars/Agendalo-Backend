const sinon = require('sinon');
const { placesMock, filteredPlacesMock } = require('./places');

const getAllStub = sinon.stub();

getAllStub.withArgs('places').resolves(placesMock);

const tagQuery = { tags: { $in: ['Canada'] } };

getAllStub.withArgs('places', tagQuery).resolves(filteredPlacesMock('Canada'));

const createStub = sinon.stub().resolves(placesMock[0]);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};
