require('dotenv').config({path: __dirname + '/../.env'});

var API_KEY = process.env.NEXMO_API_KEY;
var API_SECRET = process.env.NEXMO_API_SECRET;
var TO_NUMBER = process.env.TO_NUMBER;

var Nexmo = require('nexmo');

var nexmo = new Nexmo({apiKey: API_KEY, apiSecret: API_SECRET}, {debug: true});

nexmo.number.search('GB', {features: 'SMS'}, function(err, res) {
  if(err) {
    console.error(err)
  }
  else {
    console.log(res);
    console.log(res.numbers[0].features);
    
    var numbers = res.numbers;
    // do something with numbers
  }
});
