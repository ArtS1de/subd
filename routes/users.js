var express = require('express');
var router = express.Router();

/*// Middleware для проверки прав доступа
function checkAccess(req, res, next) {
  console.log(req.user.role)
  if (req.user && req.user.role !== 'employee') {
    next();
  } else {
    res.status(403).send('У вас нет доступа к этой странице');
  }
}*/

/* GET users listing. */
/*router.get('/', /*checkAccess, async function(req, res, next) {
  let users = await req.db.any('SELECT * FROM users')
  console.log(users)
  res.render('users/list', { title: 'Пользователи', users: users })
});*/

router.get('/', async function(req, res, next) {

  res.render('users/list', { title: 'Пользователи' })

});

module.exports = router;
