require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const VERIFY_REQUEST_ID = process.env.VERIFY_REQUEST_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage ({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.verify2.cancel(VERIFY_REQUEST_ID)
  .then((status) => status
    ? console.log('Request cancelled')
    : console.log('Request was already fullfilled or request id is invalid'),
  )
  .catch((error) => console.error(error));
