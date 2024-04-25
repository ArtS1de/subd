var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let orders = await req.db.any('SELECT * FROM orders')
  console.log(orders)
  res.render('orders/list', { title: 'Заказы', orders: orders })
});

module.exports = router;
