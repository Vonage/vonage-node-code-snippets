require('dotenv').config({ path: __dirname + '/../.env' })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET
}, {
    debug: true
});

vonage.applications.get(VONAGE_APPLICATION_ID, (error, result) => {
  if(error) {
    console.error(error);
  }
  else {
    console.log(result);
  }
}, true);
