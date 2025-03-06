require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const MESSAGES_MESSAGE_ID = process.env.MESSAGES_MESSAGE_ID;
const GEOSPECIFIC_MESSAGES_API_URL = process.env.GEOSPECIFIC_MESSAGES_API_URL;

const { Vonage } = require('@vonage/server-sdk');
const { UpdateMessageStatus } = require('@vonage/messages');

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
    ...(GEOSPECIFIC_MESSAGES_API_URL ? {apiHost: GEOSPECIFIC_MESSAGES_API_URL} : {}),
  },
);

vonage.messages.updateMessage(MESSAGES_MESSAGE_ID, UpdateMessageStatus.READ)
  .then(({ messageUUID }) => console.log(messageUUID))
  .catch((error) => console.error(error));
