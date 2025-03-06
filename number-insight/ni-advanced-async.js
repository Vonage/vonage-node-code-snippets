require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const INSIGHT_NUMBER = process.env.INSIGHT_NUMBER;
const INSIGHT_CALLBACK_URL = process.env.INSIGHT_CALLBACK_URL;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.numberInsight.asyncAdvancedLookup(
  INSIGHT_NUMBER,
  INSIGHT_CALLBACK_URL,
)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
