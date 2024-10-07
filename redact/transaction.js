require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

// By default use the command line argument. Otherwise use the environment variable.
const VONAGE_REDACT_ID = process.argv[2] || process.env.VONAGE_REDACT_ID;
const VONAGE_REDACT_TYPE = process.argv[3] || process.env.VONAGE_REDACT_TYPE;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.redact.redactMessage({
  id: VONAGE_REDACT_ID,
  type: VONAGE_REDACT_TYPE,
})
  .then(() => console.log('Transaction redacted'))
  .catch((error) => console.error(error));
