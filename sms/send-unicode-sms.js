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

vonage.sms.send({
  to: SMS_TO_NUMBER,
  from: SMS_SENDER_ID,
  text: 'こんにちは世界',
  type: 'unicode',
})
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
