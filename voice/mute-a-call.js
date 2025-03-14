require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_CALL_ID = process.env.VOICE_CALL_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.muteCall(VOICE_CALL_ID)
  .then(() => console.log('Call Muted'))
  .catch((error) => console.error(error));

const unmute = () => {
  vonage.voice.unmuteCall(VOICE_CALL_ID)
    .then(() => console.log('Unmuted Call'))
    .catch((error) => console.error(error));
};

setTimeout(unmute, 5000); // delay 5 seconds
