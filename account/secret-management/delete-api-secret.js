require('dotenv').config({ path: __dirname + '/../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const ACCOUNT_SECRET_ID = process.env.VONAGE_SECRET_ID;
const ACCOUNT_ID = process.env.ACCOUNT_ID;

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.accounts.deleteSecret(ACCOUNT_ID, ACCOUNT_SECRET_ID)
  .then(() => console.log('Secret deleted'))
  .catch((error) => console.error(error));
