require('dotenv').config({ path: __dirname + '/../.env' });
const { FileClient } = require('@vonage/server-client');

const VONAGE_PRIVATE_KEY = __dirname +'/../'+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const VOICE_RECORDING_URL = process.env.VOICE_RECORDING_URL;
const VOICE_RECORDING_DESTINATION = process.env.VOICE_RECORDING_DESTINATION;

const fileClient = new FileClient({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

fileClient.downloadFile(
  VOICE_RECORDING_URL,
  VOICE_RECORDING_DESTINATION,
)
  .then(() => console.log(`File Downloaded to ${VOICE_RECORDING_DESTINATION}`))
  .catch((error) => console.error(error));

