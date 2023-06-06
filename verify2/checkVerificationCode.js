require('dotenv').config({path: __dirname + '/../.env'})

const { Vonage } = require('@vonage/server-sdk')

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH

const REQUEST_ID = process.argv[2];
if (!REQUEST_ID) {
  console.error('Please supply the `request_id`');
  return;
}

const CODE = process.argv[3];
if (!CODE) {
  console.error('Please supply the `code  `');
  return;
}

const vonage = new Vonage (new Auth({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
}))

vonage.verify2.checkCode(REQUEST_ID, CODE)
  .then(status => console.log(`The status is ${status}`) 
  )
  .catch(err => console.error(err));
