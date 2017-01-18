/* Voice Tutorial 3-1: Using Nexmo API to record a call
   This webhook receives a call, and lets the caller leave a message.
   The `record` even gets the URL where the recorded message (mp3) locates.
   To retreive the mp3, run `fetch-recording.js`.
   API Referene: https://docs.nexmo.com/voice/voice-api/api-reference
 */

'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 4002, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

app.get('/answer', (req, res) => {
  let from = req.query.from;
  let to = req.query.to;

  const ncco = [
    {
      action: 'talk',
      voiceName: 'Jennifer',
      text: 'Hello, you\'ve reached Jennifer. Please leave your name and quick message after the tone, then press pound.'
    },
    {
      'action': 'record',
      'eventUrl': ['https://db95720f.ngrok.io/record'],
      'endOnSilence': '3',
      'endOnKey' : '#',
      'beepStart': 'true'
    },
    {
      'action': 'talk',
      'text': 'Thank you for your message. Ciao!'
    }
  ];

  res.json(ncco);
});

// General event endpoint for the Application
app.post('/event', (req, res) => {
  console.log(req.body);
  res.status(204).end();
});

// Record action event endpoint
// To retreive the mp3 messages, use fetch-recording.js
app.post('/record', (req, res) => {
  console.log('*** Recording... ***');
  console.log(req.body);
  res.status(204).end();
});
