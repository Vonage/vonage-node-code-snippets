require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const CONVERSATION_ID = process.env.CONVERSATION_ID;
const MEMBER_ID = process.env.MEMBER_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
});

vonage.conversations.deleteMember(
  CONVERSATION_ID,
  MEMBER_ID,
)
  .then(() => console.log('Memeber deleted'))
  .catch((error) => console.error(error));
