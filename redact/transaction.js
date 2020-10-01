require('dotenv').config({path: `${__dirname}/../.env`})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET

// By default use the command line argument. Otherwise use the environment variable.
const NEXMO_REDACT_ID = process.argv[2] || process.env.NEXMO_REDACT_ID;
const NEXMO_REDACT_TYPE = process.argv[3] || process.env.NEXMO_REDACT_TYPE;

const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

vonage.redact.transaction(NEXMO_REDACT_ID, NEXMO_REDACT_TYPE, (err) => {
  if(err) {
    console.error(err);
  }
  // On success the API returns a 204, so there is no response
});

