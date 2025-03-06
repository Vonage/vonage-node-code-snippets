require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_TO_NUMBER = process.env.VOICE_TO_NUMBER;
const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;

const { Vonage } = require('@vonage/server-sdk');
const { NCCOBuilder, Talk } = require('@vonage/voice');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

const builder = new NCCOBuilder();
builder.addAction(new Talk('This is a text to speech call from Vonage'));

vonage.voice.createOutboundCall({
  ncco: builder.build(),
  to: [
    {
      type: 'phone',
      number: VOICE_TO_NUMBER,
    },
    {
      type: 'phone',
      number: VONAGE_VIRTUAL_NUMBER,
    },
  ],
})
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
