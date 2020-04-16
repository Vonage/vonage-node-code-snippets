require('dotenv').config({path: __dirname + '/../../.env'})

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID
const NEXMO_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH

const TO_NUMBER = process.env.TO_NUMBER
const VIBER_SERVICE_MESSAGE_ID = process.env.VIBER_SERVICE_MESSAGE_ID
const BASE_URL = process.env.BASE_URL

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_APPLICATION_PRIVATE_KEY_PATH
}, {
  apiHost: BASE_URL
})

nexmo.channel.send(
  { "type": "viber_service_msg", "number": TO_NUMBER },
  { "type": "viber_service_msg", "id": VIBER_SERVICE_MESSAGE_ID },
  {
    "content": {
      "type": "text",
      "text": "This is a Viber Service Message text message sent using the Messages API"
    }
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.message_uuid);
    }
  }
);
