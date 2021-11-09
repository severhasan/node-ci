const sleep = require('./sleep');

module.exports = class CallbackManager {
  static synchronousCallback(cb) {
    return cb('hello synchronous world');
  }

  static async asynchronousCallback(cb) {
    await sleep();
    return cb('hello asynchronous world');
  }

  static callbackErrorWithThrow(simulateError, cb) {
    if (simulateError) {
      throw new Error('api manager error');
    } else {
      cb('api manager works perfectly');
    }
  }

  static callbackErrorAsParameter(simulateError, cb) {
    if (simulateError) {
      cb('i am a 🐛', null);
    } else {
      cb(null, 'api manager works perfectly');
    }
  }
};
