require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + "/../../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const ROOM_ID = process.env.ROOM_ID;
const THEME_ID = process.env.THEME_ID;

const { Auth } = require('@vonage/auth');
const { Meetings } = require('@vonage/meetings');

const credentials = new Auth({
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  applicationId: VONAGE_APPLICATION_ID,
});
const options = {};

const meetingsClient = new Meetings(credentials, options);
const room = await meetingsClient.getRoom(ROOM_ID);
room.themeId = THEME_ID;
await meetingsClient.updateRoom(ROOM_ID, room);
