"use strict";

require('dotenv').config({path: __dirname + '/../.env'});

const SERVER_BASE_URL = process.env.SERVER_BASE_URL;
const FROM_NUMBER = process.env.FROM_NUMBER;
const TO_NUMBER = process.env.TO_NUMBER;
const ALT_TO_NUMBER = process.env.ALT_TO_NUMBER;

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.get('/answer', function (req, res) {

  const ncco = [{
      action: "connect",
      from: FROM_NUMBER,
      timeout: 5,
      eventType: 'synchronous',
      eventUrl: [`${SERVER_BASE_URL}/connect-event`],
      endpoint: [{
        type: 'phone',
        number: TO_NUMBER
      }]
  }];
  
  res.json(ncco);
  
});

app.post('/connect-event', function(req, res) {
  console.log('POST /connect-event', req.body);
  console.log('POST /connect-event STATUS', req.body.status);
  const ncco = [];
  
  if(req.body.status === 'timeout') {
    // ncco.push({
    //     action: 'talk',
    //     text: 'Sorry, the attempt to connect your call timed out.'
    //   });
    
    ncco.push({
        action: 'connect',
        from: FROM_NUMBER,
        endpoint: [{
          type: 'phone',
          number: ALT_TO_NUMBER
        }]
      });
  }
  
  res.json(ncco);
});

app.post('POST /event', function(req, res) {
  console.log(req.body);
});

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});