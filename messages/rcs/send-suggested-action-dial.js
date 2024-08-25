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
        text: "Call us to claim your free gift!",
        suggestions: [
          {
            action: {
              text: "Call now!",
              postbackData: "postback_data_1234",
              fallbackUrl: "https://www.example.com/contact/",
              dialAction: { 
                phoneNumber: "+447900000000", 
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
  .then(resp => console.log(resp.messageUUID))
  .catch(err => console.error(err));
