require('dotenv').config({path: __dirname + '/../../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH

const TO_NUMBER = process.env.TO_NUMBER
const VIBER_SERVICE_MESSAGE_ID = process.env.VIBER_SERVICE_MESSAGE_ID
const BASE_URL = process.env.BASE_URL

const Vonage = require('@vonage/server-sdk')
const ViberText = require('@vonage/server-sdk/lib/Messages/ViberText');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
}, {
  apiHost: BASE_URL
})

vonage.messages.send(
  new ViberText("This is a Viber Service Message text message sent using the Messages API", TO_NUMBER, VIBER_SERVICE_MESSAGE_ID),
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.message_uuid);
    }
  }
);
