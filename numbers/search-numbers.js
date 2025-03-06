require('dotenv').config({ path: __dirname + '/../.env' });
const { Vonage } = require('@vonage/server-sdk');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const COUNTRY_CODE = process.env.COUNTRY_CODE;
const VONAGE_NUMBER_TYPE = process.env.VONAGE_NUMBER_TYPE;
const VONAGE_NUMBER_FEATURES = process.env.VONAGE_NUMBER_FEATURES;
const NUMBER_SEARCH_CRITERIA = process.env.NUMBER_SEARCH_CRITERIA;
const NUMBER_SEARCH_PATTERN = process.env.NUMBER_SEARCH_PATTERN;

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

vonage.numbers.getOwnedNumbers({
  country: COUNTRY_CODE,
  type: VONAGE_NUMBER_TYPE,
  pattern: NUMBER_SEARCH_CRITERIA,
  searchPattern: NUMBER_SEARCH_PATTERN,
  features: VONAGE_NUMBER_FEATURES,
})
  .then((numbers) => {
    for (const number of numbers) {
      console.log(number);
    }
  })
  .catch((error) => console.error(error));
