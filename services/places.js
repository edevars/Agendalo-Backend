const { placesMock } = require('../utils/mocks/places');

class PlacesService {
  async getPlaces() {
    const places = await Promise.resolve(placesMock);
    return places || [];
  }

  async getPlaceById() {
    const placeById = await Promise.resolve(placesMock[0]);
    return placeById || {};
  }

  async createPlace() {
    const createdPlaceId = await Promise.resolve(placesMock[0].id);
    return createdPlaceId;
  }

  async updatePlace() {
    const updatedPlaceId = await Promise.resolve(placesMock[0].id);
    return updatedPlaceId;
  }

  async deletePlace() {
    const deletedPlaceId = await Promise.resolve(placesMock[0].id);
    return deletedPlaceId;
  }
}

module.exports = PlacesService;
