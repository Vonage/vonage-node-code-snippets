require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = __dirname +'/../'+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const RECORDING_URL = process.env.RECORDING_URL;
const FILE_PATH = process.env.FILE_PATH;

const { FileClient } = require('@vonage/server-client');

const fileClient = new FileClient({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

fileClient.downloadFile(
  RECORDING_URL,
  FILE_PATH,
)
  .then(() => console.log(`File Downloaded to ${FILE_PATH}`))
  .catch((error) => console.error(error));

