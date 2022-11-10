require('dotenv').config({
  path: __dirname + '/../.env'
});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

const REQUEST_ID = process.argv[2];
if (!REQUEST_ID) {
  console.error('Please supply the `request_id`');
  return;
}

const CODE = process.argv[3];
if (!CODE) {
  console.error('Please supply the confirmation code');
  return;
}

const { Vonage } = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
}, {
  debug: true
});

vonage.verify.check(REQUEST_ID, CODE)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
