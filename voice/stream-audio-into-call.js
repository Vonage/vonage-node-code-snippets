require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = __dirname +'/../'+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const UUID = process.env.UUID;
const URL = 'https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3';

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.streamAudio(UUID, URL, 0)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));

const stopStream = () => {
  vonage.voice.stopStreamAudio(UUID)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error));
};

setTimeout(stopStream, 5000); // delay 5 seconds
