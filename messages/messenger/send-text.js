require('dotenv').config({path: __dirname + '/../../.env'})

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID
const NEXMO_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH

const FB_RECIPIENT_ID = process.env.FB_RECIPIENT_ID
const FB_SENDER_ID = process.env.FB_SENDER_ID
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
  { "type": "messenger", "id": FB_RECIPIENT_ID },
  { "type": "messenger", "id": FB_SENDER_ID },
  {
    "content": {
      "type": "text",
      "text": "This is a Facebook Messenger text message sent using the Messages API"
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
