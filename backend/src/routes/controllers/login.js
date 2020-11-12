const router = require('express').Router();
const passport = require('passport');
const User = require('../../database/models/User');
const fetch = require('node-fetch');

// Used to authenticate the User via .../auth
router.get('/', passport.authenticate('discord'));

// If authentication is successful, the user will be redirected to the main page.
router.get('/redirect', passport.authenticate('discord'), async (req, res) => {
  const userID = req.user._id
  const token = req.query.code;

  const userByID = await User.findOneAndUpdate({ _id: userID }, { token: token });
  userByID.save();

  res.redirect('http://localhost:3001/');
});

module.exports = router;
