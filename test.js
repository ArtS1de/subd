const server = require('./app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('User Endpoints', () => {

  it('GET /user должен показывать всех пользователей', async () => {
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

  it('GET /orders должен показывать все заказы', async () => {
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

  it('GET /clients должен показывать всех клиентов', async () => {
    const res = await requestWithSupertest.get('/api/clients');

      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('clients')
      expect(res.body.clients.length > 0)
      expect(res.body.clients[0]).toHaveProperty('id')
      expect(res.body.clients[0]).toHaveProperty('label')
  });

  it('GET /order_items должен показывать все предметы заказа', async () => {
    const res = await requestWithSupertest.get('/api/order_items');

      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('order_items')
      expect(res.body.order_items.length > 0)
      expect(res.body.order_items[0]).toHaveProperty('id')
      expect(res.body.order_items[0]).toHaveProperty('label')
      expect(res.body.order_items[0]).toHaveProperty('id_order')
      expect(res.body.order_items[0]).toHaveProperty('amount')
  });

  it('GET /order_statuses должен показывать все статусы заказов', async () => {
    const res = await requestWithSupertest.get('/api/order_statuses');

      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('status')
      expect(res.body.status.length > 0)
      expect(res.body.status[0]).toHaveProperty('id')
      expect(res.body.status[0]).toHaveProperty('label')
  });

  it('GET /payment_types должен показывать все типы платежей', async () => {
    const res = await requestWithSupertest.get('/api/payment_types');

      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('payment_types')
      expect(res.body.payment_types.length > 0)
      expect(res.body.payment_types[0]).toHaveProperty('id')
      expect(res.body.payment_types[0]).toHaveProperty('label')
  });

  it('GET /payments должен показывать все платежи', async () => {
    const res = await requestWithSupertest.get('/api/payments');

      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('payments')
      expect(res.body.payments.length > 0)
      expect(res.body.payments[0]).toHaveProperty('id')
      expect(res.body.payments[0]).toHaveProperty('id_order')
      expect(res.body.payments[0]).toHaveProperty('id_payment_type')
      expect(res.body.payments[0]).toHaveProperty('amount')
  });

  it('GET /roles должен показывать все роли', async () => {
    const res = await requestWithSupertest.get('/api/roles');

      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('roles')
      expect(res.body.roles.length > 0)
      expect(res.body.roles[0]).toHaveProperty('id')
      expect(res.body.roles[0]).toHaveProperty('code')
      expect(res.body.roles[0]).toHaveProperty('label')
  });

});