const router = require('express').Router();
const Bot = require('../../database/models/Bot');
const User = require('../../database/models/User');

// bots/
router.get('/', async (req, res) => {
  const Model = await Bot.find();

  if(Model.length === 0) {
    res.json({ Error: 'This collection are empty.' });
  } else {
    res.json(Model);
  }
});

// bots/name/BOT_NAME
router.get('/name/:name', async (req, res) => {
  const botName = req.params.name;
  const Model = await Bot.findOne({ name: botName });

  if(Model !== null) res.json(Model);
   else res.json({ Error: 'This bot does not exists.' });
});

// bots/owner_id/USER_DISCORD_ID
router.get('/owner_id/:ownerId', async (req, res) => {
  const UserId = req.params.ownerId;
  const Model = await Bot.find({ ownerId: UserId });
  const ModelFindUser = await User.findOne( { dsId: UserId})

  if(ModelFindUser === null) {
    res.json({ Error: 'This user do not exist.' });
    return;
  }

  if(Model.length !== 0) res.json(Model);
   else res.json({ Error: 'This user has not bots published.' });
});

module.exports = router;
