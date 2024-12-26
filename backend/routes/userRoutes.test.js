// backend/test/userRoutes.test.js

const request = require('supertest');
const app = require('../server'); // Assuming server.js exports the app instance

describe('User Routes', () => {
  it('should register a user successfully', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User registered successfully.');
  });

  it('should fail to register a user with invalid email', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({
        email: 'invalid-email',
        password: 'password123',
      });
    expect(response.status).toBe(400);
    expect(response.body.errors).toHaveLength(1);
    expect(response.body.errors[0].msg).toBe('Please provide a valid email');
  });

  it('should login successfully', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful.');
  });

  it('should fail to login with incorrect credentials', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: 'test@example.com',
        password: 'wrongpassword',
      });
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Login failed');
  });
});
