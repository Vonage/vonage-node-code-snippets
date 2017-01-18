require('dotenv').config({path: __dirname + '/../.env'});

var API_KEY = process.env.NEXMO_API_KEY;
var API_SECRET = process.env.NEXMO_API_SECRET;
var TO_NUMBER = process.env.EXAMPLE_TO_NUMBER;
var BRAND_NAME = process.env.EXAMPLE_BRAND_NAME;

var Nexmo = require('nexmo');
var nexmo = new Nexmo({apiKey: API_KEY, apiSecret: API_SECRET});

var verifyRequestId = null; // use in the check process

nexmo.verify.request({number: TO_NUMBER, brand: BRAND_NAME}, function(err, result) {
  if(err) { console.error(err); }
  else {
    verifyRequestId = result. request_id;
    console.log('request_id', verifyRequestId);
  }
});