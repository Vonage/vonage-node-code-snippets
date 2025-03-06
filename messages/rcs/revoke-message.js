require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const MESSAGES_API_URL = process.env.MESSAGES_API_URL;
const MESSAGE_ID = process.env.MESSAGE_ID;

const { Vonage } = require('@vonage/server-sdk');

/**
 * It is best to send messages using JWT instead of basic auth. If you leave out
 * apiKey and apiSecret, the messages SDK will send requests using JWT tokens
 *
 * @link https://developer.vonage.com/en/messages/technical-details#authentication
 */
const vonage = new Vonage(
  {
    applicationId: VONAGE_APPLICATION_ID,
    privateKey: VONAGE_PRIVATE_KEY,
  },
  {
    ...(MESSAGES_API_URL ? {apiHost: MESSAGES_API_URL} : {}),
  },
);

vonage.messages.updateMessage(MESSAGE_ID, 'revoked')
  .then(() => console.log('Message revoked'))
  .catch((error) => console.error(error));
