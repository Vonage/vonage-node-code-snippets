require('dotenv').config({ path: __dirname + '/../.env' })

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const WEBHOOK_URL = process.env.WEBHOOK_URL

// By default use the command line argument. Otherwise use the environment variable.
const SEARCH_NUMBER = process.argv[2] || process.env.SEARCH_NUMBER;

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
});

nexmo.numberInsight.get({
  level: 'advancedAsync',
  number: SEARCH_NUMBER,
  callback: WEBHOOK_URL
}, (error, result) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log(result);
  }
});
