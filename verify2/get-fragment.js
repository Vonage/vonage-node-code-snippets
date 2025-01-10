require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const FRAGMENT_ID = process.env.FRAGMENT_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage ({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.verify2.getTemplateFragment(TEMPLATE_ID, FRAGMENT_ID)
  .then((fragment) => console.log(fragment))
  .catch((error) => console.error(error));
