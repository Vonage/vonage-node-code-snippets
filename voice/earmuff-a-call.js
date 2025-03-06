require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_CALL_ID = process.env.VOICE_CALL_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.earmuffCall(VOICE_CALL_ID)
  .then(() => console.log('Call earmuffed'))
  .catch((error) => console.error(error));

const unearmuff = () => {
  vonage.voice.unearmuffCall(VOICE_CALL_ID)
    .then(() => console.log('Unearmuffed call'))
    .catch((error) => console.error(error));
};

setTimeout(unearmuff, 3000); // delay 3 seconds
