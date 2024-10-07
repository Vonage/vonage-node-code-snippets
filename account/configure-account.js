require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const SMS_CALLBACK_URL = process.env.SMS_CALLBACK_URL;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

async function run() {
  vonage.accounts.updateAccountCallbacks({ moCallBackUrl: SMS_CALLBACK_URL })
    .then((resp) => console.log(resp));
}
run();
