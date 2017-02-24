/* Tutorial 1: Nexmo SMS outcoming messages demo with ExpressJS */

'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(process.env.PORT || 3000);

const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
}, {debug: true});

app.post('/send', (req, res) => {
  // Sending SMS via Nexmo
  nexmo.message.sendSms(
    process.env.FROM_NUMBER, req.body.toNumber, req.body.message, {type: 'unicode'},
    (err, responseData) => {if (responseData) {console.log(responseData)}}
  );
});
