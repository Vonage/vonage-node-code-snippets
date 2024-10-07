require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const RCS_SENDER_ID = process.env.RCS_SENDER_ID;

const { Vonage } = require('@vonage/server-sdk');
const { RCSCustom } = require('@vonage/messages');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new RCSCustom({
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
    to: TO_NUMBER,
    from: RCS_SENDER_ID,
  }),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
