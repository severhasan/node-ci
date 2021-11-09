const ApiManager = require('./api');

describe('ApiManager', () => {
  it('mocks a request', async () => {
    // const received = await ApiManager.get();
    const expected = { value: '🧙‍♂️' };

    await expect(ApiManager.get()).resolves.toEqual(expected);
  });
});
