require('dotenv').config({path: __dirname + '/../.env'});

var API_KEY = process.env.NEXMO_API_KEY;
var API_SECRET = process.env.NEXMO_API_SECRET;
var TO_NUMBER = process.env.EXAMPLE_TO_NUMBER;

// Start
var Nexmo = require('nexmo');

var nexmo = new Nexmo({apiKey: API_KEY, apiSecret: API_SECRET}, {debug: true});

/**
 * In order to buy a number you must first search for the number to buy.
 */
function searchNumber() {
  nexmo.number.search('GB', {features: 'SMS'}, function(err, res) {
    if(err) {
      console.error(err)
    }
    else {
      console.log(res);
      console.log(res.numbers[0].features);
      
      var numbers = res.numbers;
      
      // Once you have found a number (or numbers) you can buy it.
      buyNumber(numbers[0]);
    }
  });
}

/**
 * Buy a single number.
 *
 * @param {Object} number - a number object in the format return from the
 *                          Nexmo search resources.
 */
function buyNumber(number) {
  nexmo.number.buy(number.country, number.msisdn, function(err, res) {
    if(err) {
      console.error(err)
    }
    else {
      console.log(res);
    }
  });
}

// Start by searching for a number to buy.
searchNumber();
