const sleep = require('./sleep');

module.exports = class ApiManager {
  static async get() {
    await sleep();
    return { value: '🧙‍♂️' };
  }
};
