require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = __dirname +'/../'+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const UUID = process.env.UUID;
const DIGITS = '1234567890';

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.voice.playDTMF(UUID, DIGITS)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
