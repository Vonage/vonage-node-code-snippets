/* Voice Tutorial 1: Using Nexmo API to call your phone
   Before running this code, you must create an Application using the Nexmo CLI.
   Then run this node code with a phone number starts with an country code as the argument.
   e.g. Run it with a US number, start with the country code 1:
   $ node make-call.js 12025559999

   API Referene: https://docs.nexmo.com/voice/voice-api/api-reference
 */

'use strict';

require('dotenv').config({path: __dirname + '/../.env'});
const Nexmo = require('nexmo');

const appId = 'c6b78717-db0c-4b8b-9723-ee91400137cf'; // Use your App ID, generated with the CLI
const privateKey = require('fs').readFileSync(__dirname + '/private.key');

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET,
  applicationId: appId,
  privateKey: privateKey
});

nexmo.calls.create({
  to: [{
    type: 'phone',
    number: process.argv[2]
  }],
  from: {
    type: 'phone',
    number: process.env.EXAMPLE_FROM_NUMBER
  },
  answer_url: ['https://gist.githubusercontent.com/girliemac/1bd791e808d63d9133bb0c43906355d5/raw/ae72d5204cfa5303a75deef8713b2f9f4316c2ee/ncco-test.json']
}, (err, res) => {
  if(err) { console.error(err); }
  else { console.log(res); }
});
