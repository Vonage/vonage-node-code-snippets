require('dotenv').config({ path: __dirname + '/../.env' })

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID
const NAME = process.env.NAME

const Nexmo = require('nexmo')

var nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET
}, {
    debug: true
});

nexmo.applications.update(NEXMO_APPLICATION_ID, {
    name: NAME,
    capabilities: {
      voice: {
        webhooks: {
          answer_url: {
            address: "https://example.com/webhooks/answer",
            http_method: "GET"
          },
          event_url: {
            address: "https://example.com/webhooks/event",
            http_method: "POST"
          }
        }
      },
      messages: {
        webhooks: {
          inbound_url: {
            address: "https://example.com/webhooks/inbound",
            http_method: "POST"
          },
          status_url: {
            address: "https://example.com/webhooks/status",
            http_method: "POST"
          }
        }
      },
      rtc: {
        webhooks: {
          event_url: {
            address: "https://example.com/webhooks/rtcevent",
            http_method: "POST"
          }
        }
      }
    }
}, (error, result) => {
  if(error) {
    console.error(error);
  }
  else {
    console.log(result);
  }
});
