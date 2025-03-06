require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const VERIFY_TEMPLATE_ID = process.env.VERIFY_TEMPLATE_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage ({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.verify2.createTemplateFragment(
  VERIFY_TEMPLATE_ID,
  {
    channel: 'sms',
    locale: 'en-us',
    text: 'The authentication code for your ${brand} is: ${code}',
  },
)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
