require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;
const COUNTRY_CODE = process.env.COUNTRY_CODE;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.number.cancelNumber({
  country: COUNTRY_CODE,
  msisdn: VONAGE_NUMBER,
})
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
