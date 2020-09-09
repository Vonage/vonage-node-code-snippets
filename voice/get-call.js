'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_PRIVATE_KEY = __dirname +"/../"+ process.env.VONAGE_PRIVATE_KEY;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;

const UUID = process.env.UUID;

const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY
}, {debug: true});

vonage.calls.get(UUID, (err, res) => {
  if(err) { console.error(err); }
  else {
      console.log(res);
  }
});
