require('dotenv').config({ path: __dirname + '/../../.env' })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + "/../../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH
const MEMBER_ID = process.env.MEMBER_ID
const CONVERSATION_ID = process.env.CONVERSATION_ID
const YOUR_EVENT_NAME = process.env.YOUR_EVENT_NAME

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.conversations.events.create(CONVERSATION_ID, {
    "type": `custom:${YOUR_EVENT_NAME}`,
    "from": MEMBER_ID,
    "body": {
      "your": "data"
    }
  },
  (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
