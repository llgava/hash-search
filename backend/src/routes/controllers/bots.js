const router = require('express').Router();
const Bot = require('../../database/models/Bot');
const User = require('../../database/models/User');

// List all the bots.
router.get('/all', async (req, res) => {
  const model = await Bot.find();

  if(model.length !== 0) {
    res.status(200).json(model);
  } else {
    res.json({
      error: true,
      message: 'This collection has no data.'
    });
  }
});

// List a bot data via their name.
router.get('/name/:name', async (req, res) => {
  const botName = req.params.name;
  const model = await Bot.findOne({ name: botName });

  if(model !== null) {
    res.status(200).json(model);
  } else {
    res.json({
      error: true,
      message: 'This bot does not exist.'
    });
  }
});

// List all bots from a user via their dsId.
router.get('/owner/:ownerID', async (req, res) => {
  const ownerID = req.params.ownerID;
  const model = {
    bot: await Bot.find({ ownerId: ownerID }),
    user: await User.findOne( { dsId: ownerID})
  }

  if(model.user === null) {
    res.json({ Error: 'This user do not exist.' });
    return;
  }

  if(model.bot.length !== 0) res.json(model.bot);
   else res.json({ Error: 'This user has not bots published.' });
});

module.exports = router;
