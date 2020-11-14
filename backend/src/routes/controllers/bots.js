const router = require('express').Router();
const fetch = require('node-fetch');
const Bot = require('../../database/models/Bot');
const User = require('../../database/models/User');

/* GET all the bots */
router.get('/all', async (req, res) => {
  const model = await Bot.find();

  if (model.length !== 0) {
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

  if (model !== null) {
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
    user: await User.findOne({ dsId: ownerID })
  }

  if (model.user === null) {
    res.json({ Error: 'This user do not exist.' });
    return;
  }

  if (model.bot.length !== 0) res.json(model.bot);
  else res.json({ Error: 'This user has not bots published.' });
});

/* POST a new bot */
router.post('/register', async (req, res) => {
  const token = process.env.BOT_TOKEN;
  const base_url = 'https://discord.com/api/v8/users/';
  const client_id = req.body.client_id;
  const fetch_client = await fetch(`${base_url}${client_id}`, {
    headers: {
      'Authorization': `Bot ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  const client_data = await fetch_client.json();

  const CreateBot = await Bot.create({
    owner_id: req.user.dsId,
    name: req.body.name,
    description: req.body.description,
    invite_url: req.body.invite_url,
    client_id: client_id,
    avatar: client_data.avatar
  });

  CreateBot.save();
});

/* DELETE bot via _id */
router.get('/delete/:_id', async (req, res) => {
  const id = req.params._id;
  const FindBot = await Bot.findById(id);

  if(FindBot) {
    FindBot.deleteOne();
    res.status(200).json({
      error: false,
      message: 'The bot has been deleted.'
    })
  } else {
    res.json({
      error: true,
      message: 'This bot does not exist.'
    });
  }

});

module.exports = router;
