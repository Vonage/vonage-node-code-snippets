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
    to: TO_NUMBER,
    from: RCS_SENDER_ID,
  }),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
