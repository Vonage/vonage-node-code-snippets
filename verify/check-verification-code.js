require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VERIFY_REQUEST_ID = process.env.VERIFY_REQUEST_ID;
const VERIFY_CODE = process.env.VERIFY_CODE;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.verify.check(VERIFY_REQUEST_ID, VERIFY_CODE)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
