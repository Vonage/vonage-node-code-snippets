require('dotenv').config({ path: __dirname + '/../.env' });

const API_KEY = process.env.VONAGE_API_KEY;
const API_SECRET = process.env.VONAGE_API_SECRET;
const TO_NUMBER = process.env.EXAMPLE_TO_NUMBER;

// Start
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({ apiKey: API_KEY, apiSecret: API_SECRET });
vonage.voice.playTTS(TO_NUMBER, { action: 'talk', text: 'Hello from Vonage', language: 'en-US' })
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
