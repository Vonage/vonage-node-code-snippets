require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const MESSAGES_SANDBOX_URL = process.env.MESSAGES_SANDBOX_URL;
const MESSAGES_SANDBOX_ALLOW_LISTED_TO_NUMBER = process.env.MESSAGES_SANDBOX_ALLOW_LISTED_TO_NUMBER;
const MESSAGES_SANDBOX_VIBER_SERVICE_ID = process.env.MESSAGES_SANDBOX_VIBER_SERVICE_ID;

const { Vonage } = require('@vonage/server-sdk');
const { ViberText } = require('@vonage/messages');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
},
{
  apiHost: MESSAGES_SANDBOX_URL,
});

vonage.messages.send(
  new ViberText({
    text: 'This is a Viber Service Message text message sent using the Messages API via the Messages Sandbox',
    to: MESSAGES_SANDBOX_ALLOW_LISTED_TO_NUMBER,
    from: MESSAGES_SANDBOX_VIBER_SERVICE_ID,
  }),
)
  .then((resp) => console.log(resp.messageUUID))
  .catch((error) => console.error(error));
