require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = __dirname +'/../'+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const UUID = process.env.UUID;
const TEXT = 'This is some sample text to speech text. It could go on and on and never end.';

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.playTTS(
  UUID,
  {
    action: 'talk',
    text: TEXT,
    language: 'en-US',
  })
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
