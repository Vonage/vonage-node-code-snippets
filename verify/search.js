require('dotenv').config({
  path: `${__dirname}/../.env`
});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const REQUEST_ID = process.env.REQUEST_ID;

const Vonage = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

vonage.verify.search(REQUEST_ID, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Request status:', result.status);
  }
});
