require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + "/../../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const SESSION_ID = process.env.SESSION_ID;

const { Auth } = require('@vonage/auth');
const { Meetings } = require('@vonage/meetings');

const credentials = new Auth({
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  applicationId: VONAGE_APPLICATION_ID,
});
const options = {};

const meetingsClient = new Meetings(credentials, options);
for await (const recording of meetingsClient.getSessionRecordings(SESSION_ID)) {
  console.log(recording);
}
