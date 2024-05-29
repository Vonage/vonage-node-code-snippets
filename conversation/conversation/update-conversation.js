require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const CONV_NEW_NAME = process.env.CONV_NEW_NAME;
const CONV_NEW_DISPLAY_NAME = process.env.CONV_NEW_DISPLAY_NAME;
const CONVERSATION_ID = process.env.CONVERSATION_ID;

const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

const run = async () => {
  // Load the conversation to prevent overwriting
  const conversation = await vonage.conversations.getConversation(CONVERSATION_ID);
  conversation.name = CONV_NEW_NAME;
  conversation.displayName = CONV_NEW_DISPLAY_NAME;
  await vonage.conversations.update(conversation);
};
run();
