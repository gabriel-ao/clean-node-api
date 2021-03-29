import request from 'supertest';
import app from '../config/app';

describe('DignUp Routes ', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Gabriel',
        email: 'gabriel-ao@hotmail.com',
        password: '123',
        passwordConfirmation: '123',
      })
      .expect(200);
  });
});
