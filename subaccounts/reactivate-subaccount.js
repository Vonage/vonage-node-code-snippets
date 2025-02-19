require('dotenv').config({ path: __dirname + '/../.env' });
const { SubAccount } = require('@vonage/subaccounts');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const SUBACCOUNT_KEY = process.env.SUBACCOUNT_KEY;

const subAccountClient = new SubAccount({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

subAccountClient.updateSubAccount(
  SUBACCOUNT_KEY,
  { suspended: false },
)
  .then((subAccount) => console.log(subAccount))
  .catch((error) => console.error(error));
