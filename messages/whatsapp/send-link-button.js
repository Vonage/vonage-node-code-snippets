require('dotenv').config({ path: `${__dirname}/../../.env` });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
	`${__dirname}/../../${process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH}`;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const WHATSAPP_TEMPLATE_NAMESPACE = process.env.WHATSAPP_TEMPLATE_NAMESPACE;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;
const HEADER_IMAGE_URL = process.env.HEADER_IMAGE_URL;
const BASE_URL = process.env.BASE_URL;

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
	{ type: 'whatsapp', number: TO_NUMBER },
	{ type: 'whatsapp', number: WHATSAPP_NUMBER },
	{
		content: {
			type: 'custom',
			custom: {
				type: 'template',
				template: {
					namespace: WHATSAPP_TEMPLATE_NAMESPACE,
					name: WHATSAPP_TEMPLATE_NAME,
					language: {
						code: 'en',
						policy: 'deterministic',
					},
					components: [
						{
							type: 'header',
							parameters: [
								{
									type: 'image',
									image: {
										link: HEADER_IMAGE_URL,
									},
								},
							],
						},
						{
							type: 'body',
							parameters: [
								{
									type: 'text',
									text: 'Anand',
								},
								{
									type: 'text',
									text: 'Quest',
								},
								{
									type: 'text',
									text: '113-0921387',
								},
								{
									type: 'text',
									text: '23rd Nov 2019',
								},
							],
						},
						{
							type: 'button',
							index: 0,
							sub_type: 'url',
							parameters: [
								{
									type: 'text',
									text: '1Z999AA10123456784',
								},
							],
						},
					],
				},
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
