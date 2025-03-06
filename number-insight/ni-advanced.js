require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const INSIGHT_NUMBER = process.env.INSIGHT_NUMBER;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.numberInsights.advancedLookup(INSIGHT_NUMBER)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
