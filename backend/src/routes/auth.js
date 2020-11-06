const router = require('express').Router();
const passport = require('passport');

// Used to authenticate the User via .../auth
router.get('/', passport.authenticate('discord'));

// If authentication is successful, the user will be redirected to the main page.
router.get('/redirect', passport.authenticate('discord', {
  failureRedirect: process.env.FAILURE_REDIRECT,
  successRedirect: process.env.SUCCESS_REDIRECT
}));

router.get('/me', (req, res) => {
  res.json(req.user);
})
/* router.get('/logout', (req, res) => {
  if(req.user) {
    req.logOut();
    res.redirect('http://localhost:3000/');
  } else {
    res.redirect('http://localhost:3000/');
  }
}) */

module.exports = router;
