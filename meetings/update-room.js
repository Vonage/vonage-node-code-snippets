require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const ROOM_ID = process.env.ROOM_ID;
const ROOM_EXPIRATION_DATE = process.env.ROOM_EXPIRATION_DATE;

const { Auth } = require('@vonage/auth');
const { Meetings } = require('@vonage/meetings');

const credentials = new Auth({
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  applicationId: VONAGE_APPLICATION_ID,
});

const meetingsClient = new Meetings(credentials);

const run = async () => {
  try {
    const room = await meetingsClient.getRoom(ROOM_ID);
    room.expiresAt = ROOM_EXPIRATION_DATE;
    await meetingsClient.updateRoom(ROOM_ID, room);
  } catch (error) {
    console.error(error);
  }
};

run();
