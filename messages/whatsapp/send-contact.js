require('dotenv').config({ path: __dirname + '/../../.env' });
const { Vonage } = require('@vonage/server-sdk');
const { Channels } = require('@vonage/messages');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const MESSAGES_TO_NUMBER = process.env.MESSAGES_TO_NUMBER;
const WHATSAPP_SENDER_ID = process.env.WHATSAPP_SENDER_ID;
const MESSAGES_API_URL = process.env.MESSAGES_API_URL;

/**
 * It is best to send messages using JWT instead of basic auth. If you leave out
 * apiKey and apiSecret, the messages SDK will send requests using JWT tokens
 *
 * @link https://developer.vonage.com/en/messages/technical-details#authentication
 */
const vonage = new Vonage(
  {
    applicationId: VONAGE_APPLICATION_ID,
    privateKey: VONAGE_PRIVATE_KEY,
  },
  {
    ...(MESSAGES_API_URL ? {apiHost: MESSAGES_API_URL} : {}),
  },
);


vonage.messages.send({
  to: MESSAGES_TO_NUMBER,
  from: WHATSAPP_SENDER_ID,
  channel: Channels.WHATSAPP,
  messageType: 'custom',
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
})
  .then(({ messageUUID }) => console.log(messageUUID))
  .catch((error) => console.error(error));
