require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_CALL_ID = process.env.VOICE_CALL_ID;
const VOICE_NCCO_URL = process.env.VOICE_NCCO_URL;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.transferCallWithURL(VOICE_CALL_ID, VOICE_NCCO_URL)
  .then(() => console.log(`Call transfered to ${VOICE_NCCO_URL}`))
  .catch((error) => console.error(error));
