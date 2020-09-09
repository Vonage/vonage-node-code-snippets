require("dotenv").config({ path: __dirname + "/../.env" });

const TO_NUMBER = process.env.TO_NUMBER;
const FROM_NUMBER = process.env.FROM_NUMBER;
const VIBER_SERVICE_MESSAGE_ID = process.env.VIBER_SERVICE_MESSAGE_ID;

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
  __dirname + "/../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
});

vonage.dispatch.create(
  "failover",
  [
    {
      from: { type: "viber_service_msg", id: VIBER_SERVICE_MESSAGE_ID },
      to: { type: "viber_service_msg", number: TO_NUMBER },
      message: {
        content: {
          type: "text",
          text: "Dispatch API: Message 1"
        }
      },
      failover: {
        expiry_time: 60,
        condition_status: "read"
      }
    },
    {
      from: { type: "sms", number: FROM_NUMBER },
      to: { type: "sms", number: TO_NUMBER },
      message: {
        content: {
          type: "text",
          text: "Dispatch API: Message 2"
        }
      }
    }
  ],
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.dispatch_uuid);
    }
  }
);
