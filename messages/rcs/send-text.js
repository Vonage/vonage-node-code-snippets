require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const RCS_SENDER_ID = process.env.RCS_SENDER_ID;

const { Vonage } = require('@vonage/server-sdk');
const { RCSText } = require('@vonage/messages');
const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new RCSText({
    text: "Hello from Vonage Messages API",
    to: TO_NUMBER,
    from: RCS_SENDER_ID,
  }),
)
  .then(resp => console.log(resp.messageUUID))
  .catch(err => console.error(err));