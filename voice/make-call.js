/* Voice Tutorial 1: Using Nexmo API to call your phone
   Run this node code with a phone number starts with an country code as the argument.
   e.g. Run it with a US number, start with the country code 1:
   $ node make-call.js 12025559999

   API Referene: https://docs.nexmo.com/voice/voice-api/api-reference
 */

'use strict';

require('dotenv').config({path: __dirname + '/../.env'});
const fs = require('fs');
const Nexmo = require('nexmo');

function createApp() {
  let privateKeyFile = __dirname + '/private.key';

  if (fs.existsSync(privateKeyFile)) { // The Application has been created once.
    makeCall(privateKeyFile, appId);
  }
  else { // Create a new Application
    const nexmo = new Nexmo({apiKey: process.env.NEXMO_API_KEY, apiSecret: process.env.NEXMO_API_SECRET});
    const name = 'My Voice App';
    const type = 'voice';
    const answerUrl = 'https://example.com/answer'; // placeholder
    const eventUrl = 'https://example.com/event'; // placeholder
    const options = {};

    nexmo.applications.create(name, type, answerUrl, eventUrl, options, (err, res) => {
      console.log(res);

      let appId = res.id;
      let privateKey = res.keys.private_key;
      fs.writeFileSync(privateKeyFile, privateKey);

      makeCall(privateKeyFile, appId);
    });
  }
}

function makeCall(privateKeyFile, appId) {
  const privateKey = require('fs').readFileSync(privateKeyFile);

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
    answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json']
  }, (err, res) => {
    if(err) { console.error(err); }
    else { console.log(res); }
  });

}

createApp();
