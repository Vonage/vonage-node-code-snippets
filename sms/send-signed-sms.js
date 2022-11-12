require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_API_SIGNATURE_SECRET = process.env.VONAGE_API_SIGNATURE_SECRET
const TO_NUMBER = process.env.VONAGE_TO_NUMBER
const FROM_NUMBER = process.env.VONAGE_FROM_NUMBER

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  signatureSecret: VONAGE_API_SIGNATURE_SECRET,
  signatureMethod: "md5hash"
})

const from = FROM_NUMBER
const to = TO_NUMBER
const text = 'A text message sent using the Vonage SMS API'

vonage.sms.send({
    from: from,
    to: to,
    text: text,
})
    .then(resp => console.log(result))
    .catch(err => console.error(err));
