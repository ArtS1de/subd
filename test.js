const server = require('./app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('User Endpoints', () => {

  it('GET /user should show all users', async () => {
    const res = await requestWithSupertest.get('/api/users');

      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('users')
      expect(res.body.users.length > 0)
      expect(res.body.users[0]).toHaveProperty('id')
      expect(res.body.users[0]).toHaveProperty('login')
      expect(res.body.users[0]).toHaveProperty('fio')
      expect(res.body.users[0]).toHaveProperty('role_label')
  });

  it('GET /user should show all users', async () => {
    const res = await requestWithSupertest.get('/api/orders');

      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('orders')
      expect(res.body.orders.length > 0)
      expect(res.body.orders[0]).toHaveProperty('id')
      expect(res.body.orders[0]).toHaveProperty('label')
      expect(res.body.orders[0]).toHaveProperty('id_status')
      expect(res.body.orders[0]).toHaveProperty('id_client')
      expect(res.body.orders[0]).toHaveProperty('amount')
  });

});