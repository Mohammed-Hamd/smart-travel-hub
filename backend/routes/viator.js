const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/activities', async (req, res) => {
  try {
    const response = await axios.get('https://viatorapi.sandbox.viator.com/service/content/attractions', {
      headers: {
        'exp-api-key': process.env.VIATOR_API_KEY,
      },
      params: req.query,
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Viator API error' });
  }
});

module.exports = router;
