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

const URL = 'https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3';

vonage.voice.streamAudio(UUID, URL, 0)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));

function stop_stream (){
  vonage.voice.stopStreamAudio(UUID)
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
}

setTimeout(stop_stream, 5000); // delay 5 seconds
