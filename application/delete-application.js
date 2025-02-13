require('dotenv').config({ path: __dirname + '/../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.applications.deleteApplication(VONAGE_APPLICATION_ID)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
