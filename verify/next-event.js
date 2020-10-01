require('dotenv').config({
  path: `${__dirname}/../.env`
});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;

const REQUEST_ID = process.argv[2];
if (!REQUEST_ID) {
  console.error('Please supply the `request_id`');
  return;
}

const Vonage = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
}, {
  debug: true
});

vonage.verify.control({
  request_id: REQUEST_ID,
  cmd: 'trigger_next_event'
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
