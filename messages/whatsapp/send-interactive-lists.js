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
          type: "list",

          header: {
            type: "text",
            text: "Select which pill you would like",
          },
          body: {
            text: "You will be presented with a list of options",
          },
          footer: {
            text: "There are no wrong choices",
          },
          action: {
            button: "Select",
            sections: [
              {
                title: "Section A - pills",
                rows: [
                  {
                    id: "row1",
                    title: "Red",
                    description: "Take the red pill",
                  },
                  {
                    id: "row2",
                    title: "Blue",
                    description: "Take the blue pill",
                  },
                  {
                    id: "row3",
                    title: "Green",
                    description: "Take the green pill",
                  },
                ],
              },
              {
                title: "Section B - no pills",
                rows: [
                  {
                    id: "row4",
                    title: "Nothing",
                    description: "Do not take a pill",
                  },
                ],
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
