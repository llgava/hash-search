const router = require('express').Router();
const fetch = require('node-fetch');
const { base } = require('../../database/models/Bot');

// List all the bots.
router.get('/:client_id', async (req, res) => {
  const clientID = req.params.client_id;
  const baseURL = 'https://discord.com/api/v8/users/';
  const token = process.env.BOT_TOKEN;

  const fetchClient = await fetch(`${baseURL}${clientID}`, {
    headers: {
      'Authorization': `Bot ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  const clientData = await fetchClient.json();

  res.json(clientData)
});

module.exports = router;
