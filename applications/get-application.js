require('dotenv').config({ path: __dirname + '/../.env' })

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID

const Nexmo = require('nexmo')

var nexmo = new Nexmo({
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET
}, {
    debug: true
});

nexmo.applications.get(NEXMO_APPLICATION_ID, (error, result) => {
  if(error) {
    console.error(error);
  }
  else {
    console.log(result);
  }
}, true);
