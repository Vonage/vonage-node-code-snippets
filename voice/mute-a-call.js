require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = __dirname +'/../'+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const UUID = process.env.UUID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.muteCall(UUID)
  .then(() => console.log('Call Muted'))
  .catch((error) => console.error(error));

const unmute = () => {
  vonage.voice.unmuteCall(UUID)
    .then(() => console.log('Unmuted Call'))
    .catch((error) => console.error(error));
};

setTimeout(unmute, 5000); // delay 5 seconds
