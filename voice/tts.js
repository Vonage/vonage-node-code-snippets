require('dotenv').config({path: __dirname + '/../.env'});

var API_KEY = process.env.NEXMO_API_KEY;
var API_SECRET = process.env.NEXMO_API_SECRET;
var TO_NUMBER = process.env.EXAMPLE_TO_NUMBER;

// Start
var Nexmo = require('nexmo');

var nexmo = new Nexmo({apiKey: API_KEY, apiSecret: API_SECRET});
nexmo.voice.sendTTSMessage(TO_NUMBER, 'Hello from Nexmo!');
