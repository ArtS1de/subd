var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let order_statuses = await req.db.any('SELECT * FROM order_statuses')
  console.log(order_statuses)
  res.render('order_statuses/list', { title: 'Статусы заказа', order_statuses: order_statuses })
});

module.exports = router;
