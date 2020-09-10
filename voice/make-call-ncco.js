require('dotenv').config({path: __dirname + '/../.env'})

const TO_NUMBER = process.env.TO_NUMBER
const VONAGE_NUMBER = process.env.VONAGE_NUMBER

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + "/../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.calls.create({
  to: [{
    type: 'phone',
    number: TO_NUMBER
  }],
  from: {
    type: 'phone',
    number: VONAGE_NUMBER
  },
  ncco: [{
    "action": "talk",
    "text": "This is a text to speech call from Vonage"
  }]
}, (error, response) => {
  if (error) console.error(error)
  if (response) console.log(response)
})
