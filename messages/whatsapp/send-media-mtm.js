require('dotenv').config({ path: __dirname + '/../../.env' });
const { Vonage } = require('@vonage/server-sdk');
const { Channels } = require('@vonage/messages');

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const MESSAGES_TO_NUMBER = process.env.MESSAGES_TO_NUMBER;
const WHATSAPP_SENDER_ID = process.env.WHATSAPP_SENDER_ID;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;
const MESSAGES_IMAGE_URL = process.env.MESSAGES_IMAGE_URL;
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
    type: 'template',
    template: {
      name: WHATSAPP_TEMPLATE_NAME,
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
                link: MESSAGES_IMAGE_URL,
              },
            },
          ],
        },
        {
          type: 'body',
          parameters: [
            {
              type: 'text',
              text: 'Joe Bloggs',
            },
            {
              type: 'text',
              text: 'AB123456',
            },
          ],
        },
      ],
    },
  },
})
  .then(({ messageUUID }) => console.log(messageUUID))
  .catch((error) => console.error(error));
