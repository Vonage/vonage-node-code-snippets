require('dotenv').config({
  path: __dirname + '/../.env'
});

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const RECIPIENT_NUMBER = process.env.RECIPIENT_NUMBER;
const BRAND_NAME = process.env.BRAND_NAME;
const WORKFLOW_ID = process.env.WORKFLOW_ID;

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
});

nexmo.verify.request({
  number: RECIPIENT_NUMBER,
  brand: BRAND_NAME,
  workflow_id: WORKFLOW_ID
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    const verifyRequestId = result.request_id;
    console.log('request_id', verifyRequestId);
  }
});
