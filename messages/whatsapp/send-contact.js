require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;

const { Vonage } = require('@vonage/server-sdk');
const { WhatsAppCustom } = require('@vonage/messages');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new WhatsAppCustom({
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
    to: TO_NUMBER,
    from: WHATSAPP_NUMBER,
  }),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
