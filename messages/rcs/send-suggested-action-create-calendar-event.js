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
      text: 'Product Launch: Save the date!',
      suggestions: [
        {
          action: {
            text: 'Save to calendar',
            postbackData: 'postback_data_1234',
            fallbackUrl: 'https://www.google.com/calendar',
            createCalendarEventAction: {
              startTime: '2024-06-28T19:00:00Z',
              endTime: '2024-06-28T20:00:00Z',
              title: 'Vonage API Product Launch',
              description: 'Event to demo Vonage\'s new and exciting API product',
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
