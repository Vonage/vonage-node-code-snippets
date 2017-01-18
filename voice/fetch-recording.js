/* Voice Tutorial 3-2: Using Nexmo API to record a call
   This example retreive the recorded files.
   When you run this code, enter the last part of the `recording_url` as an arg.
   e.g. $ node fetch-recording.js 98a49817-c5cf-4460-a3a7-28d9021f29fb

   API Referene: https://docs.nexmo.com/voice/voice-api/api-reference
 */

'use strict';

require('dotenv').config({path: __dirname + '/../.env'});
const Nexmo = require('nexmo');
const fs = require('fs');
const request = require('request');

const appId = 'c6b78717-db0c-4b8b-9723-ee91400137cf'; // Use your App ID, generated with the CLI

let url = 'https://api.nexmo.com/media/download?id=' + process.argv[2];
let jwt = Nexmo.generateJwt(__dirname + '/private.key', {application_id: appId});

request.get(url, {'auth': {'bearer': jwt}})
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream('voicemail.mp3'));
