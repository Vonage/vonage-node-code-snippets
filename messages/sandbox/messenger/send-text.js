require('dotenv').config({ path: __dirname + '/../../.env' });
const { Vonage } = require('@vonage/server-sdk');
const { Channels } = require('@vonage/messages');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const MESSENGER_RECIPIENT_ID = process.env.MESSENGER_RECIPIENT_ID;
const MESSENGER_SENDER_ID = process.env.MESSENGER_SENDER_ID;
const MESSAGES_SANDBOX_URL = process.env.MESSAGES_SANDBOX_URL;

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
    apiHost: MESSAGES_SANDBOX_URL,
  },
);


vonage.messages.send({
  to: MESSENGER_RECIPIENT_ID,
  from: MESSENGER_SENDER_ID,
  channel: Channels.WHATSAPP,
  messageType: 'text',
  text: 'This is a Facebook Messenger text message sent using the Vonage Messages API.',
})
  .then((resp) => console.log(resp.messageUUID))
  .catch((error) => console.error(error));
