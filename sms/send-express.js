/* Tutorial 1: Vonage SMS outcoming messages demo with ExpressJS */

'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_FROM_NUMBER = process.env.VONAGE_FROM_NUMBER;

const express = require('express');
const bodyParser = require('body-parser');
const { Vonage } = require('@vonage/server-sdk');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(process.env.PORT || 3000);

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
}, {debug: true});

app.post('/send', (req, res) => {
  // Sending SMS via Vonage
  vonage.message.sendSms(
    VONAGE_FROM_NUMBER, req.body.toNumber, req.body.message, {type: 'unicode'},
    (err, responseData) => {if (responseData) {console.log(responseData)}}
  );
});
