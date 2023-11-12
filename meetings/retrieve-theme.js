require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + "/../../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const THEME_ID = process.env.THEME_ID;

const { Auth } = require('@vonage/auth');
const { Meetings } = require('@vonage/meetings');

const credentials = new Auth({
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  applicationId: VONAGE_APPLICATION_ID,
});
const options = {};

const meetingsClient = new Meetings(credentials, options);
const theme = await meetingsClient.getTheme(THEME_ID);
console.log(theme);
