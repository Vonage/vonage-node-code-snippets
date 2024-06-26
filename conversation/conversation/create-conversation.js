require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const CONV_NAME = process.env.CONV_NAME;
const CONV_DISPLAY_NAME = process.env.CONV_DISPLAY_NAME;

const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});


const run = async () => {
  // Load the conversation so we have all data set 
  const conversation = await vonage.conversations.createConversation({
    "name": CONV_NAME,
    "displayName": CONV_DISPLAY_NAME, 
  });

  console.log(conversation);
};
run();

