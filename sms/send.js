require('dotenv').config({path: __dirname + '/../.env'});

var API_KEY = process.env.NEXMO_API_KEY;
var API_SECRET = process.env.NEXMO_API_SECRET;
var TO_NUMBER = process.env.EXAMPLE_TO_NUMBER;
var FROM_NUMBER = process.env.EXAMPLE_FROM_NUMBER;

// Start
var Nexmo = require('nexmo');

var nexmo = new Nexmo({apiKey: API_KEY, apiSecret: API_SECRET}, {debug:true});
nexmo.message.sendSms(TO_NUMBER, FROM_NUMBER, 'Hello from Nexmo!');
