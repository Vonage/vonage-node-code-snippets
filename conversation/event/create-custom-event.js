require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const MEMBER_ID = process.env.MEMBER_ID;
const CONVERSATION_ID = process.env.CONVERSATION_ID;
const YOUR_EVENT_NAME = process.env.YOUR_EVENT_NAME;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.conversations.createEvent(
  CONVERSATION_ID,
  {
    'type': `custom:${YOUR_EVENT_NAME}`,
    'from': MEMBER_ID,
    'body': {
      'your': 'data',
    },
  },
)
  .then((event) => console.log(event))
  .catch((error) => console.error(error));
