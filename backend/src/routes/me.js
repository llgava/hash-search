const router = require('express').Router();

function isLogged(req, res, next) {
  if (req.user) next();
  else res.redirect('/auth');
}

router.get('/', isLogged, (req, res) => {
  res.json(req.user)
});

module.exports = router;
