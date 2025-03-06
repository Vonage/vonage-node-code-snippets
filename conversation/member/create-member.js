require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname +'/../../'+ process.env.VONAGE_PRIVATE_KEY;
const CONV_USER_ID = process.env.CONV_USER_ID;
const CONV_ID = process.env.CONV_ID;
const CONV_MEMBER_STATE = process.env.CONV_MEMBER_STATE;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

const run = async () => {
  const member = vonage.conversations.createMember(
    CONV_ID,
    {
      user: {
        id: CONV_USER_ID,
      },
      state: CONV_MEMBER_STATE,
      channel: {
        type:'app',
      },
    },
  );
  console.log(member);
};

run();
