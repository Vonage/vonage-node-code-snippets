require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VERIFY_REQUEST_ID = process.env.VERIFY_REQUEST_ID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.verify.sendControl(
  VERIFY_REQUEST_ID,
  'trigger_next_event',
)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
