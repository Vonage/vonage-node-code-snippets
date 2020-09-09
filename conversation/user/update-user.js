require('dotenv').config({ path: __dirname + '/../../.env' })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH
const USER_ID = process.env.USER_ID
const USER_NEW_NAME = process.env.USER_NEW_NAME
const USER_NEW_DISPLAY_NAME = process.env.USER_NEW_DISPLAY_NAME

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.users.update(USER_ID, {
    "name": USER_NEW_NAME,
    "display_name": USER_NEW_DISPLAY_NAME}, (error, result) => {
        if(error) {
            console.error(error);
        }
        else {
            console.log(result);
        }
    });
