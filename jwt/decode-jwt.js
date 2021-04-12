"use strict";

require('dotenv').config({path: __dirname + '/../.env'});

const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

const app_public_key = `-----BEGIN PUBLIC KEY-----
YOUR APPLICATIONS PUBLIC KEY
-----END PUBLIC KEY-----`

app.set('port', (process.env.PORT || 5000));
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/', function (req, res) {
    try {
        let auth = jwt.verify(req.headers['authorization'], app_public_key)
        res.send('Verified')
    } catch (error) {
        res.sendStatus('401')
    }    
});

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});