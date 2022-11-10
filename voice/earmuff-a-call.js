'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_PRIVATE_KEY = __dirname +"/../"+ process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const UUID = process.env.UUID;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY
}, {debug: true});

vonage.voice.earmuffCall(UUID)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));

function unearmuff (){
  vonage.voice.unearmuffCall(UUID)
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
}

setTimeout(unearmuff, 3000); // delay 3 seconds
