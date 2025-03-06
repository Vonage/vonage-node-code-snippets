require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const SUBACCOUNT_KEY = process.env.SUBACCOUNT_KEY;
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;
const COUNTRY_CODE = process.env.COUNTRY_CODE;

const { SubAccounts } = require('@vonage/subaccounts');

const subAccountClient = new SubAccounts({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

subAccountClient.transferNumber({
  from: VONAGE_API_KEY,
  to: SUBACCOUNT_KEY,
  numbers: VONAGE_NUMBER,
  country: COUNTRY_CODE,
})
  .then((numberTransfer) => console.log(numberTransfer))
  .catch((error) => console.error(error));
