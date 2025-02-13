require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname + '/../../' + process.env.VONAGE_PRIVATE_KEY;
const CONV_ID = process.env.CONV_ID;
const CONV_MEMBER_ID = process.env.CONV_MEMBER_ID;
const CONV_MEMBER_STATE = process.env.CONV_MEMBER_STATE;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

const run = async () => {
  // Load in all the member details to prevent overwriting
  const member = vonage.conversations.getMember(
    CONV_ID,
    CONV_MEMBER_ID,
  );

  member.state = CONV_MEMBER_STATE;

  await vonage.conversations.updateMember(
    CONV_ID,
    CONV_MEMBER_ID,
    member,
  );
  console.log(member);
};

run();
