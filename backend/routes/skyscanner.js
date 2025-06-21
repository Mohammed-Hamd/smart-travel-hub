const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/flights', async (req, res) => {
  try {
    const response = await axios.get('https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US', {
      params: {
        apiKey: process.env.SKYSCANNER_API_KEY,
        ...req.query,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Skyscanner API error' });
  }
});

module.exports = router;
