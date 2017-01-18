require('dotenv').config({path: __dirname + '/../.env'});

var API_KEY = process.env.NEXMO_API_KEY;
var API_SECRET = process.env.NEXMO_API_SECRET;

var REQUEST_ID = process.argv[2];
if(!REQUEST_ID) {
  console.error('Please supply a single argument for the `request_id`');
  return;
}

var Nexmo = require('nexmo');
var nexmo = new Nexmo({apiKey: API_KEY, apiSecret: API_SECRET}, {debug:true});

nexmo.verify.control({request_id: REQUEST_ID, cmd: 'cancel'}, function(err, result) {
  if(err) { console.error(err); }
  else {
    console.log(result);
  }
});