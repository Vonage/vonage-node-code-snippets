require('dotenv').config({ path: __dirname + '/../../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname +'/../../'+ process.env.VONAGE_PRIVATE_KEY;
const USER_ID = process.env.USER_ID;
const USER_NAME = process.env.USER_NEW_NAME;
const USER_DISPLAY_NAME = process.env.USER_NEW_DISPLAY_NAME;

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

const run = async () => {
  // Load in all the user details to prevent overwriting
  const user = vonage.users.getUser(
    USER_ID,
  );

  user.name = USER_NAME;
  user.displayName = USER_DISPLAY_NAME;

  try {
    await vonage.users.updateUser(user);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

run();
