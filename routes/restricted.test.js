const request = require('supertest');

const app = request(require('../app'));

describe('restricted router', () => {
  beforeAll(() => {
    jest.mock('./', () => require('./restricted'));
  });
  afterAll(() => {
    jest.unmock('./');
  });

  describe('get me route', () => {
    it('returns unauthorized because of no auth header', async () => {
      await app.get('/restricted/me').expect(401);
    });

    it('returns user data', async () => {
      const response = await app
        .get('/restricted/me')
        .set(
          'Authorization',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        )
        .expect(200);

      expect(typeof response.body.id).toBe('string');
      expect(typeof response.body.username).toBe('string');
    });
  });

  describe('put me route', () => {
    it('updates user info successfully', async () => {
      const body = { username: 'some_id' };
      await app
        .put('/restricted/me')
        .set(
          'Authorization',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        )
        .send(body)
        .expect(400);
    });

    it('fails to update user info because of invalid body', async () => {
      const body = { id: 'some_id', username: 'some_username' };
      const response = await app
        .put('/restricted/me')
        .set(
          'Authorization',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        )
        .send(body)
        .expect(200);

      expect(response.body).toEqual(body);
    });
  });
});
