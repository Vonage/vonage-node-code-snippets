require('dotenv').config({ path: __dirname + '/../.env' })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const NUMBER_SEARCH_CRITERIA = process.env.NUMBER_SEARCH_CRITERIA
const NUMBER_SEARCH_PATTERN = process.env.NUMBER_SEARCH_PATTERN

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage(
  {
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET
  },
  {
    debug: true
  }
)

vonage.numbers.getAvailableNumbers({
    application_id: VONAGE_APPLICATION_ID,
    search_pattern: NUMBER_SEARCH_PATTERN,
})
    .then(resp => console.log(result))
    .catch(err => console.error(err));
