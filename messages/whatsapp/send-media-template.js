require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;
const IMAGE_URL = process.env.IMAGE_URL;
const WHATSAPP_TEMPLATE_REPLACEMENT_TEXT = process.env.WHATSAPP_TEMPLATE_REPLACEMENT_TEXT;

const { Vonage } = require('@vonage/server-sdk');
const { WhatsAppCustom } = require('@vonage/messages');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new WhatsAppCustom({
    custom: {
      type: 'template',
      template: {
        name: `${WHATSAPP_TEMPLATE_NAME}`,
        language: {
          policy: 'deterministic',
          code: 'en',
        },
        components: [
          {
            type: 'header',
            parameters: [
              {
                type: 'image',
                image: {
                  link: `${IMAGE_URL}`,
                },
              },
            ],
          },
          {
            type: 'body',
            parameters: [
              {
                type: 'text',
                text: `${WHATSAPP_TEMPLATE_REPLACEMENT_TEXT}`,
              },
            ],
          },
        ],
      },
    },
    to: TO_NUMBER,
    from: WHATSAPP_NUMBER,
  }),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
