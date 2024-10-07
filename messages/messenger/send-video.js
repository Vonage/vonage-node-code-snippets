require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const FB_RECIPIENT_ID = process.env.FB_RECIPIENT_ID;
const FB_SENDER_ID = process.env.FB_SENDER_ID;
const VIDEO_URL = process.env.VIDEO_URL;

const { Vonage } = require('@vonage/server-sdk');
const { MessengerVideo } = require('@vonage/messages');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new MessengerVideo({
    video: {
      url: VIDEO_URL,
    },
    to: FB_RECIPIENT_ID,
    from: FB_SENDER_ID,
  }),
)
  .then(({ messageUUID}) => console.log(messageUUID))
  .catch((error) => console.error(error));
