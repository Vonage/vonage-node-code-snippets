require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const VIBER_SERVICE_MESSAGE_ID = process.env.VIBER_SERVICE_MESSAGE_ID;
const IMAGE_URL = process.env.IMAGE_URL;

const { Vonage } = require('@vonage/server-sdk');
const { ViberImage } = require('@vonage/messages');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new ViberImage({
    image: {
      url: IMAGE_URL, 
    },
    to: TO_NUMBER,
    from: VIBER_SERVICE_MESSAGE_ID,
  }),
)
  .then(resp => console.log(resp.messageUUID))
  .catch(err => console.error(err));
