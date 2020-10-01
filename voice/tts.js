require('dotenv').config({path: `${__dirname}/../.env`});

var API_KEY = process.env.VONAGE_API_KEY;
var API_SECRET = process.env.VONAGE_API_SECRET;
var TO_NUMBER = process.env.EXAMPLE_TO_NUMBER;

// Start
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({apiKey: API_KEY, apiSecret: API_SECRET});
vonage.voice.sendTTSMessage(TO_NUMBER, 'Hello from Vonage!');
