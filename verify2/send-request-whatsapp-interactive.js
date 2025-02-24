require('dotenv').config({path: __dirname + '/../.env'});
const { Vonage } = require('@vonage/server-sdk');
const { Channels } = require('@vonage/verify2');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const BRAND_NAME = process.env.BRAND_NAME;
const TO_NUMBER =  process.env.TO_NUMBER;

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.verify2.newRequest({
  brand: BRAND_NAME,
  workflow: [
    {
      channel: Channels.WHATSAPP_INTERACTIVE,
      to: TO_NUMBER,
    },
  ],
})
  .then(({requestId}) => console.log(requestId))
  .catch((err) => console.error(err));
