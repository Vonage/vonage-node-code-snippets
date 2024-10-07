require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const FROM_NUMBER = process.env.FROM_NUMBER;

const { Vonage } = require('@vonage/server-sdk');
const { SMS } = require('@vonage/messages');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new SMS(
    'This is an SMS text message sent using the Messages API',
    TO_NUMBER,
    FROM_NUMBER,
  ),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
