/* Voice Tutorial 2: Receiving calls to your Vonage number
   This example is an alternative to use Vonage CLI to create an Application.
   Run this code, then update your Dashboard with the App ID generated with this script.
   See also: receive-call-webhook.js
   
   API Referene: https://docs.nexmo.com/voice/voice-api/api-reference
 */

'use strict';

require('dotenv').config({path: __dirname + '/../.env'});
const Vonage = require('@vonage/server-sdk');
const vonage = new Vonage({apiKey: process.env.VONAGE_API_KEY, apiSecret: process.env.VONAGE_API_SECRET});

const name = 'My Voice App';
const type = 'voice';
const answerUrl = 'https://97855482.ngrok.io/answer'; // webhook that points to NCCO
const eventUrl = 'https://97855482.ngrok.io/event';

let options = {};

applications.create(name, type, answerUrl, eventUrl, options, (err, res) => {
  console.log(res);
});
