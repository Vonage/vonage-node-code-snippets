require('dotenv').config({ path: __dirname + '/../.env' });
const { Audit } = require('@vonage/audit');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

const auditClient = new Audit({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

auditClient.getEvent()
  .then((event) => console.log(event))
  .catch((error) => console.error(error));
