require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_API_SIGNATURE_SECRET = process.env.VONAGE_API_SIGNATURE_SECRET;
const TO_NUMBER = process.env.VONAGE_TO_NUMBER;
const FROM_NUMBER = process.env.VONAGE_FROM_NUMBER;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  signature: {
    secret: VONAGE_API_SIGNATURE_SECRET,
    algorithm: 'md5hash',
  },
});

const from = FROM_NUMBER;
const to = TO_NUMBER;
const text = 'A text message sent using the Vonage SMS API';

const sendMessage = async () => {
  try {
    const result = await vonage.sms.send({
      from: from,
      to: to,
      text: text,
    });

    console.log('Message sent successfully.');
    console.log(result);
  } catch (error) {
    console.error(`Message failed with error: ${error.message}`);
  }
};

sendMessage();
