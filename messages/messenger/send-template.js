require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
	__dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const FB_RECIPIENT_ID = process.env.FB_RECIPIENT_ID;
const FB_SENDER_ID = process.env.FB_SENDER_ID;
const BASE_URL = process.env.BASE_URL;
const LOGO_IMAGE_URL = process.env.LOGO_IMAGE_URL;
const HEADER_IMAGE_URL = process.env.HEADER_IMAGE_URL;
const ABOVE_BAR_CODE_IMAGE_URL = process.env.ABOVE_BAR_CODE_IMAGE_URL;

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
	{ type: 'messenger', id: FB_RECIPIENT_ID },
	{ type: 'messenger', id: FB_SENDER_ID },
	{
		content: {
			type: 'custom',
			custom: {
				attachment: {
					type: 'template',
					payload: {
						template_type: 'airline_boardingpass',
						intro_message: 'You are checked in.',
						locale: 'en_US',
						boarding_pass: [
							{
								passenger_name: 'OTHER/A',
								pnr_number: 'CG4X7U',
								seat: '1A',
								logo_image_url: LOGO_IMAGE_URL,
								header_image_url: HEADER_IMAGE_URL,
								qr_code: 'M1OTHER/A  CG4X7U nawouehgawgnapwi3jfa0wfh',
								above_bar_code_image_url: ABOVE_BAR_CODE_IMAGE_URL,
								auxiliary_fields: [
									{
										label: 'Terminal',
										value: 'T1',
									},
									{
										label: 'Departure',
										value: '30OCT 19:05',
									},
								],
								secondary_fields: [
									{
										label: 'Boarding',
										value: '18:30',
									},
									{
										label: 'Gate',
										value: 'D57',
									},
									{
										label: 'Seat',
										value: '74J',
									},
									{
										label: 'Sec.Nr.',
										value: '003',
									},
								],
								flight_info: {
									flight_number: 'KL0642',
									departure_airport: {
										airport_code: 'SFO',
										city: 'San Francisco',
										terminal: 'T1',
										gate: 'D57',
									},
									arrival_airport: {
										airport_code: 'LHR',
										city: 'London',
									},
									flight_schedule: {
										departure_time: '2018-03-02T19:05',
										arrival_time: '2018-03-05T17:30',
									},
								},
							},
						],
					},
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
