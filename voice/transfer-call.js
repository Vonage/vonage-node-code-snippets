require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = __dirname + '/../' + process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const UUID = process.env.UUID;
const NCCO_URL = 'https://raw.githubusercontent.com/nexmo-community/ncco-examples/gh-pages/text-to-speech.json';

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.transferCallWithURL(UUID, NCCO_URL)
  .then(() => console.log(`Call transfered to ${NCCO_URL}`))
  .catch((error) => console.error(error));
