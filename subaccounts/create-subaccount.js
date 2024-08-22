require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const NEW_SUBACCOUNT_NAME = process.env.NEW_SUBACCOUNT_NAME;
const NEW_SUBACCOUNT_SECRET = process.env.NEW_SUBACCOUNT_SECRET;

const { SubAccount } = require('@vonage/subaccounts');

const subAccountClient = new SubAccount({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

subAccountClient.createSubAccount({
  name: NEW_SUBACCOUNT_NAME,
  secret: NEW_SUBACCOUNT_SECRET,
})
  .then(newSubAccount => console.log(newSubAccount))
  .catch(err => console.error(err));
