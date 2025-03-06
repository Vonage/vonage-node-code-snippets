require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const VERIFY_BRAND_NAME = process.env.VERIFY_BRAND_NAME;
const VERIFY_NUMBER = process.env.VERIFY_NUMBER;
const VERIFY_TO_EMAIL = process.env.VERIFY_TO_EMAIL;

const { Vonage } = require('@vonage/server-sdk');
const { Channels, SilentAuthChannel } = require('@vonage/verify2');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.verify2.newRequest({
  brand: VERIFY_BRAND_NAME,
  workflow: [
    {
      channel: SilentAuthChannel.SILENT_AUTH,
      to: VERIFY_NUMBER,
    },
    {
      channel: Channels.EMAIL,
      to: VERIFY_TO_EMAIL,
    },
  ],
})
  .then(({requestId}) => console.log(requestId))
  .catch((err) => console.error(err));
