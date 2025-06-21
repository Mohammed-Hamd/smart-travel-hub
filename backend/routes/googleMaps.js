const express = require('express');
const router = express.Router();
const axios = require('axios');

// Simple test route to verify the maps endpoint is reachable
router.get('/', (req, res) => {
  res.json({ message: 'Maps API test endpoint' });
});

router.get('/geocode', async (req, res) => {
  try {
    const { address } = req.query;
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Google Maps API error' });
  }
});

module.exports = router;
