require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const REQUEST_ID = process.argv[2] || process.env.REQUEST_ID;
const CODE = process.argv[3] || process.env.CODE;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage ({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.verify2.checkCode(REQUEST_ID, CODE)
  .then((status) => console.log(`The status is ${status}`),
  )
  .catch((err) => console.error(err));
