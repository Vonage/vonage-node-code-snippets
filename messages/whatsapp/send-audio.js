require('dotenv').config({ path: __dirname + '/../../.env' });

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;
const NEXMO_APPLICATION_PRIVATE_KEY_PATH =
	__dirname + '/../../' + process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const BASE_URL = process.env.BASE_URL;
const AUDIO_URL = process.env.AUDIO_URL;

const Nexmo = require('nexmo');

const nexmo = new Nexmo(
	{
		apiKey: NEXMO_API_KEY,
		apiSecret: NEXMO_API_SECRET,
		applicationId: NEXMO_APPLICATION_ID,
		privateKey: NEXMO_APPLICATION_PRIVATE_KEY_PATH,
	},
	{
		apiHost: BASE_URL,
	}
);

nexmo.channel.send(
	{ type: 'whatsapp', number: TO_NUMBER },
	{ type: 'whatsapp', number: WHATSAPP_NUMBER },
	{
		content: {
			type: 'audio',
			audio: {
				url: AUDIO_URL,
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
