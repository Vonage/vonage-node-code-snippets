require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

const REQUEST_ID = process.argv[2] || process.env.REQUEST_ID;
const CODE = process.argv[3] || process.env.CODE;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.verify.check(REQUEST_ID, CODE)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
