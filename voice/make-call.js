/* Voice Tutorial 1: Using Nexmo API to call your phone
   Before running this code, you must create an Application using the Nexmo CLI.
   Then run this node code with a phone number starts with an country code as the argument.
   e.g. Run it with a US number, start with the country code 1:
   $ node make-call.js 12025559999

   API Referene: https://docs.nexmo.com/voice/voice-api/api-reference
 */

'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const API_KEY = process.env.NEXMO_API_KEY;
const API_SECRET = process.env.NEXMO_API_SECRET;
const PRIVATE_KEY = __dirname +"/../"+ process.env.NEXMO_PRIVATE_KEY;
const APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;

const TO_NUMBER = process.argv[2];
const FROM_NUMBER = process.env.NEXMO_FROM_NUMBER;

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  applicationId: APPLICATION_ID,
  privateKey: PRIVATE_KEY
});

nexmo.calls.create({
  to: [{
    type: 'phone',
    number: TO_NUMBER
  }],
  from: {
    type: 'phone',
    number: FROM_NUMBER
  },
  answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json']
}, (err, res) => {
  if(err) { console.error(err); }
  else { console.log(res); }
});
