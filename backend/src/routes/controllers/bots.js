const router = require('express').Router();
const fetch = require('node-fetch');
const Bot = require('../../database/models/Bot');
const User = require('../../database/models/User');

/* GET all the bots */
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

/* GET bot by their name */
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

/* GET bots by their owner_id */
router.get('/owner/:ownerID', async (req, res) => {
  const ownerID = req.params.ownerID;
  const model = {
    bot: await Bot.find({ owner_id: ownerID }),
    user: await User.findOne( { dsId: ownerID})
  }

  if(model.user === null) {
    res.json({ Error: 'This user do not exist.' });
    return;
  }

  if(model.bot.length !== 0) res.json(model.bot);
  else res.json({ Error: 'This user has not bots published.' });
});

/* POST a new bot */
router.post('/register', async (req, res) => {
  const base_url = 'https://discord.com/api/v8/users/';

  const owner_id = req.user.dsId;
  const client_id = req.body.client_id;
  const name = req.body.name;
  const description = req.body.description;
  const invite_url = req.body.invite_url;

  const bot_client = await fetch(`${base_url}${client_id}`, {
    headers: {
      'Authorization': `Bot ${process.env.BOT_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  const bot_data = await bot_client.json();
  const avatar = bot_data.avatar;

  const CreateBot = await Bot.create({
    owner_id: owner_id,
    client_id: client_id,
    name: name,
    description: description,
    avatar: avatar,
    invite_url: invite_url
  });

  CreateBot.save();
})

module.exports = router;
