require('dotenv').config({ path: __dirname + '/../.env' });

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const signatureSecret = process.env.VONAGE_SIGNATURE_SECRET;

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  try {
    const auth = jwt.verify(req.headers['authorization'].split(' ')[1], signatureSecret);
    res.send('Verified');
    console.log(auth);
  } catch (error) {
    console.error(error);
    res.sendStatus('401');
  }
});

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});
