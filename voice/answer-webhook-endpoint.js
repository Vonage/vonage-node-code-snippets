"use strict";

require('dotenv').config({path: __dirname + '/../.env'});

var app = require('express')();
app.set('port', (process.env.PORT || 5000));
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/answer-webhook', function (req, res) {
  var from = req.query.from;
  var to = req.query.to;

  // At this point you build an NCCO that fulfills your use case.
  // For the purposes of an example we'll just read out some text.
  var ncco = [
    {
      action: 'talk',
      text: 'Hello from Vonage!'
    }
  ];

  res.json(ncco);
});

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});
