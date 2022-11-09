require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
	__dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const BASE_URL = process.env.BASE_URL;
const FILE_URL = process.env.FILE_URL;
const FILE_CAPTION = process.env.FILE_CAPTION;

const { Vonage } = require('@vonage/server-sdk');
const { File } = require('@vonage/messages/dist/classes/WhatsApp/File');

const vonage = new Vonage(
	{
		apiKey: VONAGE_API_KEY,
		apiSecret: VONAGE_API_SECRET,
		applicationId: VONAGE_APPLICATION_ID,
		privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
	},
	{
		apiHost: BASE_URL,
	}
);

vonage.messages.send(
	new File({ url: FILE_URL }, TO_NUMBER, WHATSAPP_NUMBER)
)
	.then(resp => console.log(resp.message_uuid))
	.catch(err => console.error(err));