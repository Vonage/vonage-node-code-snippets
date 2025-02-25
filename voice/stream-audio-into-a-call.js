require('dotenv').config({ path: __dirname + '/../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_CALL_ID = process.env.VOICE_CALL_ID;
const VOICE_STREAM_AUDIO = process.env.VOICE_STREAM_AUDIO;

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.streamAudio(VOICE_CALL_ID, VOICE_STREAM_AUDIO, 0)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));

const stopStream = () => {
  vonage.voice.stopStreamAudio(VOICE_CALL_ID)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error));
};

setTimeout(stopStream, 5000); // delay 5 seconds
