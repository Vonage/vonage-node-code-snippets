"use strict";

require('dotenv').config({path: __dirname + '/../.env'});

var PRIVATE_KEY_FILE = process.env.PRIVATE_KEY_FILE;
var APPLICATION_ID = process.env.APPLICATION_ID;
var EXAMPLE_TO_NUMBER = process.env.EXAMPLE_TO_NUMBER;
var EXAMPLE_FROM_NUMBER = process.env.EXAMPLE_FROM_NUMBER;
var SERVER_BASE_URL = process.env.SERVER_BASE_URL;

var fs = require('fs');
var request = require('request');
var uuid = require('node-uuid');
var jwt = require('jsonwebtoken');

function sign(cert, applicationId) {
  var toSign = {
    'iat': Date.now(),
		'application_id': applicationId,
		 "jti": uuid.v1()
	};

  var token = jwt.sign(toSign, cert, {algorithm: 'RS256'});
  return token;
}

var key = fs.readFileSync(__dirname + '/../' + PRIVATE_KEY_FILE);
var token = sign(key, APPLICATION_ID);

var app = require('express')();
app.set('port', (process.env.PORT || 5000));
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/call', function (callReq, callRes) {

  request({
    url: 'https://api.nexmo.com/beta/calls',
    method: 'post',
    auth: {
      bearer: token
    },
    json: {
      to: [{
        type: 'phone',
        number: EXAMPLE_TO_NUMBER
      }],
      from: {
        type: 'phone',
        number: EXAMPLE_FROM_NUMBER
      },
      answer_url: [`${SERVER_BASE_URL}/answer`],
      event_url: [`${SERVER_BASE_URL}/event`]
    }
  }, function(err, res, body) {
    if(err) {
      console.error(err);
      callRes.sendStatus(500).json(err);
    }
    else {
      console.log(body);
      callRes.json(body);
    }
  });

});

app.get('/answer', function(req, res) {
  var ncco = [
    {
      action: 'talk',
      text: 'Hello from Nexmo!'
    }
  ];

  res.json(ncco);
});

app.post('/event', function(req, res) {
  console.log(req.body);

  res.sendStatus(204);
});
