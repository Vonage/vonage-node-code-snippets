require('dotenv').config({path: __dirname + '/../.env'});

const VERIFY_BRAND_NAME = process.env.VONAGE_VERIFY_BRAND_NAME;
const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

app.use(bodyParser.json()); // for parsing POST req
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.set('views', __dirname + '/views'); // Render on browser
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/views'));

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// Web UI ("Registration Form")
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/register', (req, res) => {
  // A user registers with a mobile phone number
  const phoneNumber = req.body.number;
  console.log(phoneNumber);
  vonage.verify.start({
    number: phoneNumber,
    senderId: VERIFY_BRAND_NAME,
  })
    .then((result) => {
      console.log(result);
      const requestId = result.request_id;
      if (result.status == '0') {
        res.render('verify', {
          requestId: requestId,
        });
      } else {
        // res.status(401).send(result.error_text);
        res.render('status', {
          message: result.error_text,
          requestId: requestId,
        });
      }
    })
    .catch(() => res.render('status', { message: 'Server Error' }));
});

app.post('/verify', (req, res) => {
  // Checking to see if the code matches
  const pin = req.body.pin;
  const requestId = req.body.requestId;

  vonage.verify.check(requestId, pin)
    .then((result) => {
      console.log(result);
      // Error status code: https://developer.nexmo.com/api/verify#verify-check
      if (result && result.status == '0') {
        // res.status(200).send('Account verified!');
        res.render('status', {
          message: 'Account verified! 🎉',
        });
      } else {
        // res.status(401).send(result.error_text);
        res.render('status', {
          message: result.error_text,
          requestId: requestId,
        });
      }
    })
    .catch(() => res.render('status', { message: 'Server Error' }));
});
