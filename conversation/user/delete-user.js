require('dotenv').config({ path: __dirname + '/../../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname +'/../../'+ process.env.VONAGE_PRIVATE_KEY;
const USER_ID = process.env.USER_ID;

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.users.deleteUser(USER_ID)
  .then(() => console.log('User deleted'))
  .catch((error) => console.error(error));

