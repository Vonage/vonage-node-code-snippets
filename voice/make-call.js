require('dotenv').config({path: __dirname + '/../.env'})

const NEXMO_TO_NUMBER = process.env.NEXMO_TO_NUMBER
const NEXMO_FROM_NUMBER = process.env.NEXMO_FROM_NUMBER

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID
const NEXMO_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../"+ process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_APPLICATION_PRIVATE_KEY_PATH
})

nexmo.calls.create({
  to: [{
    type: 'phone',
    number: NEXMO_TO_NUMBER
  }],
  from: {
    type: 'phone',
    number: NEXMO_FROM_NUMBER
  },
  answer_url: ['https://developer.nexmo.com/ncco/tts.json']
})
