require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +'/../../'+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const CONVERSATION_ID = process.env.CONVERSATION_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

const run = async () => {
  try {
    for await (const event of vonage.conversations.listAllEvents(CONVERSATION_ID)) {
      console.log(event);
    }
  } catch (error) {
    console.error(error);
  }
};

run();
