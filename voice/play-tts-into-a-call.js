require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VOICE_CALL_ID = process.env.VOICE_CALL_ID;
const VOICE_TEXT = process.env.VOICE_TEXT;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.playTTS(
  VOICE_CALL_ID,
  {
    action: 'talk',
    text: VOICE_TEXT,
    language: 'en-US',
  })
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
