'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_PRIVATE_KEY = __dirname + "/../" + process.env.VONAGE_PRIVATE_KEY;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;

const TO_NUMBER = process.env.VONAGE_TO_NUMBER;
const FROM_NUMBER = process.env.VONAGE_FROM_NUMBER;

const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const server = app.listen(process.env.PORT || 4001, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY
}, {
  debug: true
});

/**
 * Trigger a call from and to values defined in the environment variables.
 */
app.get('/call', (req, res) => {

  const serverHost = req.protocol + '://' + req.get('host');

  vonage.voice.createOutboundCall({
      to: [{
        type: 'phone',
        number: TO_NUMBER,

        // on answer, send DTMF to the call leg
        // DTMF is send "out of band" which means you won't hear it
        dtmfAnswer: '2p02p7p7'
      }],
      from: {
        type: 'phone',
        number: FROM_NUMBER
      },
      answer_url: [`${serverHost}/answer`],
      event_url: [`${serverHost}/event`]
  })
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
})

/**
 * Handle answer_url webhook. Return an NCCO.
 */
app.get('/answer', (req, res) => {
  console.log(req.querystring)
  res.json([{
    action: 'talk',
    text: 'hello from vonage',
    loop: 0
  }]);
});

/**
 * Handle event_url webhook.
 */
app.post('/event', (req, res) => {
  console.log(req.body);
  res.status(204).end();
});
