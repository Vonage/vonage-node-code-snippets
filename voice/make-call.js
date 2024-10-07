require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + '/../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;
const ANSWER_URL = 'https://raw.githubusercontent.com/nexmo-community/ncco-examples/gh-pages/text-to-speech.json';

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.voice.createOutboundCall({
  to: [
    {
      type: 'phone',
      number: TO_NUMBER,
    },
  ],
  from: {
    type: 'phone',
    number: VONAGE_NUMBER,
  },
  answer_url: [ANSWER_URL],
})
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
