const request = require('supertest');

const app = request(require('../app'));

describe('index router', () => {
  beforeAll(() => {
    jest.mock('./', () => require('./homepage'));
  });
  afterAll(() => {
    jest.unmock('./');
  });

  it('returns hello world string from main route', async () => {
    const response = await app.get('/').expect(200);

    expect(response.text).toBe('Hello world!');
  });

  it('makes a successful post request with valid body', async () => {
    const body = { input: 'my-input-value' };
    const response = await app.post('/post').send(body).expect(200);

    expect(response.body).toEqual(body);
  });

  it('makes a unsuccesful post request with invalid body', async () => {
    const body = { input: 1 };
    const response = await app.post('/post').send(body).expect(400);

    expect(response.text).toBe('Invalid input');
  });
});
