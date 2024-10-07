require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + '/../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;

const { Vonage } = require('@vonage/server-sdk');
const { NCCOBuilder, Talk } = require('@vonage/voice');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

const builder = new NCCOBuilder();
builder.addAction(new Talk('This is a text to speech call from Vonage'));

vonage.voice.createOutboundCall({
  ncco: builder.build(),
  to: [
    {
      type: 'phone',
      number: TO_NUMBER,
    },
    {
      type: 'phone',
      number: VONAGE_NUMBER,
    },
  ],
})
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
