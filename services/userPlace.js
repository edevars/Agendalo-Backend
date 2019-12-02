const MongoLib = require('../lib/mongo');

class UserPlacesService {
  constructor() {
    this.collection = 'user-place';
    this.mongoDB = new MongoLib();
  }

  async getUserPlaces({ userId }) {
    const query = userId && { userId };
    const userPlaces = await this.mongoDB.getAll(this.collection, query);

    return userPlaces || [];
  }

  async createUserPlace({ userPlace }) {
    const createdUserPlace = this.mongoDB.getAll(this.collection, userPlace);
    return createdUserPlace;
  }

  async deleteUserPlace({ userPlaceId }) {
    const deletedUserPlace = this.mongoDB.getAll(this.collection, userPlaceId);
    return deletedUserPlace;
  }
}

module.exports = UserPlacesService;
