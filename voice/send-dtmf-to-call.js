'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const APPLICATION_ID = process.env.APPLICATION_ID;

const TO_NUMBER = process.env.TO_NUMBER;
const FROM_NUMBER = process.env.FROM_NUMBER;

const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 4001, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  applicationId: APPLICATION_ID,
  privateKey: PRIVATE_KEY
});

/**
 * Trigger a call from and to values defined in the environment variables.
 */
app.get('/call', (webRequest, webResponse) => {

  const serverHost = webRequest.protocol + '://' + webRequest.get('host');

  nexmo.calls.create({
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
  },
  (nexmoError, nexmoResult) => {
    if(nexmoError) {
      webResponse.status(500).json(nexmoError);
    }
    else {
      webResponse.json(nexmoResult);
    }
  });

})

/**
 * Handle answer_url webhook. Return an NCCO.
 */
app.get('/answer', (req, res) => {
  console.log(req.querystring)
  res.json([{
    action: 'talk',
    text: 'hello from nexmo',
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
