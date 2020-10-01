require('dotenv').config({ path: `${__dirname}/../../.env` })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = `${__dirname}/../../${process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH}`
const USER_NAME = process.env.USER_NAME
const USER_DISPLAY_NAME = process.env.USER_DISPLAY_NAME

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.users.create({
    "name": USER_NAME,
    "display_name": USER_DISPLAY_NAME}, (error, result) => {
        if(error) {
            console.error(error);
        }
        else {
            console.log(result);
        }
    });
