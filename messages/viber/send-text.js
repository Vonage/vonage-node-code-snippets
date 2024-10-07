require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const VIBER_SERVICE_MESSAGE_ID = process.env.VIBER_SERVICE_MESSAGE_ID;

const { Vonage } = require('@vonage/server-sdk');
const { ViberText } = require('@vonage/messages');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new ViberText({
    text: 'This is a Viber Service Message text message sent using the Messages API',
    to: TO_NUMBER,
    from: VIBER_SERVICE_MESSAGE_ID,
  }),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
