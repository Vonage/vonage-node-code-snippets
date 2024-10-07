require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

const run = async () => {
  try {
    for await (const application of vonage.applications.listAllApplications()) {
      console.log(application);
    }
  } catch (error) {
    console.log(error);
  }
};
run();
