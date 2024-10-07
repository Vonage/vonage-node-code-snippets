require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_PRIVATE_KEY = __dirname + '/../' + process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const UUID = process.env.UUID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.transferCallWithNCCO(UUID, {
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
