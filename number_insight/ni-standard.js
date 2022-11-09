require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET

// By default use the command line argument. Otherwise use the environment variable.
const INSIGHT_NUMBER = process.argv[2] || process.env.INSIGHT_NUMBER;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

async function run() {
  const resp = await vonage.numberInsights.standardLookup(INSIGHT_NUMBER);

  console.log(resp);
}

run();
