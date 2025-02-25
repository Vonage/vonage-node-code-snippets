require('dotenv').config({ path: __dirname + '/../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_TO_NUMBER = process.env.VOICE_TO_NUMBER;
const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;
const VOICE_ANSWER_URL = process.env.VOICE_ANSWER_URL;

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.createOutboundCall({
  to: [
    {
      type: 'phone',
      number: VOICE_TO_NUMBER,
    },
  ],
  from: {
    type: 'phone',
    number: VONAGE_VIRTUAL_NUMBER,
  },
  answer_url: [VOICE_ANSWER_URL],
})
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
