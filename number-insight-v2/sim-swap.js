require('dotenv').config({ path: __dirname + '/../.env' });
const { NumberInsightV2, Insight } = require('@vonage/number-insight-v2');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const INSIGHT_NUMBER = process.env.INSIGHT_NUMBER;

const insight = new NumberInsightV2({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

async function run() {
  const resp = await insight.checkForFraud({
    type: 'phone',
    phone: INSIGHT_NUMBER,
    insights: [Insight.SIM_SWAP],
  });

  console.log(resp);
}

run();
