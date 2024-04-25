var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let payments = await req.db.any('SELECT * FROM payments')
  console.log(payments)
  res.render('payments/list', { payments: 'Платежи', payments: payments })
});

module.exports = router;
