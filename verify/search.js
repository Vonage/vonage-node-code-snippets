require('dotenv').config({
  path: __dirname + '/../.env'
});

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const REQUEST_ID = process.env.REQUEST_ID;

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
});

nexmo.verify.search(REQUEST_ID, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Request status:', result.status);
  }
});
