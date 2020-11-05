'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_PRIVATE_KEY = __dirname +"/../"+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const UUID = process.env.UUID;

const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY
}, {debug: true});

const ncco = [
  {
    action: 'talk',
    text:
      'You are listening to a test text-to-speech call made with Vonage Voice API',
    language: 'en-AU',
    style: 3,
  },
];

vonage.calls.talk.start(UUID, ncco, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});
