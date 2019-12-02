const MongoLib = require('../lib/mongo');

class ApiKeysService {
  constructor() {
    this.collection = 'api-keys';
    this.mongoDB = new MongoLib();
  }

  async getApiKey({ token }) {
    const [apiKeys] = await this.mongoDB.getAll(this.collection, token);
    return apiKeys;
  }
}

module.exports = ApiKeysService;
