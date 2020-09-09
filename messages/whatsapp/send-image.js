require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
	__dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const BASE_URL = process.env.BASE_URL;
const IMAGE_URL = process.env.IMAGE_URL;

const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage(
	{
		apiKey: VONAGE_API_KEY,
		apiSecret: VONAGE_API_SECRET,
		applicationId: NEXMO_APPLICATION_ID,
		privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
	},
	{
		apiHost: BASE_URL,
	}
);

vonage.channel.send(
	{ type: 'whatsapp', number: TO_NUMBER },
	{ type: 'whatsapp', number: WHATSAPP_NUMBER },
	{
		content: {
			type: 'image',
			image: {
				url: IMAGE_URL,
			},
		},
	},
	(err, data) => {
		if (err) {
			console.error(err);
		} else {
			console.log(data.message_uuid);
		}
	}
);
