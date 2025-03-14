require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const SUBACCOUNT_KEY = process.env.SUBACCOUNT_KEY;
const AMOUNT = process.env.AMOUNT;

const { SubAccounts } = require('@vonage/subaccounts');

const subAccountClient = new SubAccounts({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

subAccountClient.transferBalance({
  from: VONAGE_API_KEY,
  to: SUBACCOUNT_KEY,
  amount: AMOUNT,
})
  .then((balanceTransfer) => console.log(balanceTransfer))
  .catch((error) => console.error(error));
