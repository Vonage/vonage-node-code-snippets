require("dotenv").config({ path: __dirname + "/../../.env" });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
  __dirname + "/../../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const WHATSAPP_TEMPLATE_NAMESPACE = process.env.WHATSAPP_TEMPLATE_NAMESPACE;
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME;
const HEADER_IMAGE_URL = process.env.HEADER_IMAGE_URL;
const BASE_URL = process.env.BASE_URL;

const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage(
  {
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET,
    applicationId: VONAGE_APPLICATION_ID,
    privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  },
  {
    apiHost: BASE_URL,
  }
);

vonage.channel.send(
  { type: "whatsapp", number: TO_NUMBER },
  { type: "whatsapp", number: WHATSAPP_NUMBER },
  {
    content: {
      type: "custom",
      custom: {
        type: "interactive",
        interactive: {
          type: "button",
          header: {
            type: "text",
            text: "Delivery time",
          },
          body: {
            text: "Which time would you like us to deliver your order at?",
          },
          footer: {
            text: "Please allow 15 mins either side of your chosen time",
          },
          action: {
            buttons: [
              {
                type: "reply",
                reply: {
                  id: "slot-1",
                  title: "15:00",
                },
              },
              {
                type: "reply",
                reply: {
                  id: "slot-2",
                  title: "16:30",
                },
              },
              {
                type: "reply",
                reply: {
                  id: "slot-3",
                  title: "17:15",
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
