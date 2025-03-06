require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = __dirname +'/../../'+ process.env.VONAGE_PRIVATE_KEY;
const CONV_ID = process.env.CONV_ID;
const CONV_MEMBER_ID = process.env.CONV_MEMBER_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.conversations.getMember(CONV_ID, CONV_MEMBER_ID)
  .then((member) => console.log(member))
  .catch((error) => console.log(error));
