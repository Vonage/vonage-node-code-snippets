require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const WHATSAPP_TEMPLATE_NAMESPACE = process.env.WHATSAPP_TEMPLATE_NAMESPACE;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;

const { Vonage } = require('@vonage/server-sdk');
const { WhatsAppTemplate } = require('@vonage/messages');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new WhatsAppTemplate({
    template: {
      name: `${WHATSAPP_TEMPLATE_NAMESPACE}:${WHATSAPP_TEMPLATE_NAME}`,
      parameters: [
        'Vonage Verification',
        '64873',
        '10',
      ],
    },
    to: TO_NUMBER,
    from: WHATSAPP_NUMBER,
    locale: 'en',
  }),
)
  .then(resp => console.log(resp.messageUUID))
  .catch(err => console.error(err));
