/* import dotenv library and tell it where the .env file is stored
*  (where you keep confidential info like API keys)
*/
require('dotenv').config({path: __dirname + '/../.env'})

/* get 'secret' values from your .env file.
* Keep them safe from others, or you are in trouble!
* For more information:
* https://softwareengineering.stackexchange.com/questions/395128/why-must-api-keys-be-kept-private
*/
const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const TO_NUMBER = process.env.VONAGE_TO_NUMBER
const VONAGE_BRAND_NAME = process.env.VONAGE_BRAND_NAME

// import Vonage
const Vonage = require('@vonage/server-sdk')

// create vonage object that we will use to send SMS
const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
})

const from = VONAGE_BRAND_NAME
const to = TO_NUMBER
const text = 'A text message sent using the Vonage SMS API'
// send SMS
vonage.message.sendSms(from, to, text, (err, responseData) => {
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
