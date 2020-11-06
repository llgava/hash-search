const router = require('express').Router();
const passport = require('passport');

// Used to authenticate the User via .../auth
router.get('/', passport.authenticate('discord'));

// If authentication is successful, the user will be redirected to the main page.
router.get('/redirect', passport.authenticate('discord', {
  failureRedirect: process.env.FAILURE_REDIRECT,
  successRedirect: process.env.SUCCESS_REDIRECT
}));

module.exports = router;
