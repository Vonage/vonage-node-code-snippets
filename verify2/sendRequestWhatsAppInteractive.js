require('dotenv').config({path: __dirname + '/../.env'})

const { Vonage } = require('@vonage/server-sdk')
const { Channels } = require('@vonage/verify2')

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH
const BRAND_NAME = process.env.BRAND_NAME;

const TO_NUMBER = process.argv[2];
if (!TO_NUMBER) {
  console.error('Please supply the phone number');
  return;
}

const vonage = new Vonage(new Auth({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
}))

vonage.verify2.newRequest({
  brand: BRAND_NAME,
  workflow: [
    {
      channel: Channels.WHATSAPP_INTERACTIVE,
      to: TO_NUMBER,
    }
  ]
})
  .then(({requestId}) => console.log(requestId))
  .catch(err => console.error(err));
