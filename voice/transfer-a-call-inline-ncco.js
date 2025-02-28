require('dotenv').config({path: __dirname + '/../.env'});
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_CALL_ID = process.env.VOICE_CALL_ID;

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.transferCallWithNCCO(VOICE_CALL_ID, {
  action: 'transfer',
  destination: {
    'type': 'ncco',
    'ncco': [
      {
        'action': 'talk',
        'text': 'This is a transfer action using an inline NCCO',
      },
    ],
  },
})
  .then(() => console.log('Call Transferred'))
  .catch((error) => console.error(error));
