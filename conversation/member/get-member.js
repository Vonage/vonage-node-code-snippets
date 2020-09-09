require('dotenv').config({ path: __dirname + '/../../.env' })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH
const CONVERSATION_ID = process.env.CONVERSATION_ID
const MEMBER_ID = process.env.MEMBER_ID

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.conversations.members.get(CONVERSATION_ID,
        MEMBER_ID,
        (error, result) => {
        if(error) {
            console.error(error);
        }
        else {
            console.log(result);
        }
    });
