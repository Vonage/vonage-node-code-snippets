require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +'/../../'+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const CONV_NAME = process.env.CONV_NAME;
const CONV_DISPLAY_NAME = process.env.CONV_DISPLAY_NAME;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.conversations.createConversation({
  'name': CONV_NAME,
  'displayName': CONV_DISPLAY_NAME,
})
  .then((conversation) => console.log(conversation))
  .catch((error) => console.error(error));
