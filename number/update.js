require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;
const COUNTRY_CODE = process.env.COUNTRY_CODE;
const SMS_CALLBACK_URL = process.env.SMS_CALLBACK_URL;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VOICE_CALLBACK_TYPE = process.env.VOICE_CALLBACK_TYPE;
const VOICE_CALLBACK_VALUE = process.env.VOICE_CALLBACK_VALUE;
const VOICE_STATUS_URL = process.env.VOICE_STATUS_URL;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage(
	{
		apiKey: VONAGE_API_KEY,
		apiSecret: VONAGE_API_SECRET,
	},
	{
		debug: true,
	}
);

vonage.number.updateNumber({
    country: COUNTRY_CODE,
	msisdn: VONAGE_NUMBER,
    applicationId: VONAGE_APPLICATION_ID,
    voiceCallbackType: VOICE_CALLBACK_TYPE,
    voiceCallbackValue: VOICE_CALLBACK_VALUE,
    voiceStatusCallback: VOICE_STATUS_URL,
})
    .then(resp => console.log(result))
    .catch(err => console.error(err));
