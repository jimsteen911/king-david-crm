const axios = require('axios');

const getOpportunities = async (req, res) => {
  try {
    const { keywords = '', naics = '' } = req.query;

    const response = await axios.get('https://api.sam.gov/opportunities/v2/search', {
      params: {
        api_key: process.env.SAM_API_KEY,
        limit: 10,
        naics,
        keywords
      }
    });

    res.json(response.data);
  } catch (err) {
    console.error('SAM.gov fetch failed:', err.message);
    res.status(500).json({ message: 'SAM.gov API error' });
  }
};

module.exports = { getOpportunities };
