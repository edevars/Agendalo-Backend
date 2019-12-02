const chalk = require('chalk');
const debug = require('debug')('app:scripts:movies');
const MongoLib = require('../../lib/mongo');
const { placesMock } = require('../../utils/mocks/places');

async function seedPlaces() {
  try {
    const mongoDB = new MongoLib();

    const promises = placesMock.map(async movie => {
      await mongoDB.create('places', movie);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} places have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedPlaces();