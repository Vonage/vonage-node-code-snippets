/* Tutorial 3: Webhook for Nexmo SMS incoming messages receipt demo with ExpressJS */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// Handle both GET and POST requests

app.get('/receipt', (req, res) => {
  handleParams(req.query, res);
});

app.post('/receipt', (req, res) => {
  handleParams(req.body, res);
});

function handleParams(params, res) {
  if (params.status !== 'delivered') {
    console.log('Fail: ' + params.status);
  } else {
    console.log('Success');
    console.log(params);
    /* params look like:

    { msisdn: '14155551234',
      to: '12015556666',
      'network-code': '310090',
      messageId: '02000000FEA5EE9B',
      price: '0.00570000',
      status: 'delivered',
      scts: '1610192240', // The Coordinated Universal Time (UTC)
      'err-code': '0',
      'message-timestamp': '2016-10-19 22:40:30'
    }
    */
  }
  res.status(200).end();
}
