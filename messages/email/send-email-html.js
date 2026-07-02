require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const MESSAGES_TO_EMAIL = process.env.MESSAGES_TO_EMAIL;
const EMAIL_SENDER_ID = process.env.EMAIL_SENDER_ID;
const MESSAGES_API_URL = process.env.MESSAGES_API_URL;

const { Vonage } = require('@vonage/server-sdk');
const { Channels, MessageType } = require('@vonage/messages');

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
    ...(MESSAGES_API_URL ? { apiHost: MESSAGES_API_URL } : {}),
  },
);

vonage.messages.send({
  to: MESSAGES_TO_EMAIL,
  from: EMAIL_SENDER_ID,
  messageType: MessageType.HTML,
  channel: Channels.EMAIL,
  html: {
    body: '<h1>Hello from Vonage</h1><p>This is an Email HTML message sent via the Vonage Messages API.</p>'
  },
  email: {
    subject: 'Your HTML message subject'
  }
})
  .then(({ messageUUID }) => console.log(messageUUID))
  .catch((error) => console.error(error));
