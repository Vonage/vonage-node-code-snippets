require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = __dirname +'/../'+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

const getCalls = async () => {
  try {
    for await (const call of vonage.voice.getAllCalls()) {
      console.log(call);
    }
  } catch (error) {
    console.error(error);
  }
};

getCalls();
