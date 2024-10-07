require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const WHATSAPP_TEMPLATE_NAMESPACE = process.env.WHATSAPP_TEMPLATE_NAMESPACE;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;
const HEADER_IMAGE_URL = process.env.HEADER_IMAGE_URL;

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
    to: TO_NUMBER,
    from: WHATSAPP_NUMBER,
  }),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
