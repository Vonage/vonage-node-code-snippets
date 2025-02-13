require('dotenv').config({ path: __dirname + '/../../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname + '/../../' + process.env.VONAGE_PRIVATE_KEY;
const CONV_EVENT_FROM = process.env.CONV_EVENT_FROM;
const CONV_EVENT_TYPE = process.env.CONV_EVENT_TYPE;
const CONV_ID = process.env.CONV_ID;

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.conversations.createEvent(
  CONV_ID,
  {
    'type': CONV_EVENT_TYPE,
    'from': CONV_EVENT_FROM,
    'body': {
      'text': 'message',
    },
  },
)
  .then((event) => console.log(event))
  .catch((error) => console.error(error));
