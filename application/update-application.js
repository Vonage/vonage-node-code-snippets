require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.applications.updateApplication({
  id: VONAGE_APPLICATION_ID,
  name: 'New App Name',
  capabilities: {
    messages: {
      webhooks: {
        inboundUrl: {
          address: 'https://example.com/webhooks/inbound',
          httpMethod: 'POST',
        },
        statusUrl: {
          address: 'https://example.com/webhooks/status',
          httpMethod: 'POST',
        },
      },
    },
    voice: {
      webhooks: {
        answerUrl: {
          address: 'https://example.com/webhooks/answer',
          httpMethod: 'POST',
        },
        eventUrl: {
          address: 'https://example.com/webhooks/event',
          httpMethod: 'POST',
        },
      },
    },
    rtc: {
      webhooks: {
        eventUrl: {
          address: 'https://example.com/webhooks/event',
          httpMethod: 'POST',
        },
      },
    },
    vbc: {},
    verify: {
      webhooks: {
        statusUrl: {
          address: 'https://example.com/webhooks/status',
          httpMethod: 'POST',
        },
      },
    },
  },
})
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
