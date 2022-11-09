require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH

const TO_NUMBER = process.env.TO_NUMBER
const FROM_NUMBER = process.env.FROM_NUMBER

const { Vonage } = require('@vonage/server-sdk')
const { SMS } = require('@vonage/messages/dist/classes/SMS/SMS');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.messages.send(
  new SMS("This is an SMS text message sent using the Messages API", TO_NUMBER, FROM_NUMBER)
)
  .then(resp => console.log(resp.message_uuid))
  .catch(err => console.error(err));
