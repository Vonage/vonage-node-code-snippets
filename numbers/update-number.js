require('dotenv').config({ path: __dirname + '/../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;
const COUNTRY_CODE = process.env.COUNTRY_CODE;
const SMS_CALLBACK_URL = process.env.SMS_CALLBACK_URL;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VOICE_CALLBACK_TYPE = process.env.VOICE_CALLBACK_TYPE;
const VOICE_CALLBACK_VALUE = process.env.VOICE_CALLBACK_VALUE;
const VOICE_STATUS_URL = process.env.VOICE_STATUS_URL;

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.numbers.updateNumber({
  country: COUNTRY_CODE,
  msisdn: VONAGE_NUMBER,
  messagesCallbackType: 'app',
  messagesCallbackValue: VONAGE_APPLICATION_ID,
  voiceCallbackType: VOICE_CALLBACK_TYPE,
  voiceCallbackValue: VOICE_CALLBACK_VALUE,
  voiceStatusCallback: VOICE_STATUS_URL,
  moHttpUrl: SMS_CALLBACK_URL,
})
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
