require('dotenv').config({ path: __dirname + '/../.env' });
const { SubAccount } = require('@vonage/subaccounts');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const NEW_SUBACCOUNT_NAME = process.env.NEW_SUBACCOUNT_NAME;
const NEW_SUBACCOUNT_SECRET = process.env.NEW_SUBACCOUNT_SECRET;

const subAccountClient = new SubAccount({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

subAccountClient.createSubAccount({
  name: NEW_SUBACCOUNT_NAME,
  secret: NEW_SUBACCOUNT_SECRET,
})
  .then((newSubAccount) => console.log(newSubAccount))
  .catch((error) => console.error(error));
