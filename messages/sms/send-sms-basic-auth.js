require('dotenv').config({ path: __dirname + '/../.env' });
const { Vonage } = require('@vonage/server-sdk');
const { Channels } = require('@vonage/messages');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const MESSAGES_TO_NUMBER = process.env.MESSAGES_TO_NUMBER;
const SMS_SEENDER_ID = process.env.SMS_SEENDER_ID;
const MESSAGES_API_URL = process.env.MESSAGES_API_URL;

/**
 * By leaving out the applicationId and privateKey parameters, the Vonage
 * SDK will use basic authentication to authenticate with the Messages API.
 *
 * @link https://developer.vonage.com/en/messages/technical-details#authentication
 */
const vonage = new Vonage(
  {
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET,
  },
  {
    ...(MESSAGES_API_URL ? {apiHost: MESSAGES_API_URL} : {}),
  },
);

vonage.messages.send({
  messageType: 'sms',
  channel: Channels.SMS,
  text: 'This is an SMS text message sent using the Messages API',
  to: MESSAGES_TO_NUMBER,
  from: SMS_SEENDER_ID,
})
  .then(({ messageUUID }) => console.log(messageUUID))
  .catch((error) => console.error(error));
