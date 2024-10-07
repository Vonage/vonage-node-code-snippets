require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const RCS_SENDER_ID = process.env.RCS_SENDER_ID;
const FILE_URL = process.env.FILE_URL;

const { Vonage } = require('@vonage/server-sdk');
const { RCSFile } = require('@vonage/messages');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new RCSFile({
    file: {
      url: FILE_URL,
    },
    to: TO_NUMBER,
    from: RCS_SENDER_ID,
  }),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
