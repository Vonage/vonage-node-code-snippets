require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const EVENT_UUID = process.env.EVENT_UUID;

const { Audit } = require('@vonage/audit');

const auditClient = new Audit({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

auditClient.getEvent(EVENT_UUID)
  .then((event) => console.log(event))
  .catch((error) => console.error(error));
