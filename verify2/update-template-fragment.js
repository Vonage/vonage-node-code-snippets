require('dotenv').config({path: __dirname + '/../.env'});
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const TEMPLATE_FRAGMENT_ID = process.env.TEMPLATE_FRAGMENT_ID;

const vonage = new Vonage ({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.verify2.getTemplateFragment(
  TEMPLATE_ID,
  {
    templateFragmentId: TEMPLATE_FRAGMENT_ID,
    text: 'The authentication code for your ${brand} is: ${code}',
  },
)
  .then((fragment) => console.log(fragment))
  .catch((error) => console.error(error));
