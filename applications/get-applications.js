require('dotenv').config({ path: `${__dirname}/../.env` })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET
}, {
    debug: true
});

vonage.applications.get({}, (error, result) => {
  if(error) {
    console.error(error);
  }
  else {
    console.log(result);
  }
}, true);
