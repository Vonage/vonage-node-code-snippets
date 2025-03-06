require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname + '/../../' + process.env.VONAGE_PRIVATE_KEY;
const CONV_EVENT_FROM = process.env.CONV_EVENT_FROM;
const CONV_ID = process.env.CONVERSATION_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.conversations.createEvent(
  CONV_ID,
  {
    'type': 'custom:YOUR_EVENT_NAME',
    'from': CONV_EVENT_FROM,
    'body': {
      'your': 'data',
    },
  },
)
  .then((event) => console.log(event))
  .catch((error) => console.error(error));
