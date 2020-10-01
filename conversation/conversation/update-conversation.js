require('dotenv').config({ path: `${__dirname}/../../.env` })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = `${__dirname}/../../${process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH}`
const CONV_NEW_NAME = process.env.CONV_NEW_NAME
const CONV_NEW_DISPLAY_NAME = process.env.CONV_NEW_DISPLAY_NAME
const CONVERSATION_ID = process.env.CONVERSATION_ID

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.conversations.update(
    CONVERSATION_ID,
    {"name": CONV_NEW_NAME,
    "display_name": CONV_NEW_DISPLAY_NAME}, (error, result) => {
        if(error) {
            console.error(error);
        }
        else {
            console.log(result);
        }
    });
