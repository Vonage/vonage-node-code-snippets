require('dotenv').config({path: __dirname + '/../.env'});
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const RECIPIENT_NUMBER = process.env.RECIPIENT_NUMBER;
const BRAND_NAME = process.env.BRAND_NAME;

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.verify.start({
  number: RECIPIENT_NUMBER,
  brand: BRAND_NAME,
})
  .then(({ requestId } ) => console.log(requestId))
  .catch((error) => console.error(error));
