require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +'/../../'+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

const run = async () => {
  try {
    for await (const conversation of vonage.conversations.listAllConversations()) {
      console.log(conversation);
    }
  } catch (error) {
    console.error(error);
  }
};

run();
