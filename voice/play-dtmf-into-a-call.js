require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_CALL_ID = process.env.VOICE_CALL_ID;
const VOICE_DTMF_DIGITS = process.env.VOICE_DTMF_DIGITS;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.playDTMF(VOICE_CALL_ID, VOICE_DTMF_DIGITS)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
