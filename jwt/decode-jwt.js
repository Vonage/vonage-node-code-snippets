"use strict";

require('dotenv').config({path: __dirname + '/../.env'});

const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

const signature_secret = VONAGE_SIGNATURE_SECRET;

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    try {
        let auth = jwt.verify(req.headers['authorization'].split(' ')[1], signature_secret)
        res.send('Verified')
    } catch (error) {
        res.sendStatus('401')
    }    
});

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});