const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/events', async (req, res) => {
  try {
    const response = await axios.get(process.env.SPORTS_API_URL, {
      params: {
        api_key: process.env.SPORTS_API_KEY,
        ...req.query,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Sports API error' });
  }
});

module.exports = router;
