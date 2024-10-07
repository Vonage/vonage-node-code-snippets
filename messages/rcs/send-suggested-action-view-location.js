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
        text: 'Drop by our office!',
        suggestions: [
          {
            action: {
              text: 'View map',
              postbackData: 'postback_data_1234',
              fallbackUrl: 'https://www.google.com/maps/place/Vonage/@51.5230371,-0.0852492,15z',
              viewLocationAction: {
                latLong: {
                  latitude: '51.5230371',
                  longitude: '-0.0852492',
                },
                label: 'Vonage London Office',
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
