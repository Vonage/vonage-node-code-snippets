require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VERIFY_NUMBER = process.env.VERIFY_NUMBER;
const VERIFY_PAYEE_NAME = process.env.VERIFY_PAYEE_NAME;
const VERIFY_AMOUNT = process.env.VERIFY_AMOUNT;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.verify.start({
  number: VERIFY_NUMBER,
  payee: VERIFY_PAYEE_NAME,
  amount: VERIFY_AMOUNT,
})
  .then(({ requestId } ) => console.log(requestId))
  .catch((error) => console.error(error));
