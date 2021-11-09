const CallbackManager = require('./callback');

// helper function
function testErroneousCallback(isError, done) {
  function callback(value) {
    expect(value).toBe('api manager works perfectly');
    done();
  }

  try {
    // simulate a scenario where (in)valid arguments were given
    CallbackManager.callbackErrorWithThrow(isError, callback);
  } catch (err) {
    expect(err.message).toBe('api manager error');
    done();
  }
}

describe('callbacks', () => {
  test('synchronous callback ', (done) => {
    function callback(value) {
      try {
        expect(value).toBe('hello synchronous world');
        done();
      } catch (err) {
        done(err);
      }
    }

    CallbackManager.synchronousCallback(callback);
  });

  test('asynchronous callback', (done) => {
    function callback(value) {
      try {
        expect(value).toBe('hello asynchronous world');
        done();
      } catch (err) {
        done(err);
      }
    }

    CallbackManager.asynchronousCallback(callback);
  });

  test('erronous callback with throw error', (done) => {
    testErroneousCallback(true, done);
  });

  test('erronous callback with no throw error', (done) => {
    testErroneousCallback(false, done);
  });

  test('erronous callback with error as parameter', (done) => {
    function callback(error, value) {
      expect(value).toBeNull();
      expect(error).toBe('i am a 🐛');
      done();
    }
    CallbackManager.callbackErrorAsParameter(true, callback);
  });

  test('erronous callback with no error as parameter', (done) => {
    function callback(error, value) {
      expect(value).toBe('api manager works perfectly');
      expect(error).toBeNull();
      done();
    }
    CallbackManager.callbackErrorAsParameter(false, callback);
  });
});
