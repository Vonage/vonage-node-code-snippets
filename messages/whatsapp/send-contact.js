require('dotenv').config({ path: `${__dirname}/../../.env` });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
	`${__dirname}/../../${process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH}`;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
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
				type: 'contacts',
				contacts: [
					{
						addresses: [
							{
								city: 'Menlo Park',
								country: 'United States',
								country_code: 'us',
								state: 'CA',
								street: '1 Hacker Way',
								type: 'HOME',
								zip: '94025',
							},
							{
								city: 'Menlo Park',
								country: 'United States',
								country_code: 'us',
								state: 'CA',
								street: '200 Jefferson Dr',
								type: 'WORK',
								zip: '94025',
							},
						],
						birthday: '2012-08-18',
						emails: [
							{
								email: 'test@fb.com',
								type: 'WORK',
							},
							{
								email: 'test@whatsapp.com',
								type: 'WORK',
							},
						],
						name: {
							first_name: 'John',
							formatted_name: 'John Smith',
							last_name: 'Smith',
						},
						org: {
							company: 'WhatsApp',
							department: 'Design',
							title: 'Manager',
						},
						phones: [
							{
								phone: '+1 (940) 555-1234',
								type: 'HOME',
							},
							{
								phone: '+1 (650) 555-1234',
								type: 'WORK',
								wa_id: '16505551234',
							},
						],
						urls: [
							{
								url: 'https://www.facebook.com',
								type: 'WORK',
							},
						],
					},
				],
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
