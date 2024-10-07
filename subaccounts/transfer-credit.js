require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const SUBACCOUNT_KEY = process.env.SUBACCOUNT_KEY;
const AMOUNT = process.env.AMOUNT;

const { SubAccount } = require('@vonage/subaccounts');

const subAccountClient = new SubAccount({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

subAccountClient.transferCredit({
  from: VONAGE_API_KEY,
  to: SUBACCOUNT_KEY,
  amount: AMOUNT,
})
  .then((creditTransfer) => console.log(creditTransfer))
  .catch((error) => console.error(error));
