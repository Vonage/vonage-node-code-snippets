require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VERIFY_NUMBER = process.env.VERIFY_NUMBER;
const VERIFY_BRAND_NAME = process.env.VERIFY_BRAND_NAME;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.verify.start({
  number: VERIFY_NUMBER,
  brand: VERIFY_BRAND_NAME,
})
  .then(({ requestId } ) => console.log(requestId))
  .catch((error) => console.error(error));
