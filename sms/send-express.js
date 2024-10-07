require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_FROM_NUMBER = process.env.VONAGE_FROM_NUMBER;

const express = require('express');
const bodyParser = require('body-parser');
const { Vonage } = require('@vonage/server-sdk');
const { SMS } = require('@vonage/messages');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000);

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

app.post('/send', (req, res) => {
  // Sending SMS via Vonage
  vonage.message.send(new SMS({
    from: VONAGE_FROM_NUMBER,
    to: req.body.toNumber,
    text: req.body.message,
  }))
    .then((result) => res.json({message_uuid: result.messageUUID}))
    .catch(() => res.status(400));
});
