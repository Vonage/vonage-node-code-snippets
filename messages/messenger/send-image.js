require('dotenv').config({ path: `${__dirname}/../../.env` });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
	`${__dirname}/../../${process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH}`;

const FB_RECIPIENT_ID = process.env.FB_RECIPIENT_ID;
const FB_SENDER_ID = process.env.FB_SENDER_ID;
const BASE_URL = process.env.BASE_URL;
const IMAGE_URL = process.env.IMAGE_URL;

const Vonage = require('@vonage/server-sdk');

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

vonage.channel.send(
	{ type: 'messenger', id: FB_RECIPIENT_ID },
	{ type: 'messenger', id: FB_SENDER_ID },
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
