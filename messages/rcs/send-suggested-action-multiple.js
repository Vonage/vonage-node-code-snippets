require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const MESSAGES_TO_NUMBER = process.env.MESSAGES_TO_NUMBER;
const RCS_SENDER_ID = process.env.RCS_SENDER_ID;
const MESSAGES_API_URL = process.env.MESSAGES_API_URL;

const { Vonage } = require('@vonage/server-sdk');
const { Channels } = require('@vonage/messages');

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
  messageType: 'custom',
  channel: Channels.RCS,
  custom: {
    contentMessage: {
      text: 'Need some help? Call us now or visit our website for more information.',
      suggestions: [
        {
          action: {
            text: 'Call us',
            postbackData: 'postback_data_1234',
            fallbackUrl: 'https://www.example.com/contact/',
            dialAction: {
              phoneNumber: '+447900000000',
            },
          },
        },
        {
          action: {
            text: 'Visit site',
            postbackData: 'postback_data_1234',
            openUrlAction: {
              url: 'http://example.com/',
            },
          },
        },
      ],
    },
  },
  to: MESSAGES_TO_NUMBER,
  from: RCS_SENDER_ID,
})
  .then(({ messageUUID }) => console.log(messageUUID))
  .catch((error) => console.error(error));
