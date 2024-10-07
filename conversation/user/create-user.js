require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +'/../../'+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const USER_NAME = process.env.USER_NAME;
const USER_DISPLAY_NAME = process.env.USER_DISPLAY_NAME;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.users.createUser({
  'name': USER_NAME,
  'displayName': USER_DISPLAY_NAME,
})
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
