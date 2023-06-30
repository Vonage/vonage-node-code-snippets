require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const FB_RECIPIENT_ID = process.env.FB_RECIPIENT_ID;
const FB_SENDER_ID = process.env.FB_SENDER_ID;
const IMAGE_URL = process.env.IMAGE_URL;

const { Vonage } = require('@vonage/server-sdk');
const { MessengerImage } = require('@vonage/messages');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new MessengerImage({
    image: {
      url: IMAGE_URL,
    }, 
    to: FB_RECIPIENT_ID,
    from: FB_SENDER_ID,
  }),
)
  .then(resp => console.log(resp.messageUUID))
  .catch(err => console.log(err));
