require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const USER_ID = process.env.USER_ID;
const USER_NEW_NAME = process.env.USER_NEW_NAME;
const USER_NEW_DISPLAY_NAME = process.env.USER_NEW_DISPLAY_NAME;

const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});


const run = async () => {
  // Load in all the user details to prevent overwriting
  const user = vonage.users.getUser(
    USER_ID,
  );

  user.name = USER_NEW_NAME;
  user.displayName = USER_NEW_DISPLAY_NAME;

  await vonage.users.updateUser(
    user,
  ); 
  console.log(user);
};
run();
