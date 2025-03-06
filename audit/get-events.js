require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

const { Audit } = require('@vonage/audit');

const auditClient = new Audit({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

const run = async () => {
  try {
    for await (const event of auditClient.getEvents()) {
      console.log(event);
    }
  } catch (error) {
    console.log(error);
  }
};
run();

