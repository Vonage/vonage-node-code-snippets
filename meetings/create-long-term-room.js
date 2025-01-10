require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const ROOM_DISPLAY_NAME = process.env.ROOM_DISPLAY_NAME;
const ROOM_EXPIRATION_DATE = process.env.ROOM_EXPIRATION_DATE;

const { Auth } = require('@vonage/auth');
const { Meetings, MeetingType } = require('@vonage/meetings');

const credentials = new Auth({
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  applicationId: VONAGE_APPLICATION_ID,
});

const meetingsClient = new Meetings(credentials);

meetingsClient.createRoom({
  type: MeetingType.LONG_TERM,
  displayName: ROOM_DISPLAY_NAME,
  expiresAt: ROOM_EXPIRATION_DATE,
})
  .then((room) => console.log(room))
  .catch((error) => console.error(error));
