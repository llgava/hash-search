const router = require('express').Router();

router.get('/', (req, res) => {
  if(req.user) {
    req.logOut();
    res.redirect(process.env.SUCCESS_REDIRECT);
  } else {
    res.redirect(process.env.SUCCESS_REDIRECT);
  }
});

module.exports = router;
