require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const START_DATE = process.env.START_DATE;

const { SubAccounts } = require('@vonage/subaccounts');

const subAccountClient = new SubAccounts({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

subAccountClient.listBalanceTransfers({
  startDate: START_DATE,
})
  .then((balanceTranfsers) => console.log(balanceTranfsers))
  .catch((error) => console.error(error));
