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
const text = 'A text message sent using the Vonage SMS API';

vonage.sms.send({ to, from, text })
  .then((resp) => {
    console.log('Message sent successfully');
    console.log(resp);
  })
  .catch((err) => {
    console.log('There was an error sending the messages.');
    console.error(err);
  });
