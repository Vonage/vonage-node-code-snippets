require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY

const TO_NUMBER = process.env.TO_NUMBER
const FROM_NUMBER = process.env.FROM_NUMBER
const IMAGE_URL = process.env.IMAGE_URL

const { Vonage } = require('@vonage/server-sdk');
const { MMSImage } = require('@vonage/messages');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
})

vonage.messages.send(
  new MMSImage({
    image: {
      url: IMAGE_URL,
    },
    to: TO_NUMBER,
    from: FROM_NUMBER,
  })
)
  .then(resp => console.log(resp.messageUUID))
  .catch(err => console.error(err));
