require('dotenv').config({ path: __dirname + '/../../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname + '/../../' + process.env.VONAGE_PRIVATE_KEY;
const CONV_ID = process.env.CONV_ID;
const CONV_EVENT_ID = process.env.CONV_EVENT_ID;

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.conversations.deleteEvent(CONV_ID, CONV_EVENT_ID)
  .then(() => console.log('Event deleted'))
  .catch((error) => console.error(error));
