require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const SMS_TO_NUMBER = process.env.VONAGE_SMS_TO_NUMBER;
const SMS_SENDER_ID = process.env.SMS_SENDER_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

const from = SMS_SENDER_ID;
const to = SMS_TO_NUMBER;
const text = 'こんにちは世界';
const type = 'unicode';

vonage.sms.send({ to, from, text, type })
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
