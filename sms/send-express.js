/* Tutorial 1: Vonage SMS outcoming messages demo with ExpressJS */

'use strict';

/* import dotenv library and tell it where the .env file is stored
*  (where you keep confidential info like API keys)
*/
require('dotenv').config({path: __dirname + '/../.env'});

/* get 'secret' values from your .env file.
* Keep them safe from others, or you are in trouble!
* For more information:
* https://softwareengineering.stackexchange.com/questions/395128/why-must-api-keys-be-kept-private
*/
const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_FROM_NUMBER = process.env.VONAGE_FROM_NUMBER;

// imports
const express = require('express');
const bodyParser = require('body-parser');
const Vonage = require('@vonage/server-sdk');

// include imports to your app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(process.env.PORT || 3000); // create server

// create vonage object. Used to send SMS lower in code.
const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
}, {debug: true});

// define how to handle POST requests to route 'yoursite.com'/send
app.post('/send', (req, res) => {
  // Sending SMS via Vonage
  vonage.message.sendSms(
    VONAGE_FROM_NUMBER, req.body.toNumber, req.body.message, {type: 'unicode'},
    (err, responseData) => {if (responseData) {console.log(responseData)}} // callback which writes to console if the request is OK
  );
});
