require('dotenv').config({path: __dirname + '/../.env'})

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const TO_NUMBER = process.env.NEXMO_TO_NUMBER
const NEXMO_BRAND_NAME = process.env.NEXMO_BRAND_NAME

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
})

const from = NEXMO_BRAND_NAME
const to = TO_NUMBER
const text = 'こんにちは世界'
const opts = {
  "type": "unicode"
}

nexmo.message.sendSms(from, to, text, opts, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
