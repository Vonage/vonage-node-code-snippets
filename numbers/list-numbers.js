require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const NUMBER_SEARCH_CRITERIA = process.env.NUMBER_SEARCH_CRITERIA;
const NUMBER_SEARCH_PATTERN = process.env.NUMBER_SEARCH_PATTERN;

const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

const run = async () => {
  try {
    const filter = {
      pattern: NUMBER_SEARCH_CRITERIA,
      searchPattern: NUMBER_SEARCH_PATTERN,
    };

    for await (const number of vonage.number.getOwnedNumbers(filter)) {
      console.log(number);
    }
  } catch (error) {
    console.error(error);
  }
};

run();
