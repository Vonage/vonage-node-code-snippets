require('dotenv').config({path: __dirname + '/../.env'})

const { Vonage } = require('@vonage/server-sdk')
const { Channels, SilentAuthChannel } = require('@vonage/verify2')

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH
const BRAND_NAME = process.env.BRAND_NAME;

const TO_NUMBER = process.argv[2];
if (!TO_NUMBER) {
  console.error('Please supply the phone number');
  return;
}

const TO_EMAIL = process.argv[3];
if (!TO_EMAIL) {
  console.error('Please supply the email');
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
      channel: SilentAuthChannel.SILENT_AUTH,
      to: TO_NUMBER,
    },
    {
      channel: Channels.EMAIL,
      to: TO_EMAIL,
    }
  ]
})
  .then(({requestId}) => console.log(requestId))
  .catch(err => console.error(err));
