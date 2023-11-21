require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_PRIVATE_KEY = __dirname +"/../"+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const RECORDING_URL = process.env.RECORDING_URL;

const { FileClient } = require('@vonage/server-client');

const fileClient = new FileClient({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

// Save the file to a specific location
await fileClient.downloadFile(
  RECORDING_URL, 
  '/path/to/save/file.mp3',
);

