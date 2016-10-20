/* Tutorial 2: Webhook for Nexmo SMS incoming messages demo with ExpressJS */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// Persist data storage to store data in the file system w/o a real DB
const storage = require('node-persist');
storage.init();

// Handle both GET and POST requests

app.get('/inbound', (req, res) => {
  handleParams(req.query, res);
});

app.post('/inbound', (req, res) => {
  handleParams(req.body, res);
});

function handleParams(params, res) {
  if (!params.to || !params.msisdn) {
    console.log('This is not a valid inbound SMS message!');
  } else {
    console.log('Success');
    let incomingData = {
      messageId: params.messageId,
      from: params.msisdn,
      text: params.text,
      type: params.type,
      timestamp: params['message-timestamp']
    };
    storage.setItem('id_' + params.messageId, incomingData);
    res.send(incomingData);
  }
  res.status(200).end();
}

// Optional: To spit out JSON data for each Message ID
// e.g. http://localhost:3000/inbound/02000000F8835159
app.get('/inbound/:id', (req, res) => {
  try {
    storage.getItem('id_' + req.params.id).then((value) => {
      res.json(value);
    });
  } catch (e) {
    res.status(404).end();
  }
});
