const PromiseManager = require('./promise');

describe('Promises', () => {
  it('resolves the promise', () => {
    return PromiseManager.resolve()
      .then((value) => expect(value).toBe('🐈'))
      .catch((err) => expect(err).toBeInstanceOf(Error));
  });

  it('rejects the promise', () => {
    return PromiseManager.reject()
      .then((value) => expect(value).toBe('🐈'))
      .catch(
        (err) =>
          expect(err).toBeInstanceOf(Error) && expect(err.message).toBe('😡')
      );
  });

  it('resolves the promise with async/await', async () => {
    await expect(PromiseManager.resolve()).resolves.toEqual('🐈');
  });
  it('rejects the promise with async/await', async () => {
    await expect(PromiseManager.reject()).rejects.toBeInstanceOf(Error);
  });
});
