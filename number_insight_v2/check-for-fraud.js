require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

// By default use the command line argument. Otherwise use the environment variable.
const INSIGHT_NUMBER = process.argv[2] || process.env.INSIGHT_NUMBER;

const { NumberInsightV2, Insight } = require('@vonage/number-insight-v2');

const insight = new NumberInsightV2({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

async function run() {
  const resp = await insight.checkForFraud({
    // This is requried for future proofing
    type: 'phone',
    phone: INSIGHT_NUMBER,
    insights: [
      Insight.SIM_SWAP,
      Insight.FRAUD_SCORE,
    ],
  });

  console.log(resp);
}

run();
