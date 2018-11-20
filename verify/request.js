require('dotenv').config({path: __dirname + '/../.env'});

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_TO_NUMBER = process.env.NEXMO_TO_NUMBER;
const BRAND_NAME = process.env.NEXMO_BRAND_NAME;

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET}
);

let verifyRequestId = null; // use in the check process

nexmo.verify.request({number: NEXMO_TO_NUMBER, brand: NEXMO_BRAND_NAME}, (err, result) => {
  if(err) { console.error(err); }
  else {
    verifyRequestId = result.request_id;
    console.log('request_id', verifyRequestId);
  }
});