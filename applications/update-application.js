require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const NAME = process.env.NAME;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.applications.updateApplication({
  id: VONAGE_APPLICATION_ID,
  name: NAME,
  capabilities: {
    voice: {
      webhooks: {
        answer_url: {
          address: 'https://example.com/webhooks/answer',
          http_method: 'GET',
        },
        event_url: {
          address: 'https://example.com/webhooks/event',
          http_method: 'POST',
        },
      },
    },
    messages: {
      webhooks: {
        inbound_url: {
          address: 'https://example.com/webhooks/inbound',
          http_method: 'POST',
        },
        status_url: {
          address: 'https://example.com/webhooks/status',
          http_method: 'POST',
        },
      },
    },
    rtc: {
      webhooks: {
        event_url: {
          address: 'https://example.com/webhooks/rtcevent',
          http_method: 'POST',
        },
      },
    },
  },
})
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
