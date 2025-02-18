require('dotenv').config({ path: __dirname + '/../../.env' });
const { Vonage } = require('@vonage/server-sdk');
const { Channels } = require('@vonage/messages');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const MESSENGER_RECIPIENT_ID = process.env.MESSENGER_RECIPIENT_ID;
const MESSENGER_SENDER_ID = process.env.MESSENGER_SENDER_ID;
const MESSAGES_AUDIO_URL = process.env.MESSAGES_AUDIO_URL;
const MESSAGES_API_URL = process.env.MESSAGES_API_URL;

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

vonage.messages.send({
  messaegType: 'audio',
  channel: Channels.MESSENGER,
  audio: {
    url: MESSAGES_AUDIO_URL,
  },
  to: MESSENGER_RECIPIENT_ID,
  from: MESSENGER_SENDER_ID,
})
  .then(({ messageUUID }) => console.log(messageUUID))
  .catch((error) => console.error(error));
