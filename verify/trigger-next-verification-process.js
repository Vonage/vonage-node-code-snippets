require('dotenv').config({path: __dirname + '/../.env'});
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const REQUEST_ID = process.env.REQUEST_ID;

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.verify.sendControl(
  REQUEST_ID,
  'trigger_next_event',
)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
