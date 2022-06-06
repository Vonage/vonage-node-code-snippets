require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
	__dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const WHATSAPP_TEMPLATE_NAMESPACE = process.env.WHATSAPP_TEMPLATE_NAMESPACE;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;
const BASE_URL = process.env.BASE_URL;

const Vonage = require('@vonage/server-sdk');
const WhatsAppTemplate = require('@vonage/server-sdk/lib/Messages/WhatsAppTemplate');

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
	new WhatsAppTemplate(
		{
			name: `${WHATSAPP_TEMPLATE_NAMESPACE}:${WHATSAPP_TEMPLATE_NAME}`,
			components: [
				{
					type: 'header',
					parameters: [
						{
							type: 'location',
							location: {
								longitude: -122.425332,
								latitude: 37.758056,
								name: 'Facebook HQ',
								address: '1 Hacker Way, Menlo Park, CA 94025',
							},
						},
					],
				},
				{
					type: 'body',
					parameters: [
						{
							type: 'text',
							text: 'Value 1',
						},
						{
							type: 'text',
							text: 'Value 2',
						},
						{
							type: 'text',
							text: 'Value 3',
						},
					],
				},
			],
		},
		{
			policy: 'deterministic',
			locale: 'en',
		},
		TO_NUMBER,
		WHATSAPP_NUMBER,
	),
	(err, data) => {
		if (err) {
			console.error(err);
		} else {
			console.log(data.message_uuid);
		}
	}
);
