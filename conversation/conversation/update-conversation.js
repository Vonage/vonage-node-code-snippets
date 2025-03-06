require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname +'/../../'+ process.env.VONAGE_PRIVATE_KEY;
const CONV_NAME = process.env.CONV_NAME;
const CONV_DISPLAY_NAME = process.env.CONV_DISPLAY_NAME;
const CONVERSATION_ID = process.env.CONVERSATION_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

const run = async () => {
  let conversation;
  try {
    // Load the conversation to prevent overwriting
    conversation= await vonage.conversations.getConversation(CONVERSATION_ID);
  } catch (error) {
    console.error('Error loading conversation', error);
    return;
  }

  conversation.name = CONV_NAME;
  conversation.displayName = CONV_DISPLAY_NAME;

  try {
    await vonage.conversations.update(conversation);
    console.log('Conversation updated');
  } catch (error) {
    console.error('Error updating conversation', error);
  }
};

run();
