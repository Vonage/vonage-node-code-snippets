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

const run = async () => {
  // Load in all the member details to prevent overwriting
  const member = vonage.conversations.getMember(
    CONVERSATION_ID,
    MEMBER_ID,
  );

  member.channel.type = 'app';

  await vonage.conversations.updateMember(
    CONVERSATION_ID,
    MEMBER_ID,
    member,
  );
  console.log(member);
};

run();
