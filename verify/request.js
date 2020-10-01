require('dotenv').config({
  path: `${__dirname}/../.env`
});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const RECIPIENT_NUMBER = process.env.RECIPIENT_NUMBER;
const BRAND_NAME = process.env.BRAND_NAME;

const Vonage = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

vonage.verify.request({
  number: RECIPIENT_NUMBER,
  brand: BRAND_NAME
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    const verifyRequestId = result.request_id;
    console.log('request_id', verifyRequestId);
  }
});
