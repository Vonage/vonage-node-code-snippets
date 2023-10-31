require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + "/../../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const THEME_ID = process.env.THEME_ID;
const THEME_FILE = '/path/to/file';

const { Auth } = require('@vonage/auth');
const { Meetings, LogoType } = require('@vonage/meetings');

const credentials = new Auth({
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  applicationId: VONAGE_APPLICATION_ID,
});
const options = {};

const meetingsClient = new Meetings(credentials, options);
await meetingsClient.uploadIcon(THEME_ID, LogoType.WHITE,  THEME_FILE);
