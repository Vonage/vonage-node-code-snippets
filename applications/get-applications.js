require('dotenv').config({ path: __dirname + '/../.env' })

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET

const Nexmo = require('nexmo')

var nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET
}, {
    debug: true
});

nexmo.applications.get({}, (error, result) => {
  if(error) {
    console.error(error);
  }
  else {
    console.log(result);
  }
}, true);
