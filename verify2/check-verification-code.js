require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const VERIFY_REQUEST_ID = process.env.VERIFY_REQUEST_ID;
const VERIFY_CODE = process.env.VERIFY_CODE;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage ({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.verify2.checkCode(VERIFY_REQUEST_ID, VERIFY_CODE)
  .then((status) => console.log(`The status is ${status}`),
  )
  .catch((err) => console.error(err));
