const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('discord'));

router.get('/redirect', passport.authenticate('discord', {
  failureRedirect: '/forbidden',
  successRedirect: process.env.SUCCESS_REDIRECT
}));

router.get('/logout', (req, res) => {
  if(req.user) {
    req.logOut();
    res.redirect('http://localhost:3000/');
  } else {
    res.redirect('http://localhost:3000/');
  }
})

module.exports = router;
