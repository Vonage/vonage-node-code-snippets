require('dotenv').config({ path: __dirname + '/../../.env' });

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;
const NEXMO_APPLICATION_PRIVATE_KEY_PATH =
	__dirname + '/../../' + process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const WHATSAPP_TEMPLATE_NAMESPACE = process.env.WHATSAPP_TEMPLATE_NAMESPACE;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;
const HEADER_IMAGE_URL = process.env.HEADER_IMAGE_URL;
const BASE_URL = process.env.BASE_URL;

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
