const request = require('supertest');
const app = require('../app'); // Assuming your app.js exports the Express app

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/worko/user')
      .send({
        email: 'test1@example.com',
        name: 'Test1 User',
        age: 31,
        city: 'Test City',
        zipCode: '12345'
      })
      .auth('admin', 'supersecret');

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get list of users', async () => {
    const res = await request(app)
      .get('/worko/user')
      .auth('admin', 'supersecret');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Add more tests for other endpoints (GET, PUT, PATCH, DELETE)
});
