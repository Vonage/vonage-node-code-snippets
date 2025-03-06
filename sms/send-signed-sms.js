require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const SMS_SIGNATURE = process.env.SMS_SIGNATURE;
const SMS_TO_NUMBER = process.env.VONAGE_SMS_TO_NUMBER;
const SMS_SENDER_ID = process.env.VONAGE_SMS_SENDER_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  // By passing in the signature, the SDK will sign the request for you
  // Isn't that neat?!
  signature: {
    secret: SMS_SIGNATURE,
    algorithm: 'md5hash',
  },
});


const sendMessage = async () => {
  try {
    const result = await vonage.sms.send({
      from: SMS_SENDER_ID,
      to: SMS_TO_NUMBER,
      text: 'A text message sent using the Vonage SMS API',
    });

    console.log('Message sent successfully.');
    console.log(result);
  } catch (error) {
    console.error(`Message failed with error: ${error.message}`);
  }
};

sendMessage();
